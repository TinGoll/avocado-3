import { Material } from "../types/material.types";

export interface GetMaterialsIn {
  token?: string;
}

export interface GetMaterialsOut {
  materials?: Material[];
  error?: GetMaterialsError;
}

export interface GetMaterialsError {
  message: string;
  statusCode: number;
}

export interface AddMaterialIn extends Omit<Material, "id"> {
  name: string;
}

export interface AddMaterialOut {
  error?: AddMaterialError;
}

export interface AddMaterialError {
  message: string;
  statusCode: number;
}

export interface UpdateMaterialIn extends Partial<Material> {
  id: number;
}
export interface UpdateMaterialOut {
  error?: UpdateMaterialError;
}
export interface UpdateMaterialError {
  message: string;
  statusCode: number;
}
export interface DeleteMaterialIn {
  id: number;
}
export interface DeleteMaterialOut {
  error?: DeleteMaterialError;
}
export interface DeleteMaterialError {
  message: string;
  statusCode: number;
}
