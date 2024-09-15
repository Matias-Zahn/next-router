import { useRouter } from "next/router";

function PokemonDetail() {
  const router = useRouter();
  const { id } = router.query;

  console.log(router.query);
  console.log(id);

  return <div>PokemonDetail</div>;
}
export default PokemonDetail;
