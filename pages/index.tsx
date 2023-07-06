import { Layout } from "@/components/layouts"
import { NextPage, GetStaticProps } from "next"
import { pokeApi } from "@/api"
import { Pokemones, SmallPokemon } from "@/interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <Layout>
      <div className="w-screen h-screen flex justify-center items-center">
        <section className="h-full flex justify-center">
          <Grid.Container className="flex justify-center items-center mt-4">
            {
              pokemons && pokemons.map(({ id, name, img, }) => (
                <Grid className="w-32 h-28 m-1" key={id}>
                  <Card isHoverable>
                    <Card.Body css={{ p: 1 }}>
                      <Card.Image
                        src={img}
                        width={50}
                        height={50}
                      />
                    </Card.Body>
                    <Card.Footer>
                      <Row className="flex justify-between">
                        <Text>{name}</Text>
                        <Text>#{id}</Text>
                      </Row>
                    </Card.Footer>
                  </Card>
                </Grid>
              ))
            }

          </Grid.Container>
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

