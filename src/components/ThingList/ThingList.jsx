import { useState, useEffect } from "react"
import Thing from "@components/ThingList/Thing/Thing.jsx"
import ArrowSymbol from "@assets/symbols/ArrowSymbol.svg?react"
import requestor from "@utils/requestor"
import styles from "@components/ThingList/ThingList.module.css"

function ThingList() {
    const [things, setThings] = useState([]);

    useEffect(() => {
        const fetchThings = async () => {
            const response = await requestor.get("/thing", {params: {prefix: 0, page: 0}});
            setThings(response.data);
        }
        fetchThings();
    }, []);

    return (
        <main className={styles.main}>
            <button className={styles.button}>
                <ArrowSymbol />
            </button>
            <div className={styles.thingListWrap}>
                {things.map((v, i)=>( <Thing thing={v} key={i}/> ))}
            </div>
            <button className={styles.button}>
                <ArrowSymbol style={{transform:'scaleX(-1)'}} />
            </button>
        </main>
    )
}

export default ThingList;