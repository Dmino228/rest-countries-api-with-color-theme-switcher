"use client";

import { ChangeEvent } from "react";
import { signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";
import { FaSearch } from "react-icons/fa";

export const search = signal("");

function handleChange(e: ChangeEvent<HTMLInputElement>) {
  search.value = e.target.value;
}

export default function Search() {
  useSignals();

  return (
    <div className="w-[500px] flex items-center px-7 py-5 gap-7 rounded-lg shadow-primary-shadow shadow-lg text-light-mode-text bg-white dark:text-white dark:bg-dark-mode-elements max-md:w-full">
      <FaSearch size={24} />
      <input
        className="w-full h-full outline-none bg-white dark:bg-dark-mode-elements"
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}
      />
    </div>
  );
}
