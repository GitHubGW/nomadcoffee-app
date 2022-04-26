import gql from "graphql-tag";

gql`
  query SeeCoffeeShops($offset: Int!) {
    seeCoffeeShops(offset: $offset) {
      id
      name
      latitude
      longitude
      user {
        id
        username
        avatarUrl
      }
      coffeeShopPhotos {
        id
        url
      }
      categories {
        id
        name
        slug
      }
    }
  }
`;
