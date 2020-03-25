import React from "react"
import { Link, graphql } from "gatsby"

import { useStaticQuery } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )



const LatestPostListQuery = graphql`
  query LatestPostListQuery {
    allMarkdownRemark(sort: {order:DESC, fields:frontmatter___date }) {
      edges {
        node {
          excerpt(truncate:true, pruneLength:200)
          id
          frontmatter {
            title
            path
            date(formatString: "YYYY-MM-DD HH:mm:ss")
          }
        }
      }
    }
  }
`;
            

const IndexPage = () => {
  const data = useStaticQuery(LatestPostListQuery);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>최근 작성한 게시글 목록</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <h2>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </h2>
            <h3>{node.frontmatter.date}</h3>
            <p>{node.excerpt}</p>
            <hr />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage
