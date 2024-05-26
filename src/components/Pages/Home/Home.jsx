import styles from "./Home.module.css"
import { GlowingText } from "../../shared/GlowingText/GlowingText"
import { SwiperContainer } from "../../widgets/SwiperContainer/SwiperContainer"
import { RoundButton } from "../../shared/RoundButton/RoundButton"

import { Header } from "../../widgets/Header/Header"
import { Footer } from "../../widgets/Footer/Footer"



export const Home = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.mainContainer}>
                <div className={styles.leftContainer}>
                    <ul>
                        <li><GlowingText text="Доставка по России" /></li>
                        <li><GlowingText text="Как нас найти" /></li>
                        <li><GlowingText text="89383499996" /></li>
                    </ul>

                </div>

                <div className={styles.middleContainer}>
                    <SwiperContainer />

                    <div className={styles.logoContainer}>
                        <img src="RedLogo.svg" alt="drphone" className={styles.logo}/>
                        <img src="rounded.svg" alt="" className={styles.round}/>
                    </div>

                </div>

                <div className={styles.rightContainer}>
                    <RoundButton />
                    <RoundButton />
                    <RoundButton />
                </div>
            </main>

            <Footer />
        </div>
    )
}