import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { MDXRenderer } from 'gatsby-plugin-mdx'

interface PostContentProps {
  body: string
}

const PostContextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 50px 10px;
  word-break: break-all;
  border-left: 1px solid rgb(245, 245, 245);
  border-right: 1px solid rgb(245, 245, 245);
  box-shadow: 5px 0px 4px -4px rgb(0 0 0 / 10%),
    -5px 0px 4px -4px rgb(0 0 0 / 10%);

  /* box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%), 0 -2px 5px 0 rgb(0 0 0 / 10%); */

  @media (max-width: 768px) {
    width: 100%;
    padding: 50px 20px;
  }
`

const PostContent: FunctionComponent<PostContentProps> = function ({ body }) {
  return (
    <PostContextWrapper>
      <MarkdownWrapper>
        <MDXRenderer>{body}</MDXRenderer>
      </MarkdownWrapper>
    </PostContextWrapper>
  )
}

export default PostContent

const MarkdownWrapper = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: rgb(45, 45, 45);
  }
  h1:not(:first-of-type),
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }
  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 400;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 400;
  }
  h3 {
    font-size: 1.375rem;
    line-height: 1.645rem;
    font-weight: 400;
  }
  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
  }
  h5 {
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-weight: 400;
  }
  h6 {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  p {
    font-size: 1.025rem;
    line-height: 1.875rem;
    font-weight: 300;
    color: rgb(114, 114, 114);
  }
  a {
    color: gray;
    text-decoration: none;
  }
  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 800;
  }
  em {
    font-style: italic;
  }
  blockquote p {
    font-style: italic;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
  }
  ul,
  ol {
    color: gray;
    margin: 1rem 0 1rem 2rem;
  }

  li {
    margin: 0.25rem 0;
    font-weight: 300;
  }
  code {
    background: rgba(135, 131, 120, 0.15);
    color: #eb5757;
    border-radius: 3px;
    font-size: 1rem;
    line-height: 1.875rem;
    padding: 0 0.3rem;
  }
  hr {
    border: 0;
    height: 1px;
    background: black;
    opacity: 0.2;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400px;
  }
  th {
    font-weight: 700;
  }
  table,
  th,
  td {
    border: 1px solid black;
  }
  th,
  td {
    text-align: left;
    padding: 0.5rem;
  }

  img {
    display: block;
    margin: 0 auto;
    padding: 10px 0;
  }
  @media (max-width: 765px) {
    img {
      max-width: 700px;
    }
  }
  @media (max-width: 480px) {
    img {
      max-width: 260px;
    }
  }
  margin-bottom: 50px;
  .gatsby-highlight {
    position: relative;
    margin-top: 10px;
    -webkit-overflow-scrolling: touch;
  }
  .gatsby-highlight pre[class*='language-'] {
    -webkit-overflow-scrolling: touch;
    padding: 1rem 0.75rem;
    border-radius: 0.25rem;
  }
  .gatsby-highlight pre[class*='language-']::before {
    background: black;
    border-radius: 0 0 0.25rem 0.25rem;
    color: white;
    font-size: 15px;
    letter-spacing: 0.025rem;
    padding: 0.1rem 0.5rem;
    position: absolute;
    right: 1rem;
    text-align: right;
    top: 0;
  }
  .gatsby-highlight pre[class~='language-javascript']::before {
    content: 'JavaScript';
    background: #f7df1e;

    color: black;
  }
  .gatsby-highlight pre[class~='language-js']::before {
    content: 'JavaScript';
    background: #f7df1e;
    color: black;
  }
  .gatsby-highlight pre[class~='language-typescript']::before {
    content: 'TypeScript';
    background: #5882fa;
    color: white;
  }
  .gatsby-highlight pre[class~='language-ts']::before {
    content: 'TypeScript';
    background: #5882fa;
    color: white;
  }
  .gatsby-highlight pre[class~='language-html']::before {
    content: 'HTML';
    background: #005a9c;
    color: white;
  }

  .gatsby-highlight pre[class~='language-css']::before {
    content: 'CSS';
    background: #ff9800;
    color: white;
  }
`
