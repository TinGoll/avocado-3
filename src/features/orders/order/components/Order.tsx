import { FC } from "react";
import { OrderContainer as Container } from "./OrderContainer";
import { useOrderMode } from "../hooks";
import { EditableOrder } from "../features/editable-order";
import { InfoOrder } from "../features/info-order";

export const Order: FC = () => {
  const mode = useOrderMode();
  return (
    <Container>
      <div className="main">
        {mode === "edit" ? <EditableOrder /> : <InfoOrder />}
      </div>
      <div className="sidebar">{mode}</div>
    </Container>
  );
};
