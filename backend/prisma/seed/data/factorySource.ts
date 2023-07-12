import { readFileSync } from 'fs';

export interface FactoryData {
  sprocketProductionActual: number[];
  sprocketProductionGoal: number[];
  time: number[];
}

const data = JSON.parse(
  readFileSync('./prisma/seed/data/seed_factory_data.json', 'utf8')
);
const { factories } = data;

export const factorySeedRecords: FactoryData[] = factories
  .map(({ factory }) => factory)
  .map(({ chart_data }) => chart_data)
  .map(({ sprocket_production_actual, sprocket_production_goal, time }) => ({
    time,
    sprocketProductionActual: sprocket_production_actual,
    sprocketProductionGoal: sprocket_production_goal
  }));
