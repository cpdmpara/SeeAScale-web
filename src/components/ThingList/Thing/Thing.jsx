import styles from "@components/ThingList/Thing/Thing.module.css"

function Thing(props) {
    const unit = `${props.info.prefix}m`
    
    return (
        <article className={styles.thingArticle}>
            <img className={styles.thingImage} src={props.info.imageUrl} alt="물체 이미지" />
            <div className={styles.thingParag}>
                <h6>{props.info.title}</h6>
                <p>{props.info.quantity}{unit}</p>
            </div>
        </article>
    )
}

export default Thing;