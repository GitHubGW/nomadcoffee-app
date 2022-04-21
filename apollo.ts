import { ApolloClient, ApolloLink, createHttpLink, makeVar } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setContext } from "@apollo/client/link/context";

export const TOKEN = "TOKEN";
export const isLoggedInVar = makeVar<boolean>(false);
export const tokenVar = makeVar<string>("");

export const handleLogin = async (token: string) => {
  try {
    await AsyncStorage.setItem(TOKEN, token);
    isLoggedInVar(true);
    tokenVar(token);
  } catch (error) {
    console.log("handleLogin error");
  }
};

export const handleLogout = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN);
    client.clearStore();
    isLoggedInVar(false);
    tokenVar("");
  } catch (error) {
    console.log("handleLogout error");
  }
};

const authLink: ApolloLink = setContext((_, { headers }) => {
  return { headers: { ...headers, token: tokenVar() } };
});

const httpLink: ApolloLink = createHttpLink({
  uri: "https://nomadcoffee-gw.herokuapp.com/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
