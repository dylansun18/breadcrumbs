// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    emailVerified
    notes {
      items {
        id
        createdAt
        longitude
        latitude
        altitude
        content
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      emailVerified
      notes {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getNote = `query GetNote($id: ID!) {
  getNote(id: $id) {
    id
    createdAt
    longitude
    latitude
    altitude
    content
    user {
      id
      username
      email
      emailVerified
      notes {
        nextToken
      }
    }
  }
}
`;
export const listNotes = `query ListNotes(
  $filter: ModelNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      longitude
      latitude
      altitude
      content
      user {
        id
        username
        email
        emailVerified
      }
    }
    nextToken
  }
}
`;
