import { MOCK_MUTATE_DELAY } from "@/avocado-app/mocks/settings";
import { OrderDocument } from "@/avocado-app/shared/contract/types";
type Props = {
  id: string;
  name?: string;
};

export const createNewMockDocument = ({
  id,
  name = "",
}: Props): Promise<OrderDocument> => {
  const newDocument: OrderDocument = {
    id,
    orderBy: 0,
    name,
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
    elements: [],
  };
  return new Promise((res) =>
    setTimeout(() => res(newDocument), MOCK_MUTATE_DELAY)
  );
};
