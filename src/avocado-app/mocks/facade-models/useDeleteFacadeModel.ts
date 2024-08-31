import {
  DeleteFacadeModelIn,
  DeleteFacadeModelOut,
} from "@/avocado-app/shared/contract/services";
import { useCallback, useState } from "react";
import { deleteMockFacadeModel } from "../models";
import { MOCK_MUTATE_DELAY } from "../settings";

export const useDeleteFacadeModel = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback(
    (params: DeleteFacadeModelIn): Promise<DeleteFacadeModelOut> => {
      setIsMutating(true);
      return new Promise((res) => {
        setTimeout(() => {
          setIsMutating(false);
          deleteMockFacadeModel(params);
          res({});
        }, MOCK_MUTATE_DELAY);
      });
    },
    []
  );

  return { trigger, isMutating };
};
