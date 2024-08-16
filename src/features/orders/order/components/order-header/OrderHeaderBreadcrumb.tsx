import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

export const OrderHeaderBreadcrumb: FC<Props> = ({ orderNumber, title }) => {
  return (
    <Breadcrumb
      items={[
        {
          title: (
            <Link to="/">
              <HomeOutlined />
            </Link>
          ),
        },
        {
          title: (
            <Link to="orders">
              <span>Заказы</span>
            </Link>
          ),
        },
        {
          title: (
            <>
              <span>{`${title ? title : "Заказ №"} ${orderNumber}`}</span>
            </>
          ),
        },
      ]}
    />
  );
};

type Props = {
  orderNumber: number;
  title?: string;
};
