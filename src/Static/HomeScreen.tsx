import Future from "../Pages/Future";
import Hero from "../Pages/Hero";
import Spotlight from "../Pages/Spotlight";
import WhatisPostman from "../Pages/WhatisPostman";
import WhatsHappening from "../Pages/WhatsHappening";
import Post from "../Pages/Post";
import GetStarted from "../Pages/GetStarted";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <WhatisPostman />
      <WhatsHappening />
      <Future />
      <Spotlight />
      <Post />
      <GetStarted />
    </div>
  );
};

export default HomeScreen;
