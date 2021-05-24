export interface Vaccine {
  name: string;
  info: string;
  img: string;
  doses: number;
  time: number;
  year: number;
  method: string;
  manufacturer: string;
  codeName: string;
  armEffects: string[];
  bodyEffects: string[];
  type: string;
  summary: Summary[];
  audio: string;
}

export interface Summary{
  text: string[];
  sound: string;
}

export interface VaccineProps {
  data: Vaccine;
}
