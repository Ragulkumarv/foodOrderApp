import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Guest User",
  email: "guest@gmail.com",
});

export default UserContext;
