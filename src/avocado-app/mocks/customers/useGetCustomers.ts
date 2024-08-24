import { Customer } from "@/avocado-app/shared/contract/services/customer";
import { useEffect, useState } from "react";
import { MOCK_GET_DELAY } from "../settings";
import { useMockCustomers } from "../model";

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
