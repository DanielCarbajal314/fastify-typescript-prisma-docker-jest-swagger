import { readFileSync } from 'fs';

export interface SprocketsData {
  teeth: number;
  pitchDiameter: number;
  outsideDiameter: number;
  time: number;
}

const data = JSON.parse(
  readFileSync('./prisma/seed/data/seed_sprocket_types.json', 'utf8')
);
const { sprockets } = data;

export const SprocketsSeedRecords: SprocketsData[] = sprockets.map(
  ({ teeth, pitch_diameter, outside_diameter, pitch }) => ({
    teeth,
    pitch,
    pitchDiameter: pitch_diameter,
    outsideDiameter: outside_diameter
  })
);
