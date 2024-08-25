import { OrderCriticality } from "../services";
import { Customer } from "../services/customer.service.types";
import { Dye } from "./dye.types";
import { FacadeModel } from "./facade-model.types";
import { Material } from "./material.types";
import { PanelModel } from "./panel-model.types";
import { Patina } from "./patina.types";
import { Varnish } from "./varnish.types";

export interface Order {
  id: number;
  name: string;
  customer: Customer | null;
  author: string;
  priceName: string | null;
  amount: number;
  workingDays: number;
  criticality: OrderCriticality;
  createdAt: Date;
  startedAt?: Date;
  closedAt?: Date;
  documents: OrderDocument[];
}

export interface OrderDocument {
  id: string;
  orderBy: number;
  name: string;
  facadeModel: DocumentFacadeModel;
  panelModel: DocumentPanelModel;
  material: DocumentMaterial;
  dye: DocumentDye;
  varnish: DocumentVarnish;
  patina: DocumentPatina;
}

export interface DocumentFacadeModel {
  originalData: FacadeModel | null;
}

export interface DocumentPanelModel {
  originalData: PanelModel | null;
}

export interface DocumentMaterial {
  originalData: Material | null;
}

export interface DocumentDye {
  originalData: Dye | null;
}

export interface DocumentVarnish {
  originalData: Varnish | null;
}

export interface DocumentPatina {
  originalData: Patina | null;
}
