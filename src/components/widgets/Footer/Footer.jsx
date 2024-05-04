import styles from "./Footer.module.css"
import { RoundButton } from "../../shared/RoundButton/RoundButton"

export const Footer = () => {
    return (
        <footer>
            <div className={styles.topBox}>
                <img src="dr.phone.svg" alt="Dr.Phone_logo" />

                <div className={styles.right}>
                    <div className={styles.socialNetwrok}>
                        <RoundButton img="socialNetworkIcon/instagram.svg" alt="instagram" />
                        <RoundButton img="socialNetworkIcon/telegram.svg" alt="telegram" />
                        <RoundButton img="socialNetworkIcon/whatsApp.svg" alt="whatsapp" />
                    </div>
                    <img src="alazar.svg" alt="AlazarStudioLogo" />
                </div>
            </div>

            <div className={styles.bottomBox}>
                <p>Политика конфидециальности</p>
                <p>Пользовательское соглашение</p>
            </div>
        </footer>
    )
}