import { useCallback, useState } from "react";
import { deleteMockCustomer } from "../model";
import { MOCK_MUTATE_DELAY } from "../settings";
import {
  DeleteCustomerIn,
  DeleteCustomerOut,
} from "@/avocado-app/shared/contract/services";

export const useDeleteCustomer = () => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback(
    (params: DeleteCustomerIn): Promise<DeleteCustomerOut> => {
      setIsMutating(true);
      return new Promise((res) => {
        setTimeout(() => {
          setIsMutating(false);
          deleteMockCustomer(params);
          res({});
        }, MOCK_MUTATE_DELAY);
      });
    },
    []
  );

  return { trigger, isMutating };
};
