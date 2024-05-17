import styles from "./ArrowButton.module.css"
import leftArrow from "../../../assets/left.svg"
import rightArrow from "../../../assets/right.svg"

export const ArrowButton = ({ onClick, orient }) => {
    return (
        <div className={styles.container} onClick={onClick}>
            <img src={orient === 'right' ? leftArrow : rightArrow} alt="#" />
        </div>
    )
}