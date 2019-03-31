// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createNote = `mutation CreateNote($input: CreateNoteInput!) {
  createNote(input: $input) {
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
export const updateNote = `mutation UpdateNote($input: UpdateNoteInput!) {
  updateNote(input: $input) {
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
export const deleteNote = `mutation DeleteNote($input: DeleteNoteInput!) {
  deleteNote(input: $input) {
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
export const createAchievement = `mutation CreateAchievement($input: CreateAchievementInput!) {
  createAchievement(input: $input) {
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
export const updateAchievement = `mutation UpdateAchievement($input: UpdateAchievementInput!) {
  updateAchievement(input: $input) {
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
export const deleteAchievement = `mutation DeleteAchievement($input: DeleteAchievementInput!) {
  deleteAchievement(input: $input) {
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
