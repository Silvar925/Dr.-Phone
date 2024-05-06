import styles from "./GetProduct.module.css"
import { WhiteBox } from "../../shared/WhiteBox/WhiteBox"


export const GetProduct = () => {
    return (
        <WhiteBox className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardLeft}>
                    <img src="../../../../public/ProductImages/truck.svg" alt="#" />

                    <div className={styles.cardText}>
                        <p>Доставка по России</p>
                        <p style={{ color: 'gray' }}>Сегодня, бесплатно</p>
                    </div>
                </div>

                <img className={styles.arrow} src="../../../../public/ProductImages/coolicon.svg" alt="" />

            </div>

            <hr />

            <div className={styles.card}>
                <div className={styles.cardLeft}>
                    <img src="../../../../public/ProductImages/truck.svg" alt="#" />

                    <div className={styles.cardText}>
                        <p>Самовывоз</p>
                        <p style={{ color: 'gray' }}>г. Черкесск, ул. Ленина</p>
                    </div>
                </div>

                <img className={styles.arrow} src="../../../../public/ProductImages/coolicon.svg" alt="" />

            </div>
        </WhiteBox>
    )
}