import { FC } from "react";
import styled from "@emotion/styled";
import { Editable } from "@/entities/editable";
import { AutoComplete, AutoCompleteProps } from "antd";
import { useGetCustomers } from "@/avocado-app/mocks";
import { wait } from "@/avocado-app/mocks/utils";

const Wrapper = styled.div`
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  font-weight: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-overflow: inherit;
  & .value {
    display: inline-block;
    min-width: 80px;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    font-weight: inherit;
    font-family: inherit;
    text-decoration: inherit;
    text-overflow: inherit;
  }

  & .control {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    .ant-select-selection-search {
      color: inherit;
      font-size: inherit;
      font-weight: inherit;
    }
  }
`;

type Props = {
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
};

export const CustomerOrderPicker: FC<Props> = ({
  width = 120,
  minWidth = 120,
  maxWidth = 220,
}) => {
  const defaultValue = "Значение CustomerOrderPicker";

  const { data, isLoading } = useGetCustomers();
  const options: AutoCompleteProps["options"] = data.map((customer) => ({
    value: customer.login,
    label: customer.login,
  }));

  const handleOnSave = async (name: string, value: string) => {
    await wait();
    throw new Error('Huy')
    console.log(name, value);
  };

  return (
    <Wrapper>
      <Editable<string>
        name="customer"
        defaultValue={defaultValue}
        confirmOnBlur
        confirmOnEnter
        ignoredOutsideClasses={["ant-select-dropdown", "ant-select-clear"]}
        onSave={handleOnSave}
        control={(props) => (
          <AutoComplete
            {...props}
            options={options}
            size="small"
            className="control"
            allowClear
            filterOption
            filterSort={(optionA, optionB) => {
              const a = String(optionA.value);
              const b = String(optionB.value);
              return a.localeCompare(b, undefined, { sensitivity: "base" });
            }}
            css={{ width, minWidth, maxWidth }}
          />
        )}
      >
        <span className="value">{defaultValue}</span>
      </Editable>
    </Wrapper>
  );
};
