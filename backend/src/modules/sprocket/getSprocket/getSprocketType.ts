export interface getSprocketData {
  id: number;
  teeth: number;
  pitchDiameter: number;
  outsideDiameter: number;
  pitch: number;
}

export type getSprocketType = (id: number) => Promise<getSprocketData>;
