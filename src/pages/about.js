//stap 1 importeer react
import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
//step defineer je component
const aboutPage = () => {
  return (
    <Layout pageTitle="about-us">
      <p>lorem ispum teskt teskskdzpakdopkzadk</p>
      <StaticImage
        alt="een diep zee cnidarian"
        src="../images/deep_sea_cnidarian.jpg"
      />
    </Layout>
  )
}
//stap 3 exporteer component
export default aboutPage
