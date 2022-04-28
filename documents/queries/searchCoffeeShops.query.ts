import gql from "graphql-tag";

gql`
  query SearchCoffeeShops($keyword: String) {
    searchCoffeeShops(keyword: $keyword) {
      id
      name
      latitude
      longitude
      coffeeShopPhotos {
        id
        url
      }
      user {
        id
        username
        avatarUrl
      }
      categories {
        id
        name
        slug
      }
    }
  }
`;
