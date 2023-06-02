import React from 'react';
import styles from "../styles/Content.module.css";
import Container from "./Container";

const Content = () => {
    return (
        <main className={styles.content}>
            <Container>
                <h1 className={styles.contentTitle}>Just reload page to see another photos.</h1>

                <div className={styles.gallery}>
                    <figure className={`${styles.image} ${styles.image1}`}>
                        <img src="https://picsum.photos/1919/1080" alt="Load error"/>
                    </figure>

                    <figure className={`${styles.image} ${styles.image2}`}>
                        <img src="https://picsum.photos/1920/1079" alt="Load error"/>
                    </figure>

                    <figure className={`${styles.image} ${styles.image3}`}>
                        <img src="https://picsum.photos/1918/1080" alt="Load error"/>
                    </figure>

                    <figure className={`${styles.image} ${styles.image4}`}>
                        <img src="https://picsum.photos/1920/1078" alt="Load error"/>
                    </figure>

                    <figure className={`${styles.image} ${styles.image5}`}>
                        <img src="https://picsum.photos/1921/1080" alt="Load error"/>
                    </figure>

                    <figure className={`${styles.image} ${styles.image6}`}>
                        <img src="https://picsum.photos/1920/1081" alt="Load error"/>
                    </figure>
                </div>

            </Container>
        </main>
    );
};

export default Content;