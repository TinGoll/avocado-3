import { useOrder } from "@/avocado-app/mocks/order";
import { useOrderId } from "./useOrderId";

export const useCurrentOrder = () => {
  const orderId = useOrderId();
  return useOrder(orderId);
};
