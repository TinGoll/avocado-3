import { useEffect, useState } from "react";
import { useGetMockOrders } from "../models";
import { Order } from "@/avocado-app/shared/contract/types";
import { MOCK_GET_DELAY } from "../settings";

export const useOrdersList = () => {
  const [data, setData] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const mocks = useGetMockOrders();

  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setData(mocks);
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [mocks]);

  return { data, isLoading };
};
