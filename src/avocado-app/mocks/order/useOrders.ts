import { Order } from "@/avocado-app/shared/contract/types";
import { useEffect, useState } from "react";
import { useGetMockOrder } from "../models";
import { MOCK_GET_DELAY } from "../settings";

export const useOrder = (orderID: number) => {
  const [data, setData] = useState<Order| undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const mocks = useGetMockOrder(orderID);

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
