import styles from "./GlowingText.module.css"

export const GlowingText = ({ img, alt, text }) => {
    return (
        <div className={styles.glowingText}>
            <img src={img} alt={alt} />
            <p>{text}</p>
        </div>
    )
}