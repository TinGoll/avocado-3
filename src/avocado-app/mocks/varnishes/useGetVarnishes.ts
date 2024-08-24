import { Varnish } from "@/avocado-app/shared/contract/types/varnish.types";
import { useMockVarnishes } from "../model";
import { useState, useEffect } from "react";
import { MOCK_GET_DELAY } from "../settings";

export const useGetVarnishes = () => {
  const [data, setData] = useState<Varnish[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const mocks = useMockVarnishes();

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
