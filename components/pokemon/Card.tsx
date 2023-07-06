import { SmallPokemon } from "@/interfaces";
import { FC } from "react";

interface Props {
    pokemon: SmallPokemon
}

export const Pokemon: FC<Props> = ({ pokemon: { id, img, name } }) => (
    <div className="flex h-24 justify-center items-center m-2 border rounded-lg ">
        <div
            className="flex flex-col w-36 h-36 justify-center items-center hover:animate-pulse"
            key={id}
        >
            <img
                className="w-14 h-14"
                src={img}
                alt="picture" />
            <div
                className="flex w-full justify-around"
            >
                <p>#{id}</p>
                <p>{name}</p>
            </div>
        </div>
    </div>

);
