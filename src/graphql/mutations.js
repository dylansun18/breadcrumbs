// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createNote = `mutation CreateNote($input: CreateNoteInput!) {
  createNote(input: $input) {
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
export const updateNote = `mutation UpdateNote($input: UpdateNoteInput!) {
  updateNote(input: $input) {
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
export const deleteNote = `mutation DeleteNote($input: DeleteNoteInput!) {
  deleteNote(input: $input) {
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
