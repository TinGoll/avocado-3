import { useState, useCallback } from "react";
import { addMockMaterial } from "../model";
import { MOCK_MUTATE_DELAY } from "../settings";
import { AddMaterialIn, AddMaterialOut } from "@/avocado-app/shared/contract/services";

export const useAddMaterial = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback(
    (params: AddMaterialIn): Promise<AddMaterialOut> => {
      setIsMutating(true);
      return new Promise((res) => {
        setTimeout(() => {
          setIsMutating(false);
          addMockMaterial(params);
          res({});
        }, MOCK_MUTATE_DELAY);
      });
    },
    []
  );

  return { trigger, isMutating };
};
