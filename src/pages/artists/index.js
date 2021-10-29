import * as React from "react"
import Layout from "../../components/layout"
import { Link, graphql } from "gatsby"
const ArtistPage = ({
  data: {
    allWpArtist: { edges },
  },
}) => {
  return (
    <Layout pageTitle="Artists of Bosteels Agency">
      {edges.map(item => {
        const slug = item.node.slug
        const artist = item.node.artistMeta
        return (
          <Link to={`/artists/${slug}`}>
            <p key={item.node.id}>
              {artist.firstName} {artist.lastName}
            </p>
          </Link>
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
          id
          slug
        }
      }
    }
  }
`
export default ArtistPage
