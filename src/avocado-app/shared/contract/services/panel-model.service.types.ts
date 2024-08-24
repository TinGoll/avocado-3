import { PanelModel } from "../types/panel-model.types";

export interface GetPanelModelsIn {
  token?: string;
}

export interface GetPanelModelsOut {
  panelModels?: PanelModel[];
  error?: GetPanelModelsError;
}

export interface GetPanelModelsError {
  message: string;
  statusCode: number;
}

export interface AddPanelModelIn extends Omit<PanelModel, "id"> {
  name: string;
}

export interface AddPanelModelOut {
  error?: AddPanelModelError;
}

export interface AddPanelModelError {
  message: string;
  statusCode: number;
}

export interface UpdatePanelModelIn extends Partial<PanelModel> {
  id: number;
}
export interface UpdatePanelModelOut {
  error?: UpdatePanelModelError;
}
export interface UpdatePanelModelError {
  message: string;
  statusCode: number;
}
export interface DeletePanelModelIn {
  id: number;
}
export interface DeletePanelModelOut {
  error?: DeletePanelModelError;
}
export interface DeletePanelModelError {
  message: string;
  statusCode: number;
}
