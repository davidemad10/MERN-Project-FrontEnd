import Homefooter from "./Homefooter";
import Homeheader from "./Homeheader";
import Homebody from "./Homebody";
import Search from "./Search";
import { useState } from "react";
import Slider from "./slider";

function Home() {
  const [sharedData, setSharedData] = useState();

  const handleDataFromChildA = (data) => {
    setSharedData(data);
  };

  return (
    <>
      <div className="container-fluid">
        <Homeheader sendData={handleDataFromChildA} />
        <Slider />
        {sharedData ? <Search data={sharedData} /> : <Homebody />}
        <Homefooter />
      </div>
    </>
  );
}

export default Home;
