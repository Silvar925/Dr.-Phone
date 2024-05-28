import styles from "./DeviceProtectionCard.module.css"

export const DeviceProtectionCard = ({ img, alt, text }) => {
    return (
        <article className={styles.deviceProtectionCard}>
            <img src={img} alt={alt} />
            <p>{text}</p>
        </article>
    )
}