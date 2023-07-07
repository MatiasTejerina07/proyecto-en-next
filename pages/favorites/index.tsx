import { Layout } from "@/components/layouts"
import { localFavorites } from "@/utils"
import Image from "next/image"
import { FC, useEffect, useState } from "react"


const FavoritePage: FC = () => {
    const [favorites, setFavorites] = useState<number[]>([])

    useEffect(
        () => {
            setFavorites(localFavorites.pokemones())
        }, []
    )
    return (

        <Layout>

            <div className="flex flex-wrap gap-10 justify-center mt-5">
                {
                    favorites.length === 0 ? (
                        <p>No hay favoritos añadidos</p>
                    ) :
                        (
                            favorites.map((favorite) => (

                                <div className=" border p-2 rounded-md bg-white hover:animate-pulse">
                                    <Image
                                        height={40}
                                        width={40}
                                        alt=""
                                        src={`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/${favorite}.svg`} />
                                </div>

                            ))
                        )
                }
            </div>

        </Layout>

    )
}

export default FavoritePage