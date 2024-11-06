import { useParams } from "react-router-dom";

type TUseParams = { orderId: string };
type TFunction = () => number;

export const useOrderId: TFunction = () => {
  const params = useParams<TUseParams>();
  const id = Number(params.orderId);
  return id;
};
