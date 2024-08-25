import { useCallback, useState } from "react";
import { addMockCustomer } from "../models";
import { MOCK_MUTATE_DELAY } from "../settings";
import { AddCustomerIn, AddCustomerOut } from "@/avocado-app/shared/contract/services";

export const useAddCustomer = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback(
    (params: AddCustomerIn): Promise<AddCustomerOut> => {
      setIsMutating(true);
      return new Promise((res) => {
        setTimeout(() => {
          setIsMutating(false);
          addMockCustomer(params);
          res({});
        }, MOCK_MUTATE_DELAY);
      });
    },
    []
  );

  return { trigger, isMutating };
};
