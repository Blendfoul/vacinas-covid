export interface Statistics {
  area: number;
  ars: string;
  casos_14dias: number;
  concelho: string;
  confirmados_1: number;
  confirmados_14: number;
  data: string;
  densidade_1: number;
  densidade_2: number;
  densidade_3: number;
  densidade_populacional: number;
  dicofre: number;
  distrito: string;
  incidencia: number;
  incidencia_categoria: string;
  incidencia_risco: string;
  population: number;
  population_65_69: number;
  population_65_mais: number;
  population_70_74: number;
  population_70_mais: number;
  population_75_79: number;
  population_75_mais: number;
  population_80_84: number;
  population_80_mais: number;
  population_85_mais: number;
  tendencia_categoria: null;
  tendencia_desc: null;
}

export interface VaccineStats {
  date: string;
  new_cases: number;
  new_cases_per_million: number;
  new_cases_smoothed: number;
  new_cases_smoothed_per_million: number;
  new_deaths: number;
  new_deaths_per_million: number;
  new_deaths_smoothed: number;
  new_deaths_smoothed_per_million: number;
  new_vaccinations: number;
  new_vaccinations_smoothed: number;
  new_vaccinations_smoothed_per_million: number;
  people_fully_vaccinated: number;
  people_fully_vaccinated_per_hundred: number;
  people_vaccinated: number;
  people_vaccinated_per_hundred: number;
  stringency_index: number;
  total_cases: number;
  total_cases_per_million: number;
  total_deaths: number;
  total_deaths_per_million: number;
  total_vaccinations: number;
  total_vaccinations_per_hundred: number;
}
