import { createStore } from "zustand";
import { mockCustomers } from "../../customers/mockCustomers";
import { Customer } from "@/avocado-app/shared/contract/services";
import { FacadeModel } from "@/avocado-app/shared/contract/types";
import { mockFacadeModel } from "../../facade-models/mockFacadeModel";
import { PanelModel } from "@/avocado-app/shared/contract/types/panel-model.types";
import { mockPanelModels } from "../../panel-models/mockPanelModels";
import { MockStoreInitialData, MockStoreActions } from "./mock.store.types";
import { mockMaterials } from "../../materials/mockMaterials";
import { Material } from "@/avocado-app/shared/contract/types/material.types";
import { mockVarnishes } from "../../varnishes/mockVarnishes";
import { Varnish } from "@/avocado-app/shared/contract/types/varnish.types";
import { mockDyes } from "../../dyes/mockDyes";
import { Dye } from "@/avocado-app/shared/contract/types/dye.types";

const initialData: MockStoreInitialData = {
  customers: mockCustomers,
  facadeModels: mockFacadeModel,
  panelModels: mockPanelModels,
  materials: mockMaterials,
  varnishes: mockVarnishes,
  dyes: mockDyes,
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
    addMockVarnish: (params) =>
      set((state) => {
        const maxId = Math.max(
          ...state.varnishes.map((mockItem) => mockItem.id)
        );
        const newItem: Varnish = { ...params, id: maxId + 1 };
        return { ...state, varnishes: [...state.varnishes, newItem] };
      }),
    updateMockVarnish: ({ id, ...params }) =>
      set((state) => {
        const temp = state.varnishes.map((item) => {
          if (item.id === id) {
            return { ...item, ...params };
          }
          return item;
        });
        return { ...state, varnishes: temp };
      }),
    deleteMockVarnish: ({ id }) =>
      set((state) => {
        return {
          ...state,
          varnishes: state.varnishes.filter((item) => item.id !== id),
        };
      }),
    addMockDye: (params) =>
      set((state) => {
        const maxId = Math.max(...state.dyes.map((mockItem) => mockItem.id));
        const newItem: Dye = { ...params, id: maxId + 1 };
        return { ...state, dyes: [...state.dyes, newItem] };
      }),
    updateMockDye: ({ id, ...params }) =>
      set((state) => {
        const temp = state.dyes.map((item) => {
          if (item.id === id) {
            return { ...item, ...params };
          }
          return item;
        });
        return { ...state, dyes: temp };
      }),
    deleteMockDye: ({ id }) =>
      set((state) => {
        return {
          ...state,
          dyes: state.dyes.filter((item) => item.id !== id),
        };
      }),
  })
);
