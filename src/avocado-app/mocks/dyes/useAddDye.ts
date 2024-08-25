import { AddDyeIn, AddDyeOut } from "@/avocado-app/shared/contract/services";
import { useState, useCallback } from "react";
import { MOCK_MUTATE_DELAY } from "../settings";
import { addMockDye } from "../models";

export const useAddDye = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback((params: AddDyeIn): Promise<AddDyeOut> => {
    setIsMutating(true);
    return new Promise((res) => {
      setTimeout(() => {
        setIsMutating(false);
        addMockDye(params);
        res({});
      }, MOCK_MUTATE_DELAY);
    });
  }, []);

  return { trigger, isMutating };
};
