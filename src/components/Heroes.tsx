"use client";

import React from 'react';
import {getHeroes} from "@/api/api";
import {HeroWithLink} from "@/components/Hero";

export const Heroes = ({serverHeroes}) => {
    const [heroes, setHeroes] = React.useState(serverHeroes);
    const [page, setPage] = React.useState(1);

    const fetchHeroes = async (page:number) => {
        const newHeroes = await getHeroes({page});
        setHeroes(newHeroes);
    }

    const handleNextPage = async () => {
        setPage((prev) => prev + 1);
        await fetchHeroes(page + 1);
    };

    const handlePreviousPage = async () => {
        setPage((prev) => prev - 1);
        await fetchHeroes(page - 1);
    }

    return (
        <div className="container mx-auto p-4">
            {heroes.results.map((hero) => (
               <HeroWithLink key={hero.id} hero={hero} />
            ))}
            <div className="flex justify-between items-center mt-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handlePreviousPage}
                >
                    Previous page
                </button>
                <div className="text-gray-700">Current page: {page}</div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleNextPage}
                >
                    Next page
                </button>
            </div>
        </div>
    );
};
