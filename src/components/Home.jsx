import Homefooter from "./Homefooter";
import Homeheader from "./Homeheader";
// import Headeroffcanvas from "./HomeHeaderoffcanvas";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <Homeheader />
        {/* <Headeroffcanvas /> */}
        <Homefooter />
      </div>
    </>
  );
}

export default Home;
