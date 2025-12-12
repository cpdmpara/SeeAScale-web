import Thing from "@components/ThingList/Thing/Thing.jsx"
import ArrowSymbol from "@assets/symbols/ArrowSymbol.svg?react"
import styles from "@components/ThingList/ThingList.module.css"

function ThingList() {

    const temp = {
        imageUrl: "https://i.namu.wiki/i/PsY-hiWrxkIIEpp3m-zGe3W7asmJdJ-hiNDiZTJO6-3oTZFN_zb5l1mgz2I8_Ejj2HbHuGdmY2wZ7VABtH_6lw.webp",
        title: "바오밥 나무",
        quantity: 20.1,
        prefix: "da"
    }
    const arr = Array.from({ length: 30 }, (_, i) => {
        const index = i + 1;

        if (index === 5 || index === 15 || index === 25) return 2;
        if (index === 10 || index === 20 || index === 30) return 1;
        return 0;
    });
    
    return (
        <main className={styles.main}>
            <button className={styles.button}>
                <ArrowSymbol />
            </button>
            <div className={styles.view}>
                <div className={styles.thingListWrap}>
                    <Thing info={temp} />
                    <Thing info={temp} />
                    <Thing info={temp} />
                </div>
                <div className={styles.gradWrap}>
                    {arr.map((v, i) => (
                        <div className={styles.grad} key={i} style={{width:'44px', height: `${30 + v * 15}px`}}></div>
                    ))}
                </div>
            </div>
            <button className={styles.button}>
                <ArrowSymbol style={{transform:'scaleX(-1)'}} />
            </button>
        </main>
    )
}

export default ThingList;