import {
  AddCustomerIn,
  UpdateCustomerIn,
  DeleteCustomerIn,
  AddFacadeModelIn,
  UpdateFacadeModelIn,
  DeleteFacadeModelIn,
  AddPanelModelIn,
  UpdatePanelModelIn,
  DeletePanelModelIn,
  Customer,
  AddMaterialIn,
  AddVarnishIn,
  DeleteMaterialIn,
  DeleteVarnishIn,
  UpdateMaterialIn,
  UpdateVarnishIn,
  AddDyeIn,
  DeleteDyeIn,
  UpdateDyeIn,
} from "@/avocado-app/shared/contract/services";
import { FacadeModel } from "@/avocado-app/shared/contract/types";
import { Dye } from "@/avocado-app/shared/contract/types/dye.types";
import { Material } from "@/avocado-app/shared/contract/types/material.types";
import { PanelModel } from "@/avocado-app/shared/contract/types/panel-model.types";
import { Varnish } from "@/avocado-app/shared/contract/types/varnish.types";

export interface MockStoreInitialData {
  customers: Customer[];
  facadeModels: FacadeModel[];
  panelModels: PanelModel[];
  materials: Material[];
  varnishes: Varnish[];
  dyes: Dye[];
}

export interface MockStoreActions {
  addMockCustomer: (params: AddCustomerIn) => void;
  updateMockCustomer: (params: UpdateCustomerIn) => void;
  deleteMockCustomer: (params: DeleteCustomerIn) => void;

  addMockFacadeModel: (params: AddFacadeModelIn) => void;
  updateMockFacadeModel: (params: UpdateFacadeModelIn) => void;
  deleteMockFacadeModel: (params: DeleteFacadeModelIn) => void;

  addMockPanelModel: (params: AddPanelModelIn) => void;
  updateMockPanelModel: (params: UpdatePanelModelIn) => void;
  deleteMockPanelModel: (params: DeletePanelModelIn) => void;

  addMockMaterial: (params: AddMaterialIn) => void;
  updateMockMaterial: (params: UpdateMaterialIn) => void;
  deleteMockMaterial: (params: DeleteMaterialIn) => void;

  addMockVarnish: (params: AddVarnishIn) => void;
  updateMockVarnish: (params: UpdateVarnishIn) => void;
  deleteMockVarnish: (params: DeleteVarnishIn) => void;

  addMockDye: (params: AddDyeIn) => void;
  updateMockDye: (params: UpdateDyeIn) => void;
  deleteMockDye: (params: DeleteDyeIn) => void;
}
