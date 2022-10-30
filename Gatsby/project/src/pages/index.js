import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home() {
    // console.log(data);
    // const { title, description } = data.site.siteMetadata
    return (
        <Layout>
            <section className={styles.header}>
                <div>
                    <h2>Design</h2>
                    <h3>Develop & Deploy</h3>
                    <p>UX designer & web developer based in Manchester.</p>
                    <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
                </div>
                <img src="/banner.png" alt="" style={{ maxWidth: '100%' }} />

                {/* <div style={{ backgroundColor: 'red', width: '200%' }}>
                    <picture style={{ width: '100%' }}>
                        <source type="image/webp" srcset="//azurecomcdn.azureedge.net/cvt-fb336df4acf88296a11e5ecc66cdcc251cb2384dcc1c0face958bbbeb9bd0a51/images/page/home/ignite-hero-desktop.webp" media="(min-width: 961px)" />
                        <source type="image/webp" srcset="//azurecomcdn.azureedge.net/cvt-fb336df4acf88296a11e5ecc66cdcc251cb2384dcc1c0face958bbbeb9bd0a51/images/page/home/ignite-hero-mobile.webp" media="(min-width: 768px)" />
                        <source type="image/webp" srcset="//azurecomcdn.azureedge.net/cvt-fb336df4acf88296a11e5ecc66cdcc251cb2384dcc1c0face958bbbeb9bd0a51/images/page/home/ignite-hero-mobile.webp" />
                        <source type="image/png" srcset="//azurecomcdn.azureedge.net/cvt-fb336df4acf88296a11e5ecc66cdcc251cb2384dcc1c0face958bbbeb9bd0a51/images/page/home/ignite-hero-desktop.png" media="(min-width: 961px)" />
                        <source type="image/png" srcset="//azurecomcdn.azureedge.net/cvt-fb336df4acf88296a11e5ecc66cdcc251cb2384dcc1c0face958bbbeb9bd0a51/images/page/home/ignite-hero-mobile.png" media="(min-width: 768px)" />
                        <img src="/images/page/home/ignite-hero-mobile.png" alt="" style={{ width: '100%' }} />
                    </picture>
                </div> */}
            </section>
        </Layout>
    )
}

