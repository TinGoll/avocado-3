import {
  DeleteDyeIn,
  DeleteDyeOut,
} from "@/avocado-app/shared/contract/services";
import { useState, useCallback } from "react";
import { deleteMockDye } from "../model";
import { MOCK_MUTATE_DELAY } from "../settings";

export const useDeleteDye = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback((params: DeleteDyeIn): Promise<DeleteDyeOut> => {
    setIsMutating(true);
    return new Promise((res) => {
      setTimeout(() => {
        setIsMutating(false);
        deleteMockDye(params);
        res({});
      }, MOCK_MUTATE_DELAY);
    });
  }, []);

  return { trigger, isMutating };
};
