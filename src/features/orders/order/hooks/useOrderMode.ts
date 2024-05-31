import { useParams } from "react-router-dom";

type Mode = "edit" | "info" | "print";
type TUseParams = { orderId: string; "*": Mode };

type TFunction = () => Mode;

export const useOrderMode: TFunction = () => {
  const params = useParams<TUseParams>();

  return params["*"] as Mode;
};
