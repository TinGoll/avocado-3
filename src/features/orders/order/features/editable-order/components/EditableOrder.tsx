import { Block } from "@/components/ui";
import { FC } from "react";
import { OrderHeader } from "../../../components/order-header/OrderHeader";
import { OrderCustomerDetails } from "./order-сustomer-details";
import { OrderDocumentDetails } from "./order-document-details";

export const EditableOrder: FC = () => {
  return (
    <>
      <OrderCustomerDetails />
      <OrderDocumentDetails />
    </>
  );
};
