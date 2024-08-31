import { useStore } from "zustand";
import { mockOrderStore } from "./mockOrder.store";

export const useGetMockOrders = () =>
  useStore(mockOrderStore, (state) => state.orders);

export const useGetMockOrder = (orderId: number) =>
    useStore(mockOrderStore, (state) => state.orders.find(order => order.id === orderId));
  
export const { addDocumentToOrder, updateDocument, updateOrder } = mockOrderStore.getState();