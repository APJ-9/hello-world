import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

export default function Navbar() {
    const query = useStaticQuery(graphql`
        query SiteInfo {
            site(host: {}) {
              siteMetadata {
                  title
                  description
              }
            }
          }
        `
    )
    const { title } = query.site.siteMetadata
    return (
        <nav>
            <h1> Web Warriors</h1>
            <div className="liks">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects/'>Portfolio Projects</Link>
            </div>
        </nav>
    )
}
