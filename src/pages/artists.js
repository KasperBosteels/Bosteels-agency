import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
const ArtistPage = ({
  data: {
    allWpArtist: { edges },
  },
}) => {
  return (
    <Layout pageTitle="Artists of Bosteels Agency">
      {edges.map(item => {
        const artist = item.node.artistMeta
        return (
          <p key={item.node.id}>
            {artist.firstName} {artist.lastName}
          </p>
        )
      })}
    </Layout>
  )
}
export const query = graphql`
  query {
    allWpArtist {
      edges {
        node {
          id
          artistMeta {
            firstName
            lastName
            artistName
          }
        }
      }
    }
  }
`
export default ArtistPage
