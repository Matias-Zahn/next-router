import Link from "next/link";

function Navbar() {
  return (
    <div className=" flex gap-5 border border-white max-w-md ">
      <Link className="hover:bg-white hover:text-black p-4" href="/">
        Home
      </Link>
      <Link
        className="hover:bg-white hover:text-black p-4"
        href="/cuenta/account"
      >
        Account
      </Link>
      <Link
        className="hover:bg-white hover:text-black p-4"
        href="/cuenta/about"
      >
        About us
      </Link>
      <Link
        className="hover:bg-white hover:text-black p-4"
        href="/cuenta/contact"
      >
        Contact
      </Link>
    </div>
  );
}
export default Navbar;
