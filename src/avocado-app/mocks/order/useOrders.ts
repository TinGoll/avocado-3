import { Order } from "@/avocado-app/shared/contract/types";
import { useEffect, useState } from "react";
import { useGetMockOrders } from "../models";
import { MOCK_GET_DELAY } from "../settings";

export const useOrders = () => {
  const [data, setData] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const mocks = useGetMockOrders();

  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setData(mocks);
      setIsLoading(false);
    }, MOCK_GET_DELAY);
    return () => clearTimeout(timeoutId);
  }, [mocks]);

  return { data, isLoading };
};
