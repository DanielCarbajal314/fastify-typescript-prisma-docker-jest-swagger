export interface updateSprocketData {
  id: number;
  teeth: number;
  pitchDiameter: number;
  outsideDiameter: number;
  pitch: number;
}

export type updateSprockeType = (
  data: updateSprocketData
) => Promise<updateSprocketData>;
