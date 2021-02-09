import { parseCookie } from '../../CookieUtils';

const withAdmin = (props, Page) => {
    /* Getting all props from the Original and creating a new */
    const pageElement = ({ ...props }) => <Page {...props} />;

    /* Injecting getInitialProps to the new element */
    pageElement.getInitialProps = (ctx) => initialProps(props, ctx);

    /* Returning new element */
    return pageElement;
};

const initialProps = async ({ needAuth, redirect }, { req, res }) => {
    const cookies = req ? req.cookies : parseCookie(document.cookie);
    let logged = cookies.authorization ? true : false;

    if (logged !== needAuth) pushTo({ req, redirect });

    return {};
}

const pushTo = ({ req, redirect }) => {
    let isClient = req ? false : true;

    if (isClient) return Router.push(redirect);
    req.writeHead(302, { Location: redirect }).end();
}

export default withAdmin;