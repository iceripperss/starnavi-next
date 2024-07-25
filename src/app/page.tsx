import {getHeroes} from "@/api/api";
import {Heroes} from "@/components/Heroes";


export default async function Home() {
    const heroes = await getHeroes({page: "1"});

    return (
        <main>
            <Heroes serverHeroes={heroes} />
        </main>
    );
}
