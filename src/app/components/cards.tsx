"use client";

import { signal, useSignalEffect } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";
import Card from "./card";
import { search } from "./search";
import { region } from "./filter";

const init: Country[] = [
  {
    name: {
      common: "",
    },
    population: 0,
    region: "",
    capital: "",
    flags: {
      svg: "",
      png: "",
    },
  },
];

const data = signal(init);

export default function Cards() {
  useSignals();

  useSignalEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((json) => (data.value = json));
  });

  if (data.value === init) return <div>Loading...</div>;

  const filteredCountries = data.value
    .filter((country) => country.name.common.toLowerCase().match(search.value))
    .filter((country) => country.region.match(region.value));

  const cards = filteredCountries.map((country) => {
    const { name, population, region, capital, flags } = country;

    return (
      <Card
        key={name.common}
        img={flags.svg || flags.png}
        name={name.common}
        population={population}
        region={region}
        capital={capital}
      />
    );
  });

  return cards;
}
