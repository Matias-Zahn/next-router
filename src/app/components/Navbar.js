import Link from "next/link";

function Navbar() {
  return (
    <div className=" flex gap-5 border border-white justify-evenly">
      <Link
        className="hover:bg-white hover:text-black p-4 uppercase text-lg tracking-wider"
        href="/"
      >
        Home
      </Link>
      <Link
        className="hover:bg-white hover:text-black p-4 uppercase text-lg tracking-wider"
        href="/pokemons"
      >
        Pokemons
      </Link>
    </div>
  );
}
export default Navbar;
