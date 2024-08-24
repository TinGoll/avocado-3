import {
  UpdateDyeIn,
  UpdateDyeOut,
} from "@/avocado-app/shared/contract/services";
import { useState, useCallback } from "react";
import { updateMockDye } from "../model";
import { MOCK_MUTATE_DELAY } from "../settings";

export const useUpdateDye = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback((params: UpdateDyeIn): Promise<UpdateDyeOut> => {
    setIsMutating(true);
    return new Promise((res) => {
      setTimeout(() => {
        setIsMutating(false);
        updateMockDye(params);
        res({});
      }, MOCK_MUTATE_DELAY);
    });
  }, []);

  return { trigger, isMutating };
};
