import { useEffect, useState } from "react";
import HomePage from "./home"
import ThreeRegionLottery from "./xo-so-ba-mien";

function Home({}) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <>
      <div className="body">
        <ThreeRegionLottery />
      </div>
    </>
  );
}
export default Home;