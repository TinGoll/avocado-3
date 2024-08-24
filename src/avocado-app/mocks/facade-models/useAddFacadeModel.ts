import {
  AddFacadeModelIn,
  AddFacadeModelOut,
} from "@/avocado-app/shared/contract/services";
import { addMockFacadeModel } from "../model";
import { useCallback, useState } from "react";
import { MOCK_MUTATE_DELAY } from "../settings";

export const useAddFacadeModel = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback(
    (params: AddFacadeModelIn): Promise<AddFacadeModelOut> => {
      setIsMutating(true);
      return new Promise((res) => {
        setTimeout(() => {
          setIsMutating(false);
          addMockFacadeModel(params);
          res({});
        }, MOCK_MUTATE_DELAY);
      });
    },
    []
  );

  return { trigger, isMutating };
};
