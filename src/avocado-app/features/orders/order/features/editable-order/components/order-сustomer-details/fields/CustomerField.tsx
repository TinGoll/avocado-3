import { OrderField } from "@/avocado-app/features/orders/order/components/order-field";
import { useGetCustomers } from "@/avocado-app/mocks";
import { useCurrentOrder, useOrderId } from "@/avocado-app/shared/hooks";
import { Editable } from "@/entities/editable";
import { Button, Select, Typography } from "antd";
import { NOT_SELECTED } from "./defaultTextconstants";
import { FC, useCallback, useMemo, useState } from "react";
import { useUpdateOrder } from "@/avocado-app/mocks/order";
import styled from "@emotion/styled";
import { getDisplayName, searchUser } from "@/avocado-app/shared/utils";

const { Text } = Typography;

const StyledNotFoundContent = styled.div`
  text-align: center;
  & .customer-search-text {
    color: ${({ theme }) => theme.pelette.lime[800]};
  }

  & .customer-search-button {
    width: 100%;
    color: ${({ theme }) => theme.pelette.success[600]};
  }
`;

type NotFoundContentProps = {
  searchText?: string;
  onClick?: () => void;
};
const NotFoundContent: FC<NotFoundContentProps> = ({ onClick, searchText }) => {
  return (
    <StyledNotFoundContent>
      <Text type="secondary" ellipsis>
        "<span className="customer-search-text">{searchText}</span>"<br />
        не найден.
      </Text>
      <Button
        type="default"
        size="small"
        className="customer-search-button"
        onClick={onClick}
      >
        Добавить
      </Button>
    </StyledNotFoundContent>
  );
};

export const CustomerField: FC = () => {
  const [searchText, setSearchText] = useState<string>("");

  const { data: customers = [], isLoading: customersLoading } =
    useGetCustomers();
  const orderId = useOrderId();
  const { data: order, isLoading: orderLoading } = useCurrentOrder();
  const { trigger } = useUpdateOrder();

  const handleSave = useCallback(
    async (_: string, value: string) => {
      const customer = customers.find((c) => c.login === value);
      try {
        await trigger({
          id: orderId,
          customer: customer ? { ...customer } : null,
        });
      } catch (error) {
        throw error;
      }
    },
    [customers]
  );

  const options = useMemo(
    () =>
      customers.map((customer) => ({
        value: customer.login,
        label: getDisplayName(customer),
        customer: customer,
      })),
    [customers]
  );

  const loading = customersLoading || orderLoading || !order;
  const customer = order?.customer;

  return (
    <OrderField label="Заказчик" loading={loading}>
      <Editable<string>
        name="customer"
        confirmOnBlur
        onSave={handleSave}
        defaultValue={customer?.login || ""}
        autoSelect
        ignoredOutsideClasses={["ant-select-dropdown"]}
        control={({ ref, ...props }) => (
          <Select
            style={{ minWidth: 140 }}
            notFoundContent={
              <NotFoundContent
                searchText={searchText}
                onClick={() => console.log(searchText)}
              />
            }
            allowClear
            defaultOpen
            showSearch
            filterOption={(inputValue, option) => {
              return searchUser(inputValue, option?.customer);
            }}
            autoFocus
            onSearch={setSearchText}
            searchValue={searchText}
            size="small"
            options={options}
            {...props}
          />
        )}
      >
        {customer ? getDisplayName(customer) : NOT_SELECTED}
      </Editable>
    </OrderField>
  );
};
