import { useState, useCallback } from "react";
import { updateMockMaterial } from "../model";
import { MOCK_MUTATE_DELAY } from "../settings";
import {
  UpdateMaterialIn,
  UpdateMaterialOut,
} from "@/avocado-app/shared/contract/services";

export const useUpdateMaterial = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback(
    (params: UpdateMaterialIn): Promise<UpdateMaterialOut> => {
      setIsMutating(true);
      return new Promise((res) => {
        setTimeout(() => {
          setIsMutating(false);
          updateMockMaterial(params);
          res({});
        }, MOCK_MUTATE_DELAY);
      });
    },
    []
  );

  return { trigger, isMutating };
};
