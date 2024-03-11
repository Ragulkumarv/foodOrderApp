import { useContext } from "react";
import UserClass from "./UserClass";
import UserContext from "./UserContext";
const About = () => {
  const { loggedInUser, email } = useContext(UserContext);
  return (
    <div className="flex justify-center flex-col text-center p-12 pt-3 fixed w-full top-[88px] bg-white left-0 z-10">
      <h3>
        Our mission is to elevate the quality of life for the urban consumer
        with unparalleled convenience. Convenience is what makes us tick. It's
        what makes us get out of bed and say, "Let's do this."
        <UserClass stream={"Residing @"} location={"Coimbatore"} />
      </h3>
      <h1>
        Contact Dev {loggedInUser} @ {email}
      </h1>
    </div>
  );
};
export default About;
