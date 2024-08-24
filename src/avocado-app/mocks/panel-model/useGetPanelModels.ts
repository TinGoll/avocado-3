import { PanelModel } from "@/avocado-app/shared/contract/types/panel-model.types";
import { useState, useEffect } from "react";
import { MOCK_GET_DELAY } from "../settings";
import { useMockPanelModels } from "../model";

export const useGetPanelModels = () => {
  const [data, setData] = useState<PanelModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const mocks = useMockPanelModels();

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
