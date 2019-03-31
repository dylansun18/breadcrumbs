// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    emailVerified
    achievements {
      id
      imageUri
      name
      description
      achievers {
        id
        username
        email
        emailVerified
      }
    }
    notes {
      items {
        id
        createdAt
        longitude
        latitude
        altitude
        content
        upvotes
        downvotes
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
      achievements {
        id
        imageUri
        name
        description
      }
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
    upvotes
    downvotes
    author {
      id
      username
      email
      emailVerified
      achievements {
        id
        imageUri
        name
        description
      }
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
      upvotes
      downvotes
      author {
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
export const getAchievement = `query GetAchievement($id: ID!) {
  getAchievement(id: $id) {
    id
    imageUri
    name
    description
    achievers {
      id
      username
      email
      emailVerified
      achievements {
        id
        imageUri
        name
        description
      }
      notes {
        nextToken
      }
    }
  }
}
`;
export const listAchievements = `query ListAchievements(
  $filter: ModelAchievementFilterInput
  $limit: Int
  $nextToken: String
) {
  listAchievements(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      imageUri
      name
      description
      achievers {
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
