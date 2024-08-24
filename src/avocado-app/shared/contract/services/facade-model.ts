import { FacadeModel } from "../types";

export interface GetFacadeModelsIn {
  token?: string;
}

export interface GetFacadeModelsOut {
  facadeModels?: FacadeModel[];
  error?: GetFacadeModelsError;
}

export interface GetFacadeModelsError {
  message: string;
  statusCode: number;
}

export interface AddFacadeModelIn extends Omit<FacadeModel, "id"> {
  name: string;
}

export interface AddFacadeModelOut {
  error?: AddFacadeModelError;
}

export interface AddFacadeModelError {
  message: string;
  statusCode: number;
}

export interface UpdateFacadeModelIn extends Partial<FacadeModel> {
  id: number;
}
export interface UpdateFacadeModelOut {
  error?: UpdateFacadeModelError;
}
export interface UpdateFacadeModelError {
  message: string;
  statusCode: number;
}
export interface DeleteFacadeModelIn {
  id: number;
}
export interface DeleteFacadeModelOut {
  error?: DeleteFacadeModelError;
}
export interface DeleteFacadeModelError {
  message: string;
  statusCode: number;
}
