import { Container, Grid, Hidden } from '@material-ui/core';
import Posts from '../posts/Posts';

const IndexContainer = () => {
    return (
        <Container maxWidth="lg">
            <div style={{ marginTop: "35px" }}>
                <Grid container>
                    <Hidden mdUp>
                        <Grid item xs={12}>
                            <Posts type="best" />
                        </Grid>
                    </Hidden>

                    <Grid item xs={12} md={7}>
                        <Posts type="normal" />
                    </Grid>

                    <Hidden smDown>
                        <Grid item md={5}>
                            <Posts type="best" />
                        </Grid>
                    </Hidden>
                </Grid>
            </div>
        </Container>
    );
};

export default IndexContainer;