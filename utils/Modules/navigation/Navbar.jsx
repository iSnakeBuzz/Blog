import React from 'react';

import styles from '../../../styles/navigation/Navbar.module.css'
import { Button, Container, Grid } from '@material-ui/core';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
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
                            <div style={{fontWeight: "700"}}>Blog</div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div id="Links" className={styles.content}>
                            <div className={styles.links}>
                                <div>Home</div>
                                <div>About</div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div id="Button" className={styles.content}>
                            <div className={styles.subscribe} >
                                <Button variant="contained" color="primary">SUBSCRIBE</Button>
                            </div>
                        </div>
                    </Grid>
                </Grid >
            </Container >
        </div >
    );
};

export default Navbar;