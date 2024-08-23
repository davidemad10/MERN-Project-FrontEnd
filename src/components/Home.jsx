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
      <div className="container-fluid" style={{ padding: "0", margin: "0" }}>
        <Homeheader sendData={handleDataFromChildA} />
        <Slider />
        {sharedData ? <Search data={sharedData} /> : <Homebody />}
        <Homefooter />
      </div>
    </>
  );
}

export default Home;
