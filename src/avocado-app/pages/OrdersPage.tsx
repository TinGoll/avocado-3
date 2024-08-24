import { FC } from "react";
import { useGetCustomers } from "../mocks";
import { Button } from "antd";
import { useAddCustomer } from "../mocks/customers/useAddCustomer";

export const OrdersPage: FC = () => {
  const { data, isLoading } = useGetCustomers();
  const { trigger, isMutating } = useAddCustomer();

  const handleClick = (): void => {
    trigger({
      login: `addedLogin`,
      firstname: `addedFirstname`,
      lastname: `addedLastname`,
      middlename: `addedMiddlename`,
    });
  };
  return (
    <>
      <Button loading={isMutating} onClick={handleClick}>
        Добавить
      </Button>
      {isLoading && <div>Загрузка...</div>}
      <div>
        {data?.map((item) => (
          <div>
            {item.id} - {item.login}
          </div>
        ))}
      </div>
      <div>Тут будет таблица с заказами.</div>
    </>
  );
};
