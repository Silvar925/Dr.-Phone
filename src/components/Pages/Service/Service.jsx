import styles from "./Service.module.css"
import { ServiceCard } from "../../widgets/ServiceCard/ServiceCard"

export const Service = () => {
    return (
        <section className={styles.container}>
            <div className={styles.temp}>
                <ServiceCard img="serviceCardList/phone.png" alt="phone" name="ТЕЛЕФОНЫ" imgSize={{width: '112px', height: '197px'}}/>
                <ServiceCard img="serviceCardList/iphones.png" alt="iphones" name="ВСЕ УСТРОЙСТВА" imgSize={{width: '247px', height: '161px'}}/>
                <ServiceCard img="serviceCardList/appleWatch.png" alt="appleWatch" name="АКСЕССУАРЫ" imgSize={{width: '144px', height: '180px'}}/>
                <ServiceCard img="serviceCardList/origPhotoroom.png" alt="origPhotoroom" name="РЕМОНТ" imgSize={{width: '254px', height: '121px'}}/>
            </div>

            <div className={styles.temp}>
                <ServiceCard img="serviceCardList/origPhotoroom2.png" alt="origPhotoroom" name="ЗАЩИТА УСТРОЙСТВА 360" imgSize={{width: '215px', height: '184px'}}/>
                <ServiceCard img="serviceCardList/appleMacPro.png" alt="origPhotoroom" name="I MAC" imgSize={{width: '170px', height: '218px'}}/>
                <ServiceCard img="serviceCardList/origPhotoroom3.png" alt="origPhotoroom" name="ЧЕХЛЫ" imgSize={{width: '78px', height: '205px'}}/>
            </div>
        </section>
    )
}