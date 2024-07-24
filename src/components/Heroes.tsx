"use client";

import React from 'react';
import {getHeroes} from "@/api/getHeroes";
import styles from "@/app/page.module.css";

export const Heroes = ({serverHeroes}) => {
    const [heroes, setHeroes] = React.useState(serverHeroes);
    const [page, setPage] = React.useState(1);

    const handlePage = async () => {
        setPage(page + 1);
        const newHeroes = await getHeroes({page: (page + 1).toString()});
        setHeroes(newHeroes);
    };

    return (
        <div>
            {heroes.results.map((hero) => (
                <div key={hero.id} className={styles.card}>
                    <h2>{hero.name}</h2>
                    <p>Height: {hero.height}</p>
                    <p>Mass: {hero.mass}</p>
                    <p>Eye color: {hero.eye_color}</p>
                    <p>Birth year: {hero.birth_year}</p>
                </div>
            ))}
            <button className={styles.button} onClick={handlePage}>Current page: {page}</button>
        </div>
    );
};
