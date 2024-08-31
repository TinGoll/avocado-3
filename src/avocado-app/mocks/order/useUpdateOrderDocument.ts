import { useCallback, useState } from "react";
import { updateDocument } from "../models";
import {
  UpdateDocumentIn,
  UpdateDocumentOut,
} from "@/avocado-app/shared/contract/services";
import { MOCK_MUTATE_DELAY } from "../settings";

export const useUpdateOrderDocument = (orderID: number) => {
  const [isMutating, setIsMutating] = useState<boolean>(false);

  const trigger = useCallback(
    (params: UpdateDocumentIn): Promise<UpdateDocumentOut> => {
      setIsMutating(true);
      return new Promise((res) => {
        setTimeout(() => {
          setIsMutating(false);
          updateDocument(orderID, params);
          res({});
        }, MOCK_MUTATE_DELAY);
      });
    },
    []
  );

  return { trigger, isMutating };
};
