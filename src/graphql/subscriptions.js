// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateNote = `subscription OnCreateNote {
  onCreateNote {
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
export const onUpdateNote = `subscription OnUpdateNote {
  onUpdateNote {
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
export const onDeleteNote = `subscription OnDeleteNote {
  onDeleteNote {
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
export const onCreateAchievement = `subscription OnCreateAchievement {
  onCreateAchievement {
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
export const onUpdateAchievement = `subscription OnUpdateAchievement {
  onUpdateAchievement {
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
export const onDeleteAchievement = `subscription OnDeleteAchievement {
  onDeleteAchievement {
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
