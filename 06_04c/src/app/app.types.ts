export interface Country {
  name: string;
  code: string;
}

export interface ZipAndCurrentConditions {
  zip: string;
  data: CurrentConditions;
}

export interface CurrentConditions {
  coord:      Coord;
  weather:    Weather[];
  base:       string;
  main:       Main;
  visibility: number;
  wind:       Wind;
  clouds:     Clouds;
  dt:         number;
  sys:        Sys;
  timezone:   number;
  id:         number;
  name:       string;
  cod:        number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
  sea_level:  number;
  grnd_level: number;
}

export interface Sys {
  type:    number;
  id:      number;
  country: string;
  sunrise: number;
  sunset:  number;
}

export interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

export interface Wind {
  speed: number;
  deg:   number;
}

export interface Forecast {
  city:    ForecastCity;
  cod:     string;
  message: number;
  cnt:     number;
  list:    ForecastList[];
}

export interface ForecastCity {
  id:         number;
  name:       string;
  coord:      Coord;
  country:    string;
  population: number;
  timezone:   number;
}

export interface ForecastList {
  dt:         number;
  sunrise:    number;
  sunset:     number;
  temp:       Temp;
  feels_like: FeelsLike;
  pressure:   number;
  humidity:   number;
  weather:    Weather[];
  speed:      number;
  deg:        number;
  gust:       number;
  clouds:     number;
  pop:        number;
}

export interface FeelsLike {
  day:   number;
  night: number;
  eve:   number;
  morn:  number;
}

export interface Temp {
  day:   number;
  min:   number;
  max:   number;
  night: number;
  eve:   number;
  morn:  number;
}
