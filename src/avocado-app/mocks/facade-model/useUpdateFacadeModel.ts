import { useCallback, useState } from "react";
import { updateMockFacadeModel } from "../model";
import { MOCK_MUTATE_DELAY } from "../settings";
import {
  UpdateFacadeModelIn,
  UpdateFacadeModelOut,
} from "@/avocado-app/shared/contract/services";

export const useUpdateFacadeModel = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback(
    (params: UpdateFacadeModelIn): Promise<UpdateFacadeModelOut> => {
      setIsMutating(true);
      return new Promise((res) => {
        setTimeout(() => {
          setIsMutating(false);
          updateMockFacadeModel(params);
          res({});
        }, MOCK_MUTATE_DELAY);
      });
    },
    []
  );

  return { trigger, isMutating };
};
