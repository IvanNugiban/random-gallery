import React from 'react';
import styles from "../styles/Header.module.css";
import Container from "./Container";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <a href=""><h2 className={styles.headerTitle}>Random Gallery</h2></a>
            </Container>
        </header>
    );
};

export default Header;