import { MOCK_MUTATE_DELAY } from "@/avocado-app/mocks/settings";
import { OrderCriticality } from "@/avocado-app/shared/contract/services";
import { Order } from "@/avocado-app/shared/contract/types";
import { authenticationStore } from "@/entities/authentication";

type Props = {
  id: number;
  name?: string;
};

export const createNewMockOrder = ({
  id,
  name,
}: Props): Promise<Order> => {
  const login = authenticationStore.getState().user;
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
    documents: [],
  };
  return new Promise((res) =>
    setTimeout(() => res(newOrder), MOCK_MUTATE_DELAY)
  );
};
