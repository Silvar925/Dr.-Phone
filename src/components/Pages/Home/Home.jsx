import styles from "./Home.module.css"
import { GlowingText } from "../../shared/GlowingText/GlowingText"
import { SwiperContainer } from "../../widgets/SwiperContainer/SwiperContainer"
import { RoundButton } from "../../shared/RoundButton/RoundButton"

import { Header } from "../../widgets/Header/Header"
import { Footer } from "../../widgets/Footer/Footer"

import instagram from "../../../assets/socialNetworkIcon/instagram.svg"
import telegram from "../../../assets/socialNetworkIcon/telegram.svg"
import whatsApp from "../../../assets/socialNetworkIcon/whatsApp.svg"

import truck from "../../../assets/interfaceIcons/truck.svg"
import monitor from "../../../assets/interfaceIcons/monitor.svg"
import phone from "../../../assets/interfaceIcons/phone.svg"


export const Home = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.mainContainer}>
                <div className={styles.leftContainer}>
                    <ul>
                        <li><GlowingText text="Доставка по России" img={truck}/></li>
                        <li><GlowingText text="Как нас найти" img={monitor}/></li>
                        <li><GlowingText text="89383499996" img={phone}/></li>
                    </ul>

                </div>

                <div className={styles.middleContainer}>
                    <SwiperContainer />

                    <div className={styles.logoContainer}>
                        <div className={styles.animationBox}>
                            <div className={styles.leftAnimation}>
                                <div className={styles.dumai} />
                                {/* <div className={styles.dumai} /> */}
                            </div>

                            <div className={styles.rightAnimation}>
                                <div className={styles.dumai} />
                                {/* <div className={styles.dumai} /> */}
                            </div>
                        </div>

                        <img src="RedLogo.svg" alt="drphone" className={styles.logo} />
                        <img src="rounded.svg" alt="" className={styles.round} />
                    </div>
                </div>

                <div className={styles.rightContainer}>
                    <RoundButton img={whatsApp} />
                    <RoundButton img={instagram} />
                    <RoundButton img={telegram} />
                </div>
            </main>

            <Footer />
        </div>
    )
}