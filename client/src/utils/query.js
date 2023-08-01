import {gql} from '@apollo/client'

export const ME = gql`
query Me {
    me {
      email
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }

`