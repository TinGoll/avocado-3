import { PanelModel } from "./panel-model.types";

export interface FacadeModel<Parameters = Record<symbol | string, any>> {
  id: number;
  name: string;
  defaultPanel?: PanelModel;
  parameters: Parameters;
}
