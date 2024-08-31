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
  fields: {
    facadeModel: DocumentFacadeModel;
    panelModel: DocumentPanelModel;
    material: DocumentMaterial;
    dye: DocumentDye;
    varnish: DocumentVarnish;
    patina: DocumentPatina;
  };
  elements: OrderElement;
}

interface DocumentFieldData extends Record<string | symbol, any> {
  id: number;
  name: string;
}

export interface DocumentField<
  T extends DocumentFieldData = DocumentFieldData
> {
  originalData: T | null;
  overriddenData: Partial<Omit<T, "id">> | null;
}

export interface DocumentFacadeModel extends DocumentField {
  originalData: FacadeModel | null;
  overriddenData: Partial<Omit<FacadeModel, "id">> | null;
}

export interface DocumentPanelModel extends DocumentField {
  originalData: PanelModel | null;
  overriddenData: Partial<Omit<PanelModel, "id">> | null;
}

export interface DocumentMaterial extends DocumentField {
  originalData: Material | null;
  overriddenData: Partial<Omit<Material, "id">> | null;
}

export interface DocumentDye extends DocumentField {
  originalData: Dye | null;
  overriddenData: Partial<Omit<Dye, "id">> | null;
}

export interface DocumentVarnish extends DocumentField {
  originalData: Varnish | null;
  overriddenData: Partial<Omit<Varnish, "id">> | null;
}

export interface DocumentPatina extends DocumentField {
  originalData: Patina | null;
  overriddenData: Partial<Omit<Patina, "id">> | null;
}

export interface OrderElement {}
