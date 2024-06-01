import { FC } from "react";
import { OrderCustomerDetails } from "./order-сustomer-details";
import { OrderDocuments } from "./order-documents";

export const EditableOrder: FC = () => {
  return (
    <>
      <OrderCustomerDetails />
      <OrderDocuments />
    </>
  );
};
