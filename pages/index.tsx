import { Layout } from "@/components/layouts"
import { NextPage, GetStaticProps } from "next"
import { pokeApi } from "@/api"
import { Pokemones, SmallPokemon } from "@/interfaces";
import { Pokemon } from "@/components/pokemon";

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout>

      <div className="w-screen h-screen flex justify-center items-center">
        <section className="h-full w-full flex-wrap flex justify-center">

          {
            pokemons && pokemons.map((pokemon) => (
              <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))
          }

        </section>

      </div>

    </Layout >
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<Pokemones>('/pokemon?limit=151')
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }))
  return {
    props: {
      pokemons
    }
  }
}
export default HomePage

