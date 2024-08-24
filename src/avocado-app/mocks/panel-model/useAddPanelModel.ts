import {
  AddPanelModelIn,
  AddPanelModelOut,
} from "@/avocado-app/shared/contract/services";
import { useCallback, useState } from "react";
import { MOCK_MUTATE_DELAY } from "../settings";
import { addMockPanelModel } from "../model";

export const useAddPanelModel = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback(
    (params: AddPanelModelIn): Promise<AddPanelModelOut> => {
      setIsMutating(true);
      return new Promise((res) => {
        setTimeout(() => {
          setIsMutating(false);
          addMockPanelModel(params);
          res({});
        }, MOCK_MUTATE_DELAY);
      });
    },
    []
  );

  return { trigger, isMutating };
};
