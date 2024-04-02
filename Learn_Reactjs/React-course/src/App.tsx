import { useContext, useEffect } from "react";

import MainHeader from "./components/MainHeader";
import { Outlet } from "react-router-dom";
import { PostContext } from "./hook/postContext";

function App() {
  const { state } = useContext(PostContext);

  useEffect(() => {
    console.log({ state });
  }, []);

  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
