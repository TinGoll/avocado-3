import { createStore } from "zustand";
import { MockOrderData, MockOrderStore } from "./mockOrder.types";
import { createNewMockDocument, createNewMockOrder } from "./utils";
import { wait } from "../../utils";

const initialData: MockOrderData = {
  _lastId: 0,
  orders: [],
};

export const mockOrderStore = createStore<MockOrderStore>()((set, get) => ({
  ...initialData,
  createOrder: async () => {
    const { incrementId } = get();
    incrementId();
    const { _lastId } = get();
    const orderId = _lastId;
    const documentId = Date.now().toString(16);
    const order = await createNewMockOrder({ id: orderId });
    const document = await createNewMockDocument({ id: documentId });
    document.orderBy = order.documents.length;
    order.documents.push(document);
    const { orders } = get();
    return set({ orders: [...orders, order] });
  },
  addDocumentToOrder: async (orderId) => {
    const order = get().orders.find((order) => order.id === orderId);
    if (!order) {
      throw new Error(`Заказ id: ${orderId} не найден.`);
    }
    const documentId = Date.now().toString(16);
    const document = await createNewMockDocument({ id: documentId });
    document.orderBy = order.documents.length;
    order.documents.push(document);
    const { orders } = get();
    return set({ orders: [...orders, order] });
  },
  updateOrder: async (orderData) => {
    await wait(500);
    const foundOrder = get().orders.find((order) => order.id === orderData.id);
    if (!foundOrder) {
      throw new Error(`Заказ id: ${orderData.id} не найден.`);
    }
    return set((state) => {
      return {
        orders: state.orders.map((order) => {
          if (order.id !== orderData.id) {
            return order;
          }
          const { id, documents, createdAt, ...data } = orderData;
          return { ...order, ...data };
        }),
      };
    });
  },
  updateDocument: async (orderId, documentData) => {
    await wait(500);
    const foundOrder = get().orders.find((order) => order.id === orderId);
    if (!foundOrder) {
      throw new Error(`Заказ id: ${orderId} не найден.`);
    }

    return set((state) => ({
      orders: state.orders.map((order) => {
        if (order.id !== orderId) {
          return order;
        }
        return {
          ...order,
          documents: order.documents.map((document) => {
            if (document.id !== documentData.id) {
              return document;
            }
            const { id, elements, fields: newFields, ...other } = documentData;
            const { fields: currentFields } = document;
            const updatedFields = { ...currentFields };

            if (newFields) {
              for (const key in newFields) {
                const fieldKey = key as keyof typeof newFields;
                if (Object.prototype.hasOwnProperty.call(newFields, fieldKey)) {
                  const newField = newFields[fieldKey];
                  const currentField = currentFields[fieldKey];
                  if (newField.originalData) {
                    updatedFields[fieldKey].originalData =
                      newField.originalData;
                    updatedFields[fieldKey].overriddenData = null;
                    continue;
                  }
                  if (
                    !newField.originalData &&
                    currentField.originalData &&
                    newField.overriddenData
                  ) {
                    updatedFields[fieldKey].overriddenData = {
                      ...currentField.overriddenData,
                      ...newField.overriddenData,
                    };
                  }
                }
              }
            }

            const updatedDocument = {
              ...document,
              ...other,
              fields: updatedFields,
            };
            return updatedDocument;
          }),
        };
      }),
    }));
  },
  incrementId: () => set((state) => ({ _lastId: ++state._lastId })),
  setId: (value) => set({ _lastId: value }),
  sortOrders: () => {
    const { orders } = get();
    orders.sort((a, b) => a.id - b.id);
    return set({ orders: [...orders] });
  },
}));
