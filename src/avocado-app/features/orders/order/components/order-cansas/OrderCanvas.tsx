import { OrderHeader } from "../order-header";

import { OrderCanvasContainer as Container } from "./OrderCanvasContainer";
import { EditableOrder } from "../../features/editable-order";
import { FC } from "react";
import { InfoOrder } from "../../features/info-order";
import { PrintOrder } from "../../features/print-order";
import { useOrderMode } from "@/avocado-app/shared/hooks";

const Orderswitcher: FC = () => {
  const mode = useOrderMode();
  switch (mode) {
    case "edit":
      return <EditableOrder />;
    case "info":
      return <InfoOrder />;
    case "print":
      return <PrintOrder />;
    default:
      return <div>Unknown mode</div>;
  }
};

export const OrderCanvas: FC = () => {
  return (
    <Container>
      <div className="sticky-header">
        <OrderHeader />
      </div>
      <Orderswitcher />
    </Container>
  );
};
