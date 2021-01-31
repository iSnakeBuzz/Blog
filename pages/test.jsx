import React from 'react';

const Jodit = React.lazy(() => {
    return import("jodit-react");
});

export const RichTextEditor = () => {
    const [value, setValue] = React.useState("");
    const editor = React.useRef(null)
    const isSSR = typeof window === "undefined";

    React.useEffect(() => {
        console.log("Value:", value);
        console.log("Ref:", editor)
    }, [value]);

    return (
        <>
            {!isSSR && (
                <React.Suspense fallback={<div>Loading RTE</div>}>
                    <Jodit
                        ref={editor}
                        value={value}
                        onChange={(val) => setValue(val)}
                    />
                </React.Suspense>
            )}
        </>
    );
}

const test = () => {
    const editor = React.useRef(null)
    const [content, setContent] = React.useState('')

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    return (
        <RichTextEditor />
    );
};

export default test;