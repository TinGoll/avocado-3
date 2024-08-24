import { Customer } from "@/avocado-app/shared/contract/services/customer";
import { useEffect, useState } from "react";
import { useMockCustomers } from "../model/mock.store";
import { MOCK_GET_DELAY } from "../settings";

export const useGetCustomers = () => {
  const [data, setData] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const mocks = useMockCustomers();

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
