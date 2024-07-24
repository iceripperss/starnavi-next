import styles from "./page.module.css";
import {getHeroes} from "@/api/getHeroes";
import {Heroes} from "@/components/Heroes";


export default async function Home() {
    const heroes = await getHeroes({page: "1"});

    return (
        <main className={styles.main}>
            <Heroes serverHeroes={heroes} />
        </main>
    );
}
