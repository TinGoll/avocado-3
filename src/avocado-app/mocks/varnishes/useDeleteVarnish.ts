import { useState, useCallback } from "react";
import { deleteMockVarnish } from "../models";
import { MOCK_MUTATE_DELAY } from "../settings";
import {
  DeleteVarnishIn,
  DeleteVarnishOut,
} from "@/avocado-app/shared/contract/services";

export const useDeleteVarnish = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback(
    (params: DeleteVarnishIn): Promise<DeleteVarnishOut> => {
      setIsMutating(true);
      return new Promise((res) => {
        setTimeout(() => {
          setIsMutating(false);
          deleteMockVarnish(params);
          res({});
        }, MOCK_MUTATE_DELAY);
      });
    },
    []
  );

  return { trigger, isMutating };
};
