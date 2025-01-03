import styles from '../styles/Canvas.module.css';

const Canvas = () => {
    const numberOfBoxes = 60; 

    return (
      <div className={styles.canva}>
        {Array.from({ length: numberOfBoxes }).map((_, index) => (
            // _ platzhalter weil keine daten gerendert werden
          <div
            key={index} className={styles.box}
          />
        ))}
      </div>
    );
}

export default Canvas;
