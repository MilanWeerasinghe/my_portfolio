import React from "react";
import Layout from "./layouts/Layout";
import SideBar from "./components/SideBar";
import Spotlight from "./components/Spotlight";
import Content from "./components/Content";
import Preloader from "./components/Preloader";
import { useState, useEffect } from "react";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader loading={loading}/>
      ) : (
        <>
          <Spotlight />
          <Layout>
            <SideBar />
            <Content />
          </Layout>
        </>
      )}
    </>
  );
};

export default App;
