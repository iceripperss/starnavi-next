import React from "react";
import {HeroT} from "@/api/heroType";
import Link from "next/link";

export const HeroWithLink = ({
                                 hero
                             }: { hero: HeroT }) => {
    return (
        <Link href={`/hero/${hero.id}`}>
            <div key={hero.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                <h2 className="text-xl font-semibold mb-2">{hero.name}</h2>
                <p className="text-gray-700">Height: {hero.height}</p>
                <p className="text-gray-700">Mass: {hero.mass}</p>
                <p className="text-gray-700">Eye color: {hero.eye_color}</p>
                <p className="text-gray-700">Birth year: {hero.birth_year}</p>
                {JSON.stringify(hero)}
            </div>
        </Link>
    )
}

export const Hero = ({
                         hero
                     }: { hero: HeroT }) => {
    return (

        <div key={hero.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">{hero.name}</h2>
            <p className="text-gray-700">Height: {hero.height}</p>
            <p className="text-gray-700">Mass: {hero.mass}</p>
            <p className="text-gray-700">Eye color: {hero.eye_color}</p>
            <p className="text-gray-700">Birth year: {hero.birth_year}</p>
            {JSON.stringify(hero)}
        </div>

    )
}
