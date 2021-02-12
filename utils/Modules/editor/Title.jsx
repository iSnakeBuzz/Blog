import { Grid } from '@material-ui/core';
import React from 'react';
import Slugify from 'slugify';

const Title = () => {

    const [title, setTitle] = React.useState("");
    const [uri, setUri] = React.useState("");

    const onTitleChange = (e) => {
        let title = e.target.value;
        let normalizedTitle = Slugify(title, {
            lower: true
        });

        setTitle(title);
        setUri(normalizedTitle);
    }

    const onUriChange = (e) => {
        let normalizedTitle = Slugify(e.target.value, {
            lower: true
        });
        setUri(normalizedTitle);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <input type="text" value={title} onChange={onTitleChange} name="title" placeholder="Title" />
            </Grid>
            <Grid item xs={3}>
                <input type="text" value={uri} onChange={onUriChange} name="uri" placeholder="uri" />
            </Grid>
        </Grid>
    );
};

export default Title;