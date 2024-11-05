import { Popover, TableProps, Tag, Typography } from "antd";
import { OrderTableData } from "./order-table.types";
import { OrderCriticality } from "@/avocado-app/shared/contract/services";
import { FileOutlined, FireTwoTone, WarningOutlined } from "@ant-design/icons";

export const tableСolumns: TableProps<OrderTableData>["columns"] = [
  {
    title: <FileOutlined />,
    width: 30,
    align: "center",
    dataIndex: "criticality",
    key: "criticality",
    render: (text) => {
      return text === OrderCriticality.CRITICAL ? (
        <FireTwoTone />
      ) : (
        <FileOutlined />
      );
    },
  },

  {
    align: "center",
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    align: "center",
    title: "Заказчик",
    dataIndex: "customer",
    key: "customer",
    render: (text) => {
      return (
        <Popover
          content={
            <>
              <Typography.Text>Данные о заказчике</Typography.Text>
            </>
          }
          title="Заказчик"
          trigger="hover"
        >
          <Typography.Text>{text}</Typography.Text>
        </Popover>
      );
    },
  },

  {
    align: "center",
    title: "Название заказа",
    dataIndex: "name",
    key: "name",
  },
  {
    align: "center",
    width: "auto",
    title: "Модель фасада",
    dataIndex: "facadeModels",
    key: "facadeModels",
    render: (_, { facadeModels = [] }) => {
      const uniqueValues = [...new Set(facadeModels)];
      if (!uniqueValues.length) {
        return (
          <>
            <WarningOutlined size={10} />
            &nbsp;
            <Typography.Text type="secondary">Не указана</Typography.Text>
          </>
        );
      }
      return uniqueValues.map((value) => (
        <Tag color="volcano" key={value}>
          {value.toUpperCase()}
        </Tag>
      ));
    },
  },
  {
    align: "center",
    title: "Материал",
    dataIndex: "materials",
    key: "materials",
    render: (_, { materials = [] }) => {
      const uniqueValues = [...new Set(materials)];
      if (!uniqueValues.length) {
        return (
          <>
            <WarningOutlined size={10} />
            &nbsp;
            <Typography.Text type="secondary">Не указан</Typography.Text>
          </>
        );
      }
      return uniqueValues.map((value) => (
        <Tag color="cyan" key={value}>
          {value.toUpperCase()}
        </Tag>
      ));
    },
  },

  {
    align: "center",
    title: "Краситель",
    dataIndex: "dyes",
    key: "dyes",
    render: (_, { dyes = [] }) => {
      const uniqueValues = [...new Set(dyes)];
      if (!uniqueValues.length) {
        return (
          <>
            <WarningOutlined size={10} />
            &nbsp;
            <Typography.Text type="secondary">Не указан</Typography.Text>
          </>
        );
      }
      return uniqueValues.map((value) => (
        <Tag color="pink" key={value}>
          {value.toUpperCase()}
        </Tag>
      ));
    },
  },

  {
    align: "center",
    title: "Патина",
    dataIndex: "patinas",
    key: "patinas",
    render: (_, { patinas = [] }) => {
      const uniqueValues = [...new Set(patinas)];
      if (!uniqueValues.length) {
        return (
          <>
            <WarningOutlined size={10} />
            &nbsp;
            <Typography.Text type="secondary">Не указана</Typography.Text>
          </>
        );
      }
      return uniqueValues.map((value) => (
        <Tag color="pink" key={value}>
          {value.toUpperCase()}
        </Tag>
      ));
    },
  },

  {
    align: "center",
    title: "Лак",
    dataIndex: "varnishes",
    key: "varnishes",
    render: (_, { varnishes = [] }) => {
      const uniqueValues = [...new Set(varnishes)];
      if (!uniqueValues.length) {
        return (
          <>
            <WarningOutlined size={10} />
            &nbsp;
            <Typography.Text type="secondary">Не указан</Typography.Text>
          </>
        );
      }
      return uniqueValues.map((value) => (
        <Tag color="gold" key={value}>
          {value.toUpperCase()}
        </Tag>
      ));
    },
  },

  {
    align: "center",
    title: "Создан",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    align: "center",
    title: "Автор",
    dataIndex: "author",
    key: "author",
  },
  {
    align: "center",
    title: "Сумма",
    dataIndex: "amount",
    key: "amount",
  },
];
