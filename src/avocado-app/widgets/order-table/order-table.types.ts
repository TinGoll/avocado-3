export interface OrderTableData {
  key: string;
  id: number;
  name: string;
  customer: string;
  criticality: string;
  facadeModels: string[];
  materials: string[];
  dyes: string[]; 
  patinas: string [];
  varnishes: string[];
  createdAt: string;
  amount: number;
}
