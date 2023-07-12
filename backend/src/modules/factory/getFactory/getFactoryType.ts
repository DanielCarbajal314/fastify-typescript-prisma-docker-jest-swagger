export interface getFactoryData {
  id: number;
  sprocketProductionActual: number[];
  sprocketProductionGoal: number[];
  time: number[];
}

export type getFactoryType = (id: number) => Promise<getFactoryData>;
