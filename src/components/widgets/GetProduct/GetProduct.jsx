import styles from "./GetProduct.module.css"
import { WhiteBox } from "../../shared/WhiteBox/WhiteBox"


import blackHandbag from "../../../assets/blackHandbag.svg"
import blackTruck from "../../../assets/blackTruck.svg"
import arrow from "../../../assets/arrowGetPr.svg"

export const GetProduct = () => {
    return (
        <WhiteBox className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardLeft}>
                    <img src={blackTruck} alt="#" />

                    <div className={styles.cardText}>
                        <p>Доставка по России</p>
                        <p style={{ color: 'gray' }}>Сегодня, бесплатно</p>
                    </div>
                </div>

                <img className={styles.arrow} src={arrow} alt="#" />

            </div>

            <hr />

            <div className={styles.card}>
                <div className={styles.cardLeft}>
                    <img src={blackHandbag} alt="#" />

                    <div className={styles.cardText}>
                        <p>Самовывоз</p>
                        <p style={{ color: 'gray' }}>г. Черкесск, ул. Ленина</p>
                    </div>
                </div>

                <img className={styles.arrow} src={arrow} alt="#" />

            </div>
        </WhiteBox>
    )
}