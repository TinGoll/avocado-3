import { FacadeModel } from "@/avocado-app/shared/contract/types";
import { useEffect, useState } from "react";
import { useMockFacadeModels } from "../models";
import { MOCK_GET_DELAY } from "../settings";

export const useGetFacadeModels = () => {
  const [data, setData] = useState<FacadeModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const mocks = useMockFacadeModels();

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
