import { Dye } from "@/avocado-app/shared/contract/types/dye.types";
import { useState, useEffect } from "react";
import { useMockDyes } from "../models";
import { MOCK_GET_DELAY } from "../settings";

export const useGetDyes = () => {
  const [data, setData] = useState<Dye[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const mocks = useMockDyes();

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
