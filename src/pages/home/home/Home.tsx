import React from "react";
import Hero from "./Hero";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import TrendeningDestination from "./TrendeningDestination";
import UniqueProperties from "./uniqueProperties/UniqueProperties";
import QuickAndEasy from "./quick&Easy/Quick&Easy";
import HomeGuestLove from "./homeGuestLove/HomeGuestLove";
import PropertiesMayLike from "./propertiesMayLike/PropertiesMayLike";
import ExploreBangladesh from "./exploreBd/ExploreBangaldesh";
import BrowseByProperty from "./browseByProperty/BrowseByProperty";

const Home = () => {
  const user = useSelector((state: RootState) => state.auth.user?.email);
  console.log(user);
  return (
    <div className="mx-[20px] sm:mx-[30px] max-w-6xl md:mx-auto">
      <Hero />
      <TrendeningDestination />
      <UniqueProperties />
      <QuickAndEasy />
      <ExploreBangladesh />
      <BrowseByProperty />
      <HomeGuestLove />
      <PropertiesMayLike />
      {/* <WhyChooseUs /> */}
      {/* <HowItWorks />
      <Testimonial /> */}
    </div>
  );
};

export default Home;
