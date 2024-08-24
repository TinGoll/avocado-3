import { Material } from "@/avocado-app/shared/contract/types/material.types";
import { useState, useEffect } from "react";
import { useMockMaterials } from "../model";
import { MOCK_GET_DELAY } from "../settings";

export const useGetMaterials = () => {
  const [data, setData] = useState<Material[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const mocks = useMockMaterials();

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
