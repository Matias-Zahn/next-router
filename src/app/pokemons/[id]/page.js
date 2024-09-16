"use client";

import { bgByType, borderByType, textByType } from "@/app/constants/type";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function PokemonDetail() {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState(null);

  const ByType = [pokemon?.types[0].type.name];

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <main
      className={`grid place-content-center ${bgByType[ByType]} ${borderByType[ByType]} border-4 max-w-3xl mx-auto`}
    >
      <div className="grid place-items-center">
        <img
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
        <h2
          className={`capitalize text-5xl bg-black w-full rounded-xl text-center ${textByType[ByType]} `}
        >
          {pokemon?.name}
        </h2>
        <div className="grid place-items-center gap-2">
          <h4 className="text-3xl">Type</h4>
          <div className="flex flex-wrap justify-center gap-4  items-center">
            {pokemon?.types.map((type) => (
              <h3
                className={` mb-2 text-2xl py-2 capitalize text-center text-white rounded-md w-[min(150px)] ${
                  bgByType[type.type.name]
                } `}
                key={type.type.name}
              >
                {" "}
                {type.type.name}{" "}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
export default PokemonDetail;
