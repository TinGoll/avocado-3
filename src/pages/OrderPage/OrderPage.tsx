import { Tag } from "antd";
import { useParams, useSearchParams } from "react-router-dom";

type TParams = {
  orderId?: string;
};

export const OrderPage = () => {
  const params = useParams<TParams>();
  const orderId = params.orderId;
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <div>Заказ № {orderId}</div>
      <div>
        {searchParams.getAll("test_param").map((item) => (
          <Tag>{item}</Tag>
        ))}
      </div>
    </div>
  );
};
