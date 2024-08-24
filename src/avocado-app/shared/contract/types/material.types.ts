export interface Material<Parameters = Record<symbol | string, any>> {
  id: number;
  name: string;
  parameters: Parameters;
}