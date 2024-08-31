import {
  UpdatePanelModelIn,
  UpdatePanelModelOut,
} from "@/avocado-app/shared/contract/services";
import { useCallback, useState } from "react";
import { updateMockPanelModel } from "../models";
import { MOCK_MUTATE_DELAY } from "../settings";

export const useUpdatePanelModel = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback(
    (params: UpdatePanelModelIn): Promise<UpdatePanelModelOut> => {
      setIsMutating(true);
      return new Promise((res) => {
        setTimeout(() => {
          setIsMutating(false);
          updateMockPanelModel(params);
          res({});
        }, MOCK_MUTATE_DELAY);
      });
    },
    []
  );

  return { trigger, isMutating };
};
