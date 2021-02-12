import React from 'react';
import { Container, Grid } from '@material-ui/core';
import AdminLayout from '../../../utils/Modules/admin/AdminLayout';
import withAdmin from '../../../utils/Modules/admin/withAdmin';
import ReactMarkdown from 'react-markdown';
import SharkEditor from '../../../utils/Modules/editor/SharkEditor';
import style from '../../../styles/admin/New.module.css'
import Banner from '../../../utils/Modules/editor/Banner';
import Title from '../../../utils/Modules/editor/Title';

const index = () => {
    const [content, setContent] = React.useState('');

    return (
        <AdminLayout>
            <Container maxWidth="lg">
                <form className={style.container}>
                    <div className={style.title}>Creating a post..</div>

                    <Title />

                    <input type="text" name="description" placeholder="Description" />

                    <Banner />

                    <SharkEditor placeholder="Content here... **Hello world**" onChange={(e) => setContent(e.target.value)} />
                </form>

                <div className={style.container}>
                    <ReactMarkdown children={content} skipHtml={false} escapeHtml={false} />
                </div>
            </Container>
        </AdminLayout>
    );
};

export default withAdmin({ needAuth: true, redirect: '/admin' }, index);