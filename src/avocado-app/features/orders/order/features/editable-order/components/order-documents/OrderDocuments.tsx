import { FC } from "react";
import { useMode } from "@/entities/theme";
import { OrderDocument } from "./OrderDocument";
import { DocumentTabs } from "./DocumentTabs";

export const OrderDocuments: FC = () => {
  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: "add" | "remove"
  ) => {
    console.log(targetKey, action);
  };
  const mode = useMode();
  return (
    <DocumentTabs
      mode={mode}
      defaultActiveKey="1"
      type="editable-card"
      onEdit={onEdit}
      items={[
        {
          key: "1",
          label: "Документ 1",
          children: <OrderDocument />,
        },
        {
          key: "2",
          label: "Документ 2",
          children: <OrderDocument />,
        },
        {
          key: "3",
          label: "Документ c длинным названием 3",
          children: <OrderDocument />,
        },
      ]}
    />
  );
};
