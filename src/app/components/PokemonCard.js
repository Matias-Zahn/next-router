"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { bgByType, borderByType, textByType } from "../constants/type";
import Link from "next/link";

function PokemonCard({ pokemonUrl }) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const ByType = [pokemon?.types[0].type.name];

  useEffect(() => {
    axios
      .get(pokemonUrl)
      .then(({ data }) => setPokemon(data), setLoading(false))
      .catch((err) => console.log(err), setLoading(false));
  }, []);

  return (
    <Link href={`pokemons/${pokemon?.id}`}>
      <section className={` bg-white   rounded-xl `}>
        <div
          className={` h-[300px] w-[300px] ${bgByType[ByType]}   rounded-t-xl`}
        >
          {loading ? (
            <h3 className="h-10 w-10 rounded-full border-t-2 bg-white animate-spin"></h3>
          ) : (
            <img
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          )}
        </div>

        <h3
          className={`text-2xl text-center uppercase ${textByType[ByType]} p-2 `}
        >
          {" "}
          {pokemon?.name}{" "}
        </h3>
      </section>
    </Link>
  );
}
export default PokemonCard;
