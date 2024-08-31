import {
  UpdateDocumentIn,
  UpdateOrderIn,
} from "@/avocado-app/shared/contract/services";
import { Order } from "@/avocado-app/shared/contract/types";

export interface MockOrderData {
  _lastId: number;
  orders: Order[];
}

export interface MockOrderActions {
  createOrder: () => Promise<void>;
  addDocumentToOrder: (orderId: number) => Promise<void>;
  updateOrder: (orderData: UpdateOrderIn) => Promise<void>;
  updateDocument: (
    orderId: number,
    documentData: UpdateDocumentIn
  ) => Promise<void>;
  incrementId: () => void;
  setId: (value: number) => void;
  sortOrders: () => void;
}

export type MockOrderStore = MockOrderData & MockOrderActions;
