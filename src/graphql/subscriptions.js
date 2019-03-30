// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateNote = `subscription OnCreateNote {
  onCreateNote {
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
export const onUpdateNote = `subscription OnUpdateNote {
  onUpdateNote {
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
export const onDeleteNote = `subscription OnDeleteNote {
  onDeleteNote {
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
