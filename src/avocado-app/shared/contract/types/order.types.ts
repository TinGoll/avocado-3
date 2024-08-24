import { Customer } from "../services/customer.service.types";
import { Person } from "./person.types";

export interface Order {
  id: number;
  name: string;
  customer: Customer;
  author: Person;
  priceName: string;
  amount: number;
  workingDays: number;
  criticality: OrderCriticality;
  createdAt: Date;
  startedAt: Date;
  closedAt: Date;
  documents: OrderDocument[];
}

export interface OrderDocument {
  id: string;
  orderBy: number;
  name: string;
}

export enum OrderCriticality {
  NORMAL = "normal",
  CRITICAL = "critical",
}
