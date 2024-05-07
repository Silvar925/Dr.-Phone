import styles from "./Footer.module.css"
import { RoundButton } from "../../shared/RoundButton/RoundButton"

import instagram from "../../../assets/socialNetworkIcon/instagram.svg"
import telegram from "../../../assets/socialNetworkIcon/telegram.svg"
import whatsApp from "../../../assets/socialNetworkIcon/whatsApp.svg"
import alazar from "../../../assets/alazar.svg"
import drPhone from "../../../assets/dr.phone.svg"

export const Footer = () => {
    return (
        <footer>
            <div className={styles.topBox}>
                <img src={drPhone} alt="Dr.Phone_logo" />

                <div className={styles.right}>
                    <div className={styles.socialNetwrok}>
                        <RoundButton img={instagram} alt="instagram" />
                        <RoundButton img={telegram} alt="telegram" />
                        <RoundButton img={whatsApp} alt="whatsapp" />
                    </div>
                    <img src={alazar} alt="AlazarStudioLogo" />
                </div>
            </div>

            <div className={styles.bottomBox}>
                <p>Политика конфидециальности</p>
                <p>Пользовательское соглашение</p>
            </div>
        </footer>
    )
}