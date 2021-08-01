import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`;
export const ADD_USER = gql`
    mutation addUser($username: String!, $password:String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) {
            token 
            user {
                _id
                username
                email
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook ($bookId: String!, $authors: [String], $description: String!, $title: String!, $image: String!, $link: String!) {
        saveBook(bookId: $bookId, authors: $authors, description: $description, title: $title, image:$image, link: $link) {
            _id
            username
            email
            bookCount
                savedBooks {
                _id
                title
                bookId
                image
                link
                description
                authors
            }
        }        
    }
`;

export const REMOVE_BOOK = gql`
    mutation deleteBook($_id: ID ) {
        deleteBook(_id: $_id) {
            _id
            username
            email
            bookCount
                savedBooks {
                _id
                title
                bookId
                image
                link
                description
                authors
            }
        }
    }
`;