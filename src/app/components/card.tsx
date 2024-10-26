import Image from "next/image";
import Link from "next/link";

type Props = {
  img: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

export default function Card({
  img,
  name,
  population,
  region,
  capital,
}: Props) {
  return (
    <Link
      className="w-[250px] h-[400px] rounded-lg flex flex-col bg-white shadow-primary-shadow shadow-lg dark:bg-dark-mode-elements dark:text-white"
      href={`/countries/${name}`}
    >
      <div className="w-full h-[200px]">
        <Image
          className="w-full h-full object-cover rounded-lg"
          src={img}
          alt={name}
          width={250}
          height={200}
        />
      </div>
      <div className="w-full grow px-6 py-4">
        <h3 className="text-lg font-semibold my-4">{name}</h3>
        <p className="text-sm my-1">
          <span className="font-semibold">Population: </span>
          {population.toLocaleString()}
        </p>
        <p className="text-sm my-1">
          <span className="font-semibold">Region: </span>
          {region}
        </p>
        <p className="text-sm my-1">
          <span className="font-semibold">Capital: </span>
          {capital}
        </p>
      </div>
    </Link>
  );
}
