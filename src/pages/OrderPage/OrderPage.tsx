import { OrderBlock } from "@/features/orders/order";
import { FC } from "react";
import { useParams, useSearchParams } from "react-router-dom";

type TParams = {
  orderId: string;
};

export const OrderPage: FC = () => {
  const params = useParams<TParams>();
  const orderId = Number(params.orderId);
  const [searchParams, setSearchParams] = useSearchParams();
  
  return <OrderBlock orderId={orderId} />;
};
