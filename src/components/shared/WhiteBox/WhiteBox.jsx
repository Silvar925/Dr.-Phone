import styles from "./WhiteBox.module.css"

export const WhiteBox = ({ className, style, children }) => {
    return (
        <section className={`${styles.container} ${className}`} style={{ ...style }}>
            {children}
        </section>
    )
}