import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts'
import { PropiedadesPokemon } from '@/interfaces';
import { Button } from '@nextui-org/react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
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
            <div className='flex justify-around h-full w-full items-center'>
                <div>
                    <h1>{pokemon.name}</h1>
                    <Image alt='' src={pokemon.sprites.other?.dream_world.front_default || ""} width={70} height={70} />
                </div>

                <div className='flex border rounded-md justify-center items-center'>
                    <p className='font-medium'>Sprites:</p>
                    <Image alt='front' src={pokemon.sprites.front_default} width={40} height={30} />
                    <Image alt='default' src={pokemon.sprites.back_default} width={40} height={40} />
                    <Image alt='front-shiny' src={pokemon.sprites.front_shiny} width={40} height={40} />
                    <button className='text-[8px] transition delay-100 duration-300 ease-in-out bg-indigo-600 rounded-lg px-2 py-1 hover:bg-indigo-700' name='Favoritos'>Favoritos</button>
                </div>
            </div>
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
