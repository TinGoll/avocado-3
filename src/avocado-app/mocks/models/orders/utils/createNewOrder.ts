import { MOCK_MUTATE_DELAY } from "@/avocado-app/mocks/settings";
import { OrderCriticality } from "@/avocado-app/shared/contract/services";
import { Order, OrderDocument } from "@/avocado-app/shared/contract/types";
import { authenticationStore } from "@/entities/authentication";

type CreateNewOrderProps = {
  id: number;
  name?: string;
};

export const createNewOrder = ({
  id,
  name,
}: CreateNewOrderProps): Promise<Order> => {
  const login = authenticationStore.getState().user;
  const newDocument: OrderDocument = {
    id: Date.now().toString(8),
    orderBy: 0,
    name: "",
    facadeModel: { originalData: null },
    panelModel: { originalData: null },
    material: { originalData: null },
    dye: { originalData: null },
    varnish: { originalData: null },
    patina: { originalData: null },
  };
  const newOrder: Order = {
    id,
    name: name || "",
    customer: null,
    author: String(login),
    priceName: "",
    amount: 0,
    workingDays: 24,
    criticality: OrderCriticality.NORMAL,
    createdAt: new Date(),
    documents: [newDocument],
  };
  return new Promise((res) =>
    setTimeout(() => res(newOrder), MOCK_MUTATE_DELAY)
  );
};
