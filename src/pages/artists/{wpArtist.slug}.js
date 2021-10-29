import * as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
const ArtistPage = ({
  data: {
    wpArtist: { artistMeta: artist },
  },
}) => {
  return (
    <Layout pageTitle="Artiesten Template">
      <div>
        <h3>{artist.artistName}</h3>
        <h1>
          {artist.firstname} {artist.lastName}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: artist.description }} />
        <p>Email: {artist.email}</p>
        <p>Phone: {artist.phoneNumber}</p>
        <p>height: {artist.height}</p>
        <p>shirt size: {artist.shirtSize}</p>
        <p>shoe size: {artist.shoeSize}</p>
        <p>Origin: {artist.origin}</p>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query ($id: String) {
    wpArtist(id: { eq: $id }) {
      artistMeta {
        firstName
        lastName
        email
        description
        artistName
        height
        origin
        phoneNumber
        shirtSize
        shoeSize
      }
    }
  }
`
export default ArtistPage
