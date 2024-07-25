// При кліку на конкретного героя відображайте детальну інформацію у вигляді графа, де:
// Головна нода - обраний герой.
//     Від героя ведуть зв'язки до фільмів, у яких він з'являється.
//     Від кожного фільму ведуть зв'язки до космічних кораблів, на яких герой подорожував.

import {getFilmsByHero, getHero, getStarshipsByFilm} from "@/api/api";
import {Background, Controls, ReactFlow} from "@xyflow/react";
import {Node, Edge} from '@xyflow/react';

export default async function HeroGraph({params}) {
    const singleHero = await getHero(params.id);
    const hisFilms = await getFilmsByHero(params.id);
    const starshipsOfFilms = await getStarshipsByFilm(singleHero.films, params.id);

    const heroNode: Node = {
        id: `hero-${singleHero.id}`,
        data: {label: singleHero.name},
        position: {x: 250, y: 0},
        type: 'hero',
    };

    const filmNodes: Node[] = hisFilms.results.map((film, index) => ({
        id: `film-${film.id}`,
        data: {label: film.title},
        position: {x: 150 * (index + 1), y: 100},
        type: 'film',
    }));

    const starshipNodes: Node[] = starshipsOfFilms.results.map((starship, index) => ({
        id: `starship-${starship.id}`,
        data: {label: starship.name},
        position: {x: 100 * (index + 1), y: 200},
        type: 'starship',
    }));

    const filmEdges: Edge[] = hisFilms.results.map((film) => ({
        id: `hero-film-${film.id}`,
        source: `hero-${singleHero.id}`,
        target: `film-${film.id}`,
        type: 'default',
    }));

    const starshipEdges: Edge[] = starshipsOfFilms.results.map((starship) => ({
        id: `film-starship-${starship.id}`,
        source: `film-${starship.films[0]}`,
        target: `starship-${starship.id}`,
        type: 'default',
    }));

    const nodes = [heroNode, ...filmNodes, ...starshipNodes];
    const edges = [...filmEdges, ...starshipEdges];

    return (
        <div className="p-4 mx-auto">
            {/*<div>*/}
            {/*    <div className="mb-5">*/}
            {/*        <Hero hero={singleHero}/>*/}
            {/*    </div>*/}
            {/*    <div className="container rounded border-amber-200 mb-5">*/}
            {/*        <div className="border border-blue-500 mb-2">His films</div>*/}
            {/*        {JSON.stringify(hisFilms.results)}*/}
            {/*    </div>*/}
            {/*    <div className="container rounded border-amber-200">*/}
            {/*        <div className="border border-blue-500 mb-2">His starships</div>*/}
            {/*        {JSON.stringify(starshipsOfFilms)}*/}
            {/*    </div>*/}
            {/*</div>*/}

                <div style={{height: '1000px', width: '100%'}}>
                    <ReactFlow nodes={nodes} edges={edges} fitView>
                        <Controls/>
                        <Background/>
                    </ReactFlow>
                </div>
        </div>
    );
}
