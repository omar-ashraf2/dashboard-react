import "./featured.scss";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="title">Revenue</span>
        <div className="container">
          <span className="money">$2.45</span>
          <span className="moneyRate">
            -11.4 <ArrowDownward className="icon negative" />
          </span>
        </div>
        <span className="subTitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="title">Sales</span>
        <div className="container">
          <span className="money">$22.5</span>
          <span className="moneyRate">
            -2.4 <ArrowDownward className="icon negative" />
          </span>
        </div>
        <span className="subTitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="title">Cost</span>
        <div className="container">
          <span className="money">$8.45</span>
          <span className="moneyRate">
            +15.2 <ArrowUpward className="icon" />
          </span>
        </div>
        <span className="subTitle">Compared to last month</span>
      </div>
    </div>
  );
}

export default Featured;
