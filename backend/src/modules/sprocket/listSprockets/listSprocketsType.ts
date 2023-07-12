export interface listSprocketData {
  id: number;
  teeth: number;
  pitchDiameter: number;
  outsideDiameter: number;
  pitch: number;
}

export type listSprocketType = () => Promise<listSprocketData[]>;
