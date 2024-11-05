import { Order } from "@/avocado-app/shared/contract/types";
import { OrderTableData } from "../order-table.types";

export const orderToTableDataConverter = (
  orders: Order[] = []
): OrderTableData[] => {
  const data: OrderTableData[] = orders.map((order) => {
    
    const {
      id,
      name,
      criticality,
      author,
      createdAt,
      amount,
      customer,
      documents,
    } = order;

    const dyes: string[] = documents.reduce<string[]>((acc, document) => {
      const name = document.fields.dye.originalData?.name;
      if (name) {
        acc.push(name);
      }
      return acc;
    }, []);
    const facadeModels: string[] = documents.reduce<string[]>(
      (acc, document) => {
        const name = document.fields.facadeModel.originalData?.name;
        if (name) {
          acc.push(name);
        }
        return acc;
      },
      []
    );
    const materials: string[] = documents.reduce<string[]>((acc, document) => {
      const name = document.fields.material.originalData?.name;
      if (name) {
        acc.push(name);
      }
      return acc;
    }, []);

    const patinas: string[] = documents.reduce<string[]>((acc, document) => {
      const name = document.fields.patina.originalData?.name;
      if (name) {
        acc.push(name);
      }
      return acc;
    }, []);

    const varnishes: string[] = documents.reduce<string[]>((acc, document) => {
      const name = document.fields.varnish.originalData?.name;
      if (name) {
        acc.push(name);
      }
      return acc;
    }, []);

    return {
      key: String(id),
      id: id,
      name,
      amount,
      createdAt: createdAt.toLocaleDateString(),
      criticality,
      customer: customer?.login || "",
      author,
      dyes,
      facadeModels,
      materials,
      patinas,
      varnishes,
    };
  });
  return data;
};
