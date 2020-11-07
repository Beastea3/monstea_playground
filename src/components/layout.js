import React from 'react'
import { Link } from "gatsby"
// import { ThemeContext } from 'gatsby-plugin-themes'
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm, scale } from "../utils/typography"

// const { theme, next } = useContext(ThemeContext)

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  const footerImgBase64 = useStaticQuery(graphql`
    query FooterQuery {
      file(absolutePath: { regex: "/sejk_dark.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <Image
          fixed={footerImgBase64.file.childImageSharp.fixed}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 100,
          }}
        />
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
