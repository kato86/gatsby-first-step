import React from 'react';
import { css } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import { Message } from 'theme-ui';
import { useStaticQuery, Link, graphql } from 'gatsby';

import { rhythm } from '../utils/typography';


export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <MDXProvider
      components={Message}
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <Link
          to={'/'}
          css={css`
            margin-right: auto;
          `}
        >
          <h3
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={'/about/'}
          css={css`
            margin-right: 10px;
          `}
        >
          About
        </Link>
        <Link
          to={'/my-files/'}
          css={css`
            margin-right: 10px;
          `}
        >
          My files
        </Link>
        <Link to={'/contact/'}>Contact</Link>
      </div>
      {children}
    </MDXProvider>
  );
}
