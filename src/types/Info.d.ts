export interface Info {
  name: string;
  data?: Symptoms[];
  sound: string;
}

export interface Symptoms {
  name: string;
  data: string[];
}
