import styles from "@components/ThingList/Thing/Thing.module.css";
import { SERVER_URL } from "@utils/constant.jsx";

function Thing(props) {
    const physicalQuantity = `${props.thing.quantity}${prefixs[props.thing.prefix + 10][0]}m`;
    
    return (
        <button className={styles.thingArticle} onClick={props.onClick}>
            <img className={styles.thingImage} src={`${SERVER_URL}/thing/${props.thing.thingId}/image`} alt="물체 이미지" />
            <div className={styles.thingParag}>
                <h6>{props.thing.title}</h6>
                <p>{physicalQuantity}</p>
            </div>
            <div className={styles.gradWrap}>
                {grad.map((v, i) => (
                    <div className={styles.grad} key={i} style={{width:'100%', height: `${30 + v * 15}px`}}></div>
                ))}
            </div>
        </button>
    )
}

const prefixs = [
    ["y", "욕토"],
    ["z", "젭토"],
    ["a", "아토"],
    ["f", "펨토"],
    ["p", "피코"],
    ["n", "나노"],
    ["μ", "마이크로"],
    ["m", "밀리"],
    ["c", "센티"],
    ["d", "데시"],
    ["",  ""],
    ["da", "데카"],
    ["h", "헥토"],
    ["k", "킬로"],
    ["M", "메가"],
    ["G", "기가"],
    ["T", "테라"],
    ["P", "페타"],
    ["E", "엑사"],
    ["Z", "제타"],
    ["Y", "요타"]
]
const grad = [1, 0, 0, 0, 0, 2, 0, 0, 0, 0];

export default Thing;