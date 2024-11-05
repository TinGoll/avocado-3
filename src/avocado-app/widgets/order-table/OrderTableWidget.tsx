import { FC, useMemo } from "react";
import { Table } from "antd";
import { tableСolumns } from "./tableСolumns";
import { useOrdersList } from "@/avocado-app/mocks/order";
import { orderToTableDataConverter } from "./utils/orderToTableDataConverter";
import { OrderTableSkeleton } from "./OrderTableSkeleton";

export const OrderTableWidget: FC = () => {
  const { data: orders, isLoading } = useOrdersList();

  const data = useMemo(() => orderToTableDataConverter(orders), [orders]);

  if (isLoading) {
    return <OrderTableSkeleton />;
  }

  return (
    <div>
      <Table
        size="small"
        columns={tableСolumns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
};
