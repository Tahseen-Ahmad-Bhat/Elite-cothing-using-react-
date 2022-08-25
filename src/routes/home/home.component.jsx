import { Outlet } from "react-router-dom";

import DirectoryComponent from "../../components/directory/directory.component";
const Home = () => {
  return (
    <div>
      <Outlet />
      <DirectoryComponent />
    </div>
  );
};

export default Home;
