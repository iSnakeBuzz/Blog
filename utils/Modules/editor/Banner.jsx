import { Grid } from '@material-ui/core';
import React from 'react';

const Banner = () => {

    const [type, setType] = React.useState('image');

    const onSelectChange = (e) => {
        setType(e.target.value);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={9}>

                <input type="file" />

            </Grid>
            <Grid item xs={3}>
                <select onChange={onSelectChange} defaultValue={type}>
                    <option value="twitch">Twitch</option>
                    <option value="youtube">YouTube</option>
                    <option value="image">Image</option>
                </select>
            </Grid>
        </Grid>
    );
};

export default Banner;