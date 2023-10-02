import Chart from "../../components/Chart/Chart";
import Featured from "../../components/Featured/Featured";
import "./home.scss";
import { userData } from "../../data.js";
import SmWidget from "../../components/SmWidget/SmWidget";
import LgWidget from "../../components/LgWidget/LgWidget";

function Home() {
  return (
    <div className="home">
      <Featured />
      <Chart
        data={userData}
        title="User Analytics"
        dataKey="Active User"
        grid
      />
      <div className="homeWidgets">
        <SmWidget />
        <LgWidget />
      </div>
    </div>
  );
}

export default Home;
