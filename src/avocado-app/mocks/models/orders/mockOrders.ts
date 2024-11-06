import { OrderCriticality } from "@/avocado-app/shared/contract/services";
import { Order } from "@/avocado-app/shared/contract/types";

export const mockOrders: Order[] = [
  {
    id: 100,
    name: "Тестовый заказ",
    errors: ["Не указан цвет", "Не указана модель фасада"],
    customer: {
      id: 1,
      login: "costomer-1",
      firstname: "Тестовй зказчик",
    },
    author: "mock-user",
    priceName: null,
    amount: 256000,
    workingDays: 0,
    criticality: OrderCriticality.NORMAL,
    createdAt: new Date(),
    documents: [
      {
        id: "mock-uuid",
        name: "mock-dokument",
        elements: [],
        orderBy: 1,
        fields: {
          facadeModel: {
            originalData: null,
            overriddenData: null,
          },
          panelModel: {
            originalData: null,
            overriddenData: null,
          },
          material: {
            originalData: null,
            overriddenData: null,
          },
          dye: {
            originalData: null,
            overriddenData: null,
          },
          varnish: {
            originalData: null,
            overriddenData: null,
          },
          patina: {
            originalData: null,
            overriddenData: null,
          },
        },
      },
    ],
  },
];
