export interface Vaccine {
  name: string;
  info: string;
  img: string;
  doses: number;
  time: number;
  year: number;
}

export interface VaccineProps {
  data: Vaccine;
}
