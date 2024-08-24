import { useStore } from "zustand";
import { mockStore } from "./mock.store";

export const useMockCustomers = () =>
  useStore(mockStore, (state) => state.customers);
export const useMockFacadeModels = () =>
  useStore(mockStore, (state) => state.facadeModels);
export const useMockPanelModels = () =>
  useStore(mockStore, (state) => state.panelModels);
export const useMockMaterials = () =>
  useStore(mockStore, (state) => state.materials);

export const {
  addMockCustomer,
  updateMockCustomer,
  deleteMockCustomer,
  addMockFacadeModel,
  updateMockFacadeModel,
  deleteMockFacadeModel,
  addMockPanelModel,
  deleteMockPanelModel,
  updateMockPanelModel,
  addMockMaterial,
  deleteMockMaterial,
  updateMockMaterial,
} = mockStore.getState();
