import React from 'react';

import styles from '../../../styles/navigation/Navbar.module.css'
import { Container, Grid } from '@material-ui/core';
import Link from 'next/link';
import SharkButton from '../utils/SharkButton';

const Navbar = ({ color = "white" }) => {

    const otherColor = color !== "white" ? ` bg-${color} hideBorder` : ` bg-primary`;

    return (
        <div className={styles.navbar + otherColor}>
            <Container maxWidth={"lg"}>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >
                    <Grid item xs={4}>
                        <div id="TitleContent" className={styles.content}>
                            <img src="/icons/blog.svg" className={styles.logo} alt="BlogLogo" />
                            <div className={styles.title}>Title</div>
                            <div className="vhr" />
                            <div style={{ fontWeight: "700" }}>Blog</div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div id="Links" className={styles.content}>
                            <div className={styles.links}>
                                <Link href={"/"} passHref>
                                    <div>Home</div>
                                </Link>
                                <Link href={"/about"} passHref>
                                    <div>About</div>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div id="Button" className={styles.content}>
                            <div className={styles.subscribe} >
                                <SharkButton color="white">SUBSCRIBE</SharkButton>
                            </div>
                        </div>
                    </Grid>
                </Grid >
            </Container >
        </div >
    );
};

export default Navbar;