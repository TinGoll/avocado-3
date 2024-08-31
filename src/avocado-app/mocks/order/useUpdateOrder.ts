import { UpdateOrderIn, UpdateOrderOut } from "@/avocado-app/shared/contract/services";
import { useCallback, useState } from "react";
import { updateOrder } from "../models";
import { MOCK_MUTATE_DELAY } from "../settings";

export const useUpdateOrder = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback(
    (params: UpdateOrderIn): Promise<UpdateOrderOut> => {
      setIsMutating(true);
      return new Promise((res) => {
        setTimeout(() => {
          setIsMutating(false);
          updateOrder(params);
          res({});
        }, MOCK_MUTATE_DELAY);
      });
    },
    []
  );

  return { trigger, isMutating };
};
