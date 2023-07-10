import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts'
import { Pokemones, PropiedadesPokemon } from '@/interfaces';
import { localFavorites } from '@/utils';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import React, { useState } from 'react'

    ;



interface Props {
    pokemon: PropiedadesPokemon
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

    const [isFavorite, setIsFavorite] = useState<boolean>(localFavorites.existInFavorites(pokemon.id))

    const handleAddFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id)
        setIsFavorite(!isFavorite)
    }

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



                    <button
                        onClick={handleAddFavorite}
                        className='text-[8px] transition delay-100 duration-300 ease-in-out bg-indigo-600 rounded-lg px-2 py-1 hover:bg-indigo-700'
                        name='Favoritos'
                    >
                        {

                            isFavorite ? "Quitar de favoritos" : "Añadir a Favoritos"

                        }
                    </button>
                </div>
            </div>
        </Layout>

    )
}
// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<Pokemones>('/pokemon?limit=151')
    const pokemonNames: string[] = data.results.map(pokemon => pokemon.name)
    return {
        paths: pokemonNames.map(name => ({
            params: { name }
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
    const { name } = params as { name: string }
    const { data } = await pokeApi.get<PropiedadesPokemon>(`pokemon/${name}`)
    const pokemon = {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }
    return {
        props: {
            pokemon
        }
    }
}




export default PokemonByNamePage
