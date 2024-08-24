import { Person } from "../types/person.types";

export type Customer = Person;

export interface GetCustomerIn {
  token?: string;
}

export interface GetCustomerOut {
  customers?: Person[];
  error?: GetCustomerError;
}

export interface GetCustomerError {
  message: string;
  statusCode: number;
}

export interface AddCustomerIn extends Omit<Customer, "id"> {
  login: string;
}

export interface AddCustomerOut {
  error?: AddCustomerError;
}

export interface AddCustomerError {
  message: string;
  statusCode: number;
}

export interface UpdateCustomerIn extends Partial<Customer> {
  id: number;
}
export interface UpdateCustomerOut {
  error?: UpdateCustomerError;
}
export interface UpdateCustomerError {
  message: string;
  statusCode: number;
}

export interface DeleteCustomerIn {
  id: number;
}
export interface DeleteCustomerOut {
  error?: DeleteCustomerError;
}
export interface DeleteCustomerError {
  message: string;
  statusCode: number;
}
