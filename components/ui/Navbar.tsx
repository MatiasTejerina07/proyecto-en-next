import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"


export const Navbar = () => {

    const { theme } = useTheme()
    return (
        <div style={{ background: theme?.colors.gray200.value }} className="w-screen h-20 flex justify-center items-center text-black"
        >
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
                alt="icono de App"
                width={70}
                height={70} />
            <Text className="text-white text-2xl" >P</Text>
            <Text className="text-white" h1>okemón</Text>

            <Spacer css={{ flex: 1 }} />

            <Text className="text-white" h1>Favoritos</Text>
        </div>
    )
}
