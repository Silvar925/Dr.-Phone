import styles from "./DeviceProtection.module.css"
import { Header } from "../../widgets/Header/Header"
import { Footer } from "../../widgets/Footer/Footer"
import { DeviceProtectionCard } from "../../widgets/DeviceProtectionCard/DeviceProtectionCard"
import { deviceProtection } from "../../data"


export const DeviceProtection = () => {
    return (
        <div className={styles.layout}>
            <Header />

            <main className={styles.main}>
                <section className={styles.deviceProtectionContainer}>

                    <div className={styles.bannerImages}>
                        <img src="deviceProtection\img.png" alt="deviceProtection" />
                    </div>


                    <ul>
                        <li><DeviceProtectionCard img="deviceProtection/touch.svg" alt="touch" text="Не ухудшает чувсвительность сенсора и не влияет на цветопередачу!" /></li>
                        <li><DeviceProtectionCard img="deviceProtection/mobileProtection.svg" alt="mobileProtection" text="Комплект из одной пленки для защиты 360" /></li>
                        <li><DeviceProtectionCard img="deviceProtection/shield.svg" alt="shield" text="Надежная защита телефона от ударов и царапин" /></li>
                    </ul>

                    <div className={styles.deviceProtectionContainerBottom}>
                        <ul>
                            {
                                deviceProtection.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <h3>{item.num}</h3>
                                            <p>{item.text}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    )
}