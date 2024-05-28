import styles from "./Repair.module.css"
import { Header } from "../../widgets/Header/Header"
import { Footer } from "../../widgets/Footer/Footer"
import { priceList } from "../../data"

export const Repair = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.mainContainer}>
                <section className={styles.videoContainer}>

                </section>

                <section className={styles.warningsContainer}>
                    <p>
                        <span>Внимание!</span> На сайте указаны только примерные расценки на ремонтные услуги, финальная стоимость складывается для каждого клиента индивидуально и зависит от сложности ремонта.
                    </p>

                </section>

                <section className={styles.priceListContainer}>
                    <ul>
                        {
                            priceList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <p>{item.service}</p>
                                        <p>{item.price}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <img src="repair/img.png" alt="repair" />

                </section>
            </main>

            <Footer />
        </div>
    )
}