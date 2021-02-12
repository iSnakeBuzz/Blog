import { Grid } from '@material-ui/core';
import React from 'react';

const Banner = ({ onChange }) => {

    const [type, setType] = React.useState('image');
    const [value, setValue] = React.useState();

    const onSelectChange = (e) => {
        setType(e.target.value);
        setValue(undefined);
    }


    const onInputChange = (e) => {
        setValue(e.target.value);

        if (onChange)
            onChange({ type, value });
    }


    return (
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <input onChange={onInputChange} type={"text"} placeholder={type === "image" ? "Image Link." : type === "twitch" ? "Twitch Link" : "YouTube Link."} />
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