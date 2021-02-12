import React from 'react';
import withAdmin from '../../../utils/Modules/admin/withAdmin';

import AdminLayout from '../../../utils/Modules/admin/AdminLayout';
import ReactMarkdown from 'react-markdown';

import Title from '../../../utils/Modules/editor/Title';
import Banner from '../../../utils/Modules/editor/Banner';
import SharkEditor from '../../../utils/Modules/editor/SharkEditor';
import SharkButton from '../../../utils/Modules/utils/SharkButton';

import { Container } from '@material-ui/core';

import style from '../../../styles/admin/New.module.css'

const index = () => {
    const [content, setContent] = React.useState('');


    const onPublish = async (e) => {
        console.log("Publishing...")
    }

    return (
        <AdminLayout>
            <Container maxWidth="lg">
                <div className={style.buttons}>
                    <div className={style.title}>Writing a new entry</div>
                    <SharkButton color="primary" onClick={onPublish}>PUBLISH</SharkButton>
                </div>

                <form className={style.container}>
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