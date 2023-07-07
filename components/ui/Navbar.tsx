import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"


export const Navbar = () => {
    const router = useRouter()
    const navigate = () => {
        router.push(`/favorites`)
    }

    const { theme } = useTheme()
    return (
        <div style={{ background: theme?.colors.gray200.value }} className="w-full h-20 flex justify-around items-center text-black"
        >
            <div className="flex justify-center items-center">
                <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
                    alt="icono de App"
                    width={70}
                    height={70} />
                <Link className="flex" href={'/'}>
                    <Text className="text-white text-2xl" >P</Text>
                    <Text className="text-white" h1>okemón</Text>
                </Link>
            </div>


            <Text onClick={navigate} className="text-white cursor-pointer" h1>Favoritos</Text>
        </div>
    )
}
