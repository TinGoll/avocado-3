import {
  DeleteMaterialIn,
  DeleteMaterialOut,
} from "@/avocado-app/shared/contract/services/material";
import { useState, useCallback } from "react";
import { deleteMockMaterial } from "../model";
import { MOCK_MUTATE_DELAY } from "../settings";

export const useDeleteMaterial = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback(
    (params: DeleteMaterialIn): Promise<DeleteMaterialOut> => {
      setIsMutating(true);
      return new Promise((res) => {
        setTimeout(() => {
          setIsMutating(false);
          deleteMockMaterial(params);
          res({});
        }, MOCK_MUTATE_DELAY);
      });
    },
    []
  );

  return { trigger, isMutating };
};
