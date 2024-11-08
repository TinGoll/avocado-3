import { useCallback, useState } from "react";
import { updateMockCustomer } from "../models";
import { MOCK_MUTATE_DELAY } from "../settings";
import {
  UpdateCustomerIn,
  UpdateCustomerOut,
} from "@/avocado-app/shared/contract/services";

export const useUpdateCustomer = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback(
    (params: UpdateCustomerIn): Promise<UpdateCustomerOut> => {
      setIsMutating(true);
      return new Promise((res) => {
        setTimeout(() => {
          setIsMutating(false);
          updateMockCustomer(params);
          res({});
        }, MOCK_MUTATE_DELAY);
      });
    },
    []
  );

  return { trigger, isMutating };
};
