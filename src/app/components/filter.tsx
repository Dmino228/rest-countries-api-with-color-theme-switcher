"use client";

import { signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";
import { ChangeEvent } from "react";

export const region = signal("");

function handleChange(e: ChangeEvent<HTMLSelectElement>) {
  region.value = e.target.value;
}

export default function Filter() {
  useSignals();

  return (
    <select
      className="w-[230px] flex items-center px-7 py-5 gap-7 rounded-lg bg-white shadow-primary-shadow shadow-lg dark:bg-dark-mode-elements dark:text-white"
      onChange={handleChange}
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
