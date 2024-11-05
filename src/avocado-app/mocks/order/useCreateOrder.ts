import { useCallback, useState } from "react";
import { createOrder } from "../models";
import { MOCK_MUTATE_DELAY } from "../settings";

export const useAddMaterial = (onSuccess?: (orderID: number) => void) => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback((): Promise<void> => {
    setIsMutating(true);
    return new Promise((res) => {
      setTimeout(() => {
        setIsMutating(false);
        createOrder(onSuccess);
        res();
      }, MOCK_MUTATE_DELAY);
    });
  }, []);

  return { trigger, isMutating };
};
