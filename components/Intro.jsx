import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";
const intro = () => {
  return (
    <div className={styles.container}>
        <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
        <Circle backgroundColor="#01c686" right="-40vh" />
        <div className={styles.card}>
            <h1 className={styles.title}>
                <span className={styles.brand}>JADRIKA</span> DIGITAL PRODUCT AGENCY
            </h1>
            <p className={styles.desc}> 
                Create live segments and terget the right people for message based on their behaviours 
            </p>
            <button className={styles.button}>DISCOVER</button>
        </div>
        <div className={styles.card}>
            <Image 
                src="/./img/Avocado.png"
                width="500px"
                height="400px"
                objectFit="cover"
                alt="Avocado"
            />
        </div>
    </div>
  )
}

export default intro;