import React from 'react';
import Layout from '../components/layout';
import Utterances from "../components/Utterances";

const PostTemplate = React.memo(props => {
    const { title, date, html } = props.pageContext;
    return (
        <Layout>
            <h2>{title}</h2>
            <h4>{date}</h4>
            <hr />
            <div dangerouslySetInnerHTML={{__html: html}} />
            <Utterances repo="DahuinWorld/blog-Issue"/>
        </Layout>
        
    );

});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;