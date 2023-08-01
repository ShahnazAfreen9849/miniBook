import {gql} from "@apollo/client"
export const ADD_USER= gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`
export const LOGIN = gql`

mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        password
      }
    }
  }
`

export const SAVEBOOK = gql`

mutation SaveBook($description: String!, $bookId: String!, $title: String!, $authors: [String], $image: String, $link: String) {
    saveBook(description: $description, bookId: $bookId, title: $title, authors: $authors, image: $image, link: $link) {
      email
    }
  }

`

export const REMOVEBOOK = gql`
mutation RemoveBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      email
    }
  }

`