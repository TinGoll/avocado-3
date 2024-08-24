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
} from "@/avocado-app/shared/contract/services";
import {
  AddMaterialIn,
  UpdateMaterialIn,
  DeleteMaterialIn,
} from "@/avocado-app/shared/contract/services/material";
import { FacadeModel } from "@/avocado-app/shared/contract/types";
import { Material } from "@/avocado-app/shared/contract/types/material.types";
import { PanelModel } from "@/avocado-app/shared/contract/types/panel-model.types";

export interface MockStoreInitialData {
  customers: Customer[];
  facadeModels: FacadeModel[];
  panelModels: PanelModel[];
  materials: Material[];
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
}
