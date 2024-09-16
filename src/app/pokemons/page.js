"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";

function Pokemons() {
  const [Pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then(({ data }) => setPokemons(data.results), setLoading(false))
      .catch((err) => console.log(err), setLoading(false));
  }, []);

  return (
    <main>
      <Navbar />

      <h3 className="text-center text-3xl uppercase animate-bounce mt-10 font-bold tracking-wide">
        Pokemons
      </h3>

      {loading ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h3 className="w-[300px] h-[300px] border-t-2 rounded-full animate-spin"></h3>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto">
          <section className="grid justify-center mt-10 grid-cols-[repeat(auto-fit,300px)] gap-4 text-black">
            {Pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
            ))}
          </section>
        </div>
      )}
    </main>
  );
}
export default Pokemons;
