import { FunctionComponent, ReactNode } from 'react';
import Head from "next/head"

type props = {
    children: ReactNode,
    title?: string
};

export const Layout: FunctionComponent<props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Mat Tejerina" />
                <meta name="description" content="Información sobre pokemon XXXXXX" />
                <meta name="keywords" content="XXXX, pokemon, pokedex" />
            </Head>
            {/* Navbar */}
            <main>
                {children}
            </main>
        </>
    )
}