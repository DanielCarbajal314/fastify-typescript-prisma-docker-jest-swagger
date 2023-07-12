export interface createSprocketData {
  teeth: number;
  pitchDiameter: number;
  outsideDiameter: number;
  pitch: number;
}

export interface createSprocketDataResult extends createSprocketData {
  id: number;
}

export type createSprocketType = (
  data: createSprocketData
) => Promise<createSprocketDataResult>;
