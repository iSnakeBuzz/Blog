import Router from 'next/router';
import { parseCookie } from '../../CookieUtils';

const withAdmin = (props, Page) => {
    /* Getting all props from the Original and creating a new */
    const pageElement = ({ ...props }) => <Page {...props} />;

    /* Injecting getInitialProps to the new element */
    pageElement.getInitialProps = async (ctx) => initialProps(props, Page, ctx);

    /* Returning new element */
    return pageElement;
};

const initialProps = async ({ needAuth, redirect }, Page, { req, res }) => {
    const cookies = req ? req.cookies : parseCookie(document.cookie);
    let logged = cookies.authorization ? true : false;
    let wantRedirect = logged !== needAuth;

    console.log('Redirect:', wantRedirect)
    if (wantRedirect) return pushTo({ res, redirect });

    if (Page.getInitialProps) {
        const pageProps = await Page.getInitialProps();
        return { ...pageProps, cookies };
    } else return { cookies };
}

const pushTo = ({ res, redirect }) => {
    let isClient = res ? false : true;

    if (isClient) return Router.push(redirect);
    res.writeHead(302, { Location: redirect });
    res.end();
}

export default withAdmin;