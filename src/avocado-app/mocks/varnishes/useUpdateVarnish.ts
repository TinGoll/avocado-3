import { useState, useCallback } from "react";
import { MOCK_MUTATE_DELAY } from "../settings";
import { updateMockVarnish } from "../model";
import {
  UpdateVarnishIn,
  UpdateVarnishOut,
} from "@/avocado-app/shared/contract/services";

export const useUpdateVarnish = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback(
    (params: UpdateVarnishIn): Promise<UpdateVarnishOut> => {
      setIsMutating(true);
      return new Promise((res) => {
        setTimeout(() => {
          setIsMutating(false);
          updateMockVarnish(params);
          res({});
        }, MOCK_MUTATE_DELAY);
      });
    },
    []
  );

  return { trigger, isMutating };
};
