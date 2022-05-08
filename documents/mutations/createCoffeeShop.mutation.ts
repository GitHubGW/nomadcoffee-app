import gql from "graphql-tag";

gql`
  mutation CreateCoffeeShop($name: String!, $category: String) {
    createCoffeeShop(name: $name, category: $category) {
      ok
      message
    }
  }
`;
