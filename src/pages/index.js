// stap 1 import react
import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
//stap 2 definieer je component
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to Bosteel Agency.">
      <p>lorem ipsum</p>
      <StaticImage
        alt="randomized unsplash image!"
        src="https://cdn.mos.cms.futurecdn.net/cw6tn8mDAproPTjdjqndFV.jpg"
      />
    </Layout>
  )
}
//stap 3 exporteer je component
export default IndexPage
