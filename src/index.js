import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import "./index.css";
import App from "./App";
import { CartProvider } from "./context/cart_context";
import { CategoriesProvider } from "./context/categories_context";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

// const client = Front-End Test

// client
//   .query({
//     query: gql`
//       query {
//         category {
//           name
//           products {
//             id
//             name
//             inStock
//             gallery
//             description
//             category
//             attributes {
//               id
//               name
//               type
//               items {
//                 displayValue
//                 value
//                 id
//               }
//             }
//             prices {
//               currency {
//                 label
//                 symbol
//               }
//               amount
//             }
//             brand
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </ApolloProvider>
  </React.StrictMode>
);
