type Country = {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  flags: {
    svg: string;
    png: string;
  };
};

type CountryDetails = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders: string[];
  fifa: string;
};
