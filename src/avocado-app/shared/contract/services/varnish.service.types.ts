import { Varnish } from "../types/varnish.types";

export interface GetVarnishesIn {
  token?: string;
}

export interface GetVarnishesOut {
  varnishes?: Varnish[];
  error?: GetVarnishesError;
}

export interface GetVarnishesError {
  message: string;
  statusCode: number;
}

export interface AddVarnishIn extends Omit<Varnish, "id"> {
  name: string;
}

export interface AddVarnishOut {
  error?: AddVarnishError;
}

export interface AddVarnishError {
  message: string;
  statusCode: number;
}

export interface UpdateVarnishIn extends Partial<Varnish> {
  id: number;
}
export interface UpdateVarnishOut {
  error?: UpdateVarnishError;
}
export interface UpdateVarnishError {
  message: string;
  statusCode: number;
}
export interface DeleteVarnishIn {
  id: number;
}
export interface DeleteVarnishOut {
  error?: DeleteVarnishError;
}
export interface DeleteVarnishError {
  message: string;
  statusCode: number;
}
