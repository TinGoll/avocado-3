import { useState, useCallback } from "react";
import { addMockVarnish } from "../models";
import { MOCK_MUTATE_DELAY } from "../settings";
import {
  AddVarnishIn,
  AddVarnishOut,
} from "@/avocado-app/shared/contract/services";

export const useAddVarnish = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback(
    (params: AddVarnishIn): Promise<AddVarnishOut> => {
      setIsMutating(true);
      return new Promise((res) => {
        setTimeout(() => {
          setIsMutating(false);
          addMockVarnish(params);
          res({});
        }, MOCK_MUTATE_DELAY);
      });
    },
    []
  );

  return { trigger, isMutating };
};
