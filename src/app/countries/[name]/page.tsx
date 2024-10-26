import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

type Params = {
  params: {
    name: string;
  };
};

async function fetchBorderCountries(borders: string[]) {
  if (!borders) return [];

  const responses = await Promise.all(
    borders.map((border) =>
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    )
  );
  const borderCountries = await Promise.all(responses.map((res) => res.json()));

  return borderCountries.map((countries) => countries[0].name.common);
}

export default async function CountryPage({ params: { name } }: Params) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const country: CountryDetails = (await res.json())[0];

  if (!country) return notFound();

  const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0].common
    : country.name.common;

  const currencies = country.currencies
    ? Object.values(country.currencies).map((currency) => currency.name)
    : [];

  const languages = country.languages ? Object.values(country.languages) : [];

  const borderCountries = await fetchBorderCountries(country.borders);

  return (
    <main className="w-full grow px-20 py-14 text-light-mode-text bg-light-mode-bg dark:text-white dark:bg-dark-mode-bg max-md:px-8">
      <div className="flex items-center mb-14">
        <Link href="/">
          <button className="w-36 flex items-center justify-center py-3 gap-2 rounded-lg shadow-primary-shadow shadow-lg  text-light-mode-text bg-white dark:text-white dark:bg-dark-mode-elements">
            <FiArrowLeft size={24} />
            Back
          </button>
        </Link>
      </div>
      <div className="w-full h-[400px] flex justify-center gap-24 max-md:flex-col max-md:h-full max-md:gap-8">
        <div className="min-w-[400px] w-[600px] h-full max-md:w-full max-md:min-w-0">
          <Image
            className="w-full h-full"
            src={country.flags.svg || country.flags.png}
            alt={country.name.common}
            width={600}
            height={400}
          />
        </div>
        <div className="max-w-[1000px] h-full flex flex-col">
          <h1 className="text-3xl font-bold my-8">{country.name.common}</h1>
          <div className="w-full h-[200px] flex [&_p]:my-2 gap-8 max-md:flex-col max-md:h-full">
            <div className="w-1/2 h-full max-md:w-full">
              <p>
                <b>Native Name: </b>
                {nativeName}
              </p>
              <p>
                <b>Population: </b>
                {country.population.toLocaleString()}
              </p>
              <p>
                <b>Region: </b>
                {country.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {country.subregion}
              </p>
              <p>
                <b>Capital: </b>
                {country.capital}
              </p>
            </div>
            <div className="w-1/2 h-full max-md:w-full">
              <p>
                <b>Top Level Domain: </b>
                {country.tld?.join(", ")}
              </p>
              <p>
                <b>Currencies: </b>
                {currencies.join(", ")}
              </p>
              <p>
                <b>Languages: </b>
                {languages.join(", ")}
              </p>
            </div>
          </div>
          <div className="w-full flex py-4 gap-4 max-md:flex-col">
            <b>Border Countries: </b>
            <div className="w-full flex flex-wrap gap-2">
              {borderCountries.map((borderCountry, i) => (
                <Link key={i} href={`/countries/${borderCountry}`}>
                  <button className="w-32 text-center py-2 rounded-md shadow-primary-shadow shadow-lg text-light-mode-text bg-white dark:text-white dark:bg-dark-mode-elements">
                    {borderCountry}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries: CountryDetails[] = await res.json();

  return countries.map((country) => ({
    name: country.name.common,
  }));
}
