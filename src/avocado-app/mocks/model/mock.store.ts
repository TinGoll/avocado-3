import { createStore } from "zustand";
import { mockCustomers } from "../customers/mockCustomers";
import { Customer } from "@/avocado-app/shared/contract/services";
import { FacadeModel } from "@/avocado-app/shared/contract/types";
import { mockFacadeModel } from "../facade-model/mockFacadeModel";
import { PanelModel } from "@/avocado-app/shared/contract/types/panel-model.types";
import { mockPanelModels } from "../panel-model/mockPanelModels";
import { MockStoreInitialData, MockStoreActions } from "./mock.store.types";
import { mockMaterials } from "../materials/mockMaterials";
import { Material } from "@/avocado-app/shared/contract/types/material.types";

const initialData: MockStoreInitialData = {
  customers: mockCustomers,
  facadeModels: mockFacadeModel,
  panelModels: mockPanelModels,
  materials: mockMaterials,
};

export const mockStore = createStore<MockStoreInitialData & MockStoreActions>()(
  (set) => ({
    ...initialData,
    addMockCustomer: (params) =>
      set((state) => {
        const maxId = Math.max(
          ...state.customers.map((mockItem) => mockItem.id)
        );
        const newItem: Customer = { ...params, id: maxId + 1 };
        return {
          ...state,
          customers: [...state.customers, newItem],
        };
      }),
    updateMockCustomer: ({ id, ...params }) =>
      set((state) => {
        const temp = state.customers.map((item) => {
          if (item.id === id) {
            return { ...item, ...params };
          }
          return item;
        });
        return { ...state, customers: temp };
      }),
    deleteMockCustomer: ({ id }) =>
      set((state) => {
        return {
          ...state,
          customers: state.customers.filter((item) => item.id !== id),
        };
      }),
    addMockFacadeModel: (params) =>
      set((state) => {
        const maxId = Math.max(
          ...state.facadeModels.map((mockItem) => mockItem.id)
        );
        const newItem: FacadeModel = { ...params, id: maxId + 1 };
        return { ...state, facadeModels: [...state.facadeModels, newItem] };
      }),
    updateMockFacadeModel: ({ id, ...params }) =>
      set((state) => {
        const temp = state.facadeModels.map((item) => {
          if (item.id === id) {
            return { ...item, ...params };
          }
          return item;
        });
        return { ...state, facadeModels: temp };
      }),
    deleteMockFacadeModel: ({ id }) =>
      set((state) => {
        return {
          ...state,
          facadeModels: state.facadeModels.filter((item) => item.id !== id),
        };
      }),
    addMockPanelModel: (params) =>
      set((state) => {
        const maxId = Math.max(
          ...state.panelModels.map((mockItem) => mockItem.id)
        );
        const newItem: PanelModel = { ...params, id: maxId + 1 };
        return { ...state, panelModels: [...state.panelModels, newItem] };
      }),
    updateMockPanelModel: ({ id, ...params }) =>
      set((state) => {
        const temp = state.panelModels.map((item) => {
          if (item.id === id) {
            return { ...item, ...params };
          }
          return item;
        });
        return { ...state, panelModels: temp };
      }),
    deleteMockPanelModel: ({ id }) =>
      set((state) => {
        return {
          ...state,
          panelModels: state.panelModels.filter((item) => item.id !== id),
        };
      }),
    addMockMaterial: (params) =>
      set((state) => {
        const maxId = Math.max(
          ...state.materials.map((mockItem) => mockItem.id)
        );
        const newItem: Material = { ...params, id: maxId + 1 };
        return { ...state, materials: [...state.materials, newItem] };
      }),
    updateMockMaterial: ({ id, ...params }) =>
      set((state) => {
        const temp = state.materials.map((item) => {
          if (item.id === id) {
            return { ...item, ...params };
          }
          return item;
        });
        return { ...state, materials: temp };
      }),
    deleteMockMaterial: ({ id }) =>
      set((state) => {
        return {
          ...state,
          materials: state.materials.filter((item) => item.id !== id),
        };
      }),
  })
);
