import styles from "./SubmitButton.module.css";

function SubmitButton(){
    return (
        <button className={styles.button} type="submit">Enviar</button>
    )
}

export default SubmitButton;