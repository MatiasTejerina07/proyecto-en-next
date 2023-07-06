import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts'
import { PropiedadesPokemon } from '@/interfaces';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router'
import React from 'react'
    ;



interface Props {
    pokemon: PropiedadesPokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
    const router = useRouter()
    console.log(pokemon);

    return (
        <Layout>
            <h1>{pokemon.name}</h1>
        </Layout>
    )
}
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons = [...Array(151)].map((value, index) => `${index + 1}`)
    console.log(pokemons);
    return {
        paths: pokemons.map(id => ({
            params: { id }
        })),
        fallback: false
    }
}
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string }
    const { data } = await pokeApi.get<PropiedadesPokemon>(`pokemon/${id}`)
    return {
        props: {
            pokemon: data
        }
    }
}



export default PokemonPage
