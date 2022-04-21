import gql from "graphql-tag";

gql`
  query SeeMe {
    seeMe {
      id
      email
      username
      name
      location
      avatarUrl
      githubUsername
      isMe
      totalFollowing
      totalFollowers
      createdAt
      updatedAt
    }
  }
`;
