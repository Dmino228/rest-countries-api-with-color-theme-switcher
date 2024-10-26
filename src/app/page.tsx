import Filter from "./components/filter";
import Search from "./components/search";
import Cards from "./components/cards";

export default function Home() {
  return (
    <main className="w-full grow px-20 py-14 text-light-mode-text bg-light-mode-bg dark:text-white dark:bg-dark-mode-bg max-md:px-4">
      <div className="flex items-center justify-between mb-14 gap-10 max-md:flex-col max-md:items-start">
        <Search />
        <Filter />
      </div>
      <div className="flex gap-16 flex-wrap justify-evenly">
        <Cards />
      </div>
    </main>
  );
}
