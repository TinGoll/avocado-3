import styled from "@emotion/styled";
import { FC } from "react";
import { SuppliersAddButton, SuppliersHeader } from "./SuppliersHeader";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { Typography } from "@/components/typography";
import { SuppliersTable } from "./SuppliersTable";

export const Suppliers: FC = () => {
  return (
    <div>
      <SuppliersHeader>
        <Typography type="subtitle2" css={{ fontSize: 18 }}>
          Добавьте нового поставщика
        </Typography>
        <SuppliersAddButton icon={<AppstoreAddOutlined />} type="primary">
          Добавить
        </SuppliersAddButton>
      </SuppliersHeader>
      <SuppliersTable />
    </div>
  );
};
