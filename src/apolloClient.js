import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";

const httpLink = new HttpLink({ uri: process.env.REACT_APP_BACKEND_URL });
const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("JWT");
  if (token)
    operation.setContext({
      headers: {
        authorization: "Bearer " + token,
      },
    });
  return forward(operation);
});
const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Genre: {
        keyFields: ["id", "name"],
      },
      Movie: {
        keyFields: ["id", "title"],
      },
      Query: {
        fields: {
          favoriteMovies: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
  defaultOptions: {
    mutate: {
      errorPolicy: "all",
    },
  },
});

export default apolloClient;
