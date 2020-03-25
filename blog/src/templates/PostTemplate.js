import React from 'react';
import Layout from '../components/layout';

const PostTemplate = React.memo(props => {
    const { title, date, html } = props.pageContext;
    return (
        <Layout>
            <h2>{title}</h2>
            <h4>{date}</h4>
            <hr />
            <div dangerouslySetInnerHTML={{__html: html}} />
        </Layout>
    );


    // return (
    //     <Layout>
    //         <code>
    //             <pre>{JSON.stringify(props, null, 4)}</pre>
    //         </code>
    //     </Layout>
    // );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;