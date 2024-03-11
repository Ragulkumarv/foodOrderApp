import { useContext, useState } from "react";
import UserClass from "./UserClass";
import UserContext from "./UserContext";
import ToDoList from "./ToDoList";
const About = () => {
  const { loggedInUser, email } = useContext(UserContext);
  return (
    <div className="flex justify-center flex-col text-center pb-4 fixed w-full top-[88px] bg-white left-0 z-10 h-3/4">
      <div className="max-w-3xl mx-auto p-4 overflow-y-scroll h-full ">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="mb-6">
          Welcome to RestoSpot - your go-to destination for discovering the best
          dining spots in town! We're excited to introduce you to a world of
          culinary delights right at your fingertips. Our React RestoSpot app is
          designed to revolutionize the way you explore, reserve, and indulge in
          delicious meals.
        </p>

        <h3 className="text-2xl font-bold mb-2">
          Discover the Finest Restaurants
        </h3>
        <p className="mb-6">
          With RestoSpot, you can explore a curated selection of the finest
          restaurants in your area. Whether you're in the mood for a cozy café,
          a trendy bistro, or an upscale dining experience, we've got you
          covered. Our platform showcases a diverse range of cuisines, from
          local favorites to international specialties, ensuring there's
          something for every palate.
        </p>

        <h3 className="text-2xl font-bold mb-2">
          Seamless Reservation Process
        </h3>
        <p className="mb-6">
          Say goodbye to long wait times and last-minute dining dilemmas. With
          RestoSpot, you can easily make restaurant reservations directly from
          your mobile device. Simply browse through our extensive list of dining
          establishments, check availability in real-time, and secure your table
          with just a few taps. It's that easy!
        </p>

        <h3 className="text-2xl font-bold mb-2">
          Personalized Recommendations
        </h3>
        <p className="mb-6">
          Not sure where to dine tonight? Let RestoSpot be your culinary guide.
          Our app utilizes advanced algorithms to deliver personalized
          restaurant recommendations tailored to your preferences. Whether
          you're searching for a romantic date spot, a family-friendly eatery,
          or a hidden gem off the beaten path, we'll help you find the perfect
          dining destination.
        </p>

        <h3 className="text-2xl font-bold mb-2">Exclusive Offers and Deals</h3>
        <p className="mb-6">
          Who doesn't love a good deal? At RestoSpot, we believe that dining out
          should be both enjoyable and affordable. That's why we partner with
          restaurants to offer exclusive deals, discounts, and promotions to our
          users. From prix-fixe menus to happy hour specials, you'll always find
          a great value when you book through our platform.
        </p>

        <h3 className="text-2xl font-bold mb-2">
          Community Reviews and Ratings
        </h3>
        <p className="mb-6">
          Your opinion matters! Share your dining experiences and help fellow
          foodies discover hidden gems with our community reviews and ratings
          feature. Whether you had an exceptional meal or encountered a minor
          hiccup, your feedback helps us maintain the highest standards of
          quality and service across all our partner restaurants.
        </p>

        <h3 className="text-2xl font-bold mb-2">
          Join the RestoSpot Community
        </h3>
        <p className="mb-6">
          Ready to embark on a culinary adventure? Download the RestoSpot app
          today and start exploring the vibrant world of dining in your city.
          Whether you're planning a special occasion, catching up with friends,
          or simply craving a delicious meal, RestoSpot is your trusted
          companion for unforgettable dining experiences. Thank you for choosing
          RestoSpot - where every meal is a memorable one!
        </p>
        <h3>
          Our mission is to elevate the quality of life for the urban consumer
          with unparalleled convenience. Convenience is what makes us tick. It's
          what makes us get out of bed and say, "Let's do this."
          <UserClass stream={"Residing @"} location={"Coimbatore"} />
        </h3>
        <h3>
          Contact Dev {loggedInUser} @ {email}
        </h3>
        <ToDoList />
      </div>
    </div>
  );
};
export default About;
