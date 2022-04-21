import gql from "graphql-tag";

gql`
  mutation CreateAccount($email: String!, $username: String!, $password: String!, $name: String) {
    createAccount(email: $email, username: $username, password: $password, name: $name) {
      ok
      message
      id
    }
  }
`;
