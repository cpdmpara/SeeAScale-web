import Header from "@components/Header/Header.jsx";
import ThingList from "@components/ThingList/ThingList.jsx";
import ControllBox from "@components/ControllBox/ControllBox.jsx";
import styles from "@pages/MainPage/MainPage.module.css"

function MainPage() {
    return (
        <div className={styles.pageWrap}>
            <Header />
            <ThingList />
            <ControllBox />
        </div>
    )
}

export default MainPage;