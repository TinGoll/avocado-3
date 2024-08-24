import { Dye } from "../types/dye.types";

export interface GetDyesIn {
  token?: string;
}

export interface GetDyesOut {
  Dyes?: Dye[];
  error?: GetDyesError;
}

export interface GetDyesError {
  message: string;
  statusCode: number;
}

export interface AddDyeIn extends Omit<Dye, "id"> {
  name: string;
}

export interface AddDyeOut {
  error?: AddDyeError;
}

export interface AddDyeError {
  message: string;
  statusCode: number;
}

export interface UpdateDyeIn extends Partial<Dye> {
  id: number;
}
export interface UpdateDyeOut {
  error?: UpdateDyeError;
}
export interface UpdateDyeError {
  message: string;
  statusCode: number;
}
export interface DeleteDyeIn {
  id: number;
}
export interface DeleteDyeOut {
  error?: DeleteDyeError;
}
export interface DeleteDyeError {
  message: string;
  statusCode: number;
}
