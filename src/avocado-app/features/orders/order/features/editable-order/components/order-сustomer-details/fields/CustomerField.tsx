import { OrderField } from "@/avocado-app/features/orders/order/components/order-field";
import { Editable } from "@/entities/editable";
import { Input } from "antd";
import { useState } from "react";

const testApi = () => {
  return new Promise((res, rej) => {
    setTimeout(res, 2000);
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
      <Editable<string>
        name="customer"
        confirmOnBlur
        onSave={handleSave}
        defaultValue={data}
        autoSelect
        control={({ value, ...props }) => (
          <Input size="small" value={value} {...props} />
        )}
      >
        {data}
      </Editable>
    </OrderField>
  );
};
