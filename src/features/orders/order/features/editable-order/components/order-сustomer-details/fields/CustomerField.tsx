import { Editable } from "@/components/ui";
import { OrderField } from "@/features/orders/order/components/order-field";
import { Input } from "antd";
import { useState } from "react";

const testApi = () => {
  return new Promise((res, rej) => {
    setTimeout(rej, 2000);
  });
};

export const CustomerField = () => {
  const [data, setData] = useState<string>("Заказчик");
  const handleSave = async (name: string, value: string) => {
    try {
      await testApi();
      setData(value);
    } catch (error) {
      throw error;
    }
  };
  return (
    <OrderField label="Заказчик">
      <Editable
        name="customer"
        onSave={handleSave}
        defaultValue={data}
        autoSelect
        control={({ value, ...props }) => (
          <Input size="small" value={value || ""} {...props} />
        )}
      >
        {data}
      </Editable>
    </OrderField>
  );
};
