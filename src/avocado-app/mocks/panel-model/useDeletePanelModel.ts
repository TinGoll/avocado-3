import {
  DeletePanelModelIn,
  DeletePanelModelOut,
} from "@/avocado-app/shared/contract/services";
import { useCallback, useState } from "react";
import { deleteMockPanelModel } from "../model";
import { MOCK_MUTATE_DELAY } from "../settings";

export const useDeletePanelModel = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback(
    (params: DeletePanelModelIn): Promise<DeletePanelModelOut> => {
      setIsMutating(true);
      return new Promise((res) => {
        setTimeout(() => {
          setIsMutating(false);
          deleteMockPanelModel(params);
          res({});
        }, MOCK_MUTATE_DELAY);
      });
    },
    []
  );

  return { trigger, isMutating };
};
