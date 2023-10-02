import { Link } from "react-router-dom";
import "./sidebarMenu.scss";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  Storefront,
  AttachMoney,
  Leaderboard,
  Email,
  Forum,
  Chat,
  ManageAccounts,
  ManageHistory,
  Report,
} from "@mui/icons-material";

function SidebarMenu() {
  const sidebarMenu = [
    {
      title: "Dashboard",
      id: 1,
      details: [
        {
          icon: <LineStyle />,
          desc: "Home",
        },
        {
          icon: <Timeline />,
          desc: "Analytics",
        },
        {
          icon: <TrendingUp />,
          desc: "Sales",
        },
      ],
    },
    {
      title: "Quick Menu",
      id: 2,
      details: [
        {
          icon: <Person />,
          desc: "Users",
        },
        {
          icon: <Storefront />,
          desc: "Products",
        },
        {
          icon: <AttachMoney />,
          desc: "Transactions",
        },
        {
          icon: <Leaderboard />,
          desc: "Reports",
        },
      ],
    },
    {
      title: "Notifications",
      id: 3,
      details: [
        {
          icon: <Email />,
          desc: "Mail",
        },
        {
          icon: <Forum />,
          desc: "Feedback",
        },
        {
          icon: <Chat />,
          desc: "Messages",
        },
      ],
    },
    {
      title: "Staff",
      id: 4,
      details: [
        {
          icon: <ManageAccounts />,
          desc: "Manage",
        },
        {
          icon: <ManageHistory />,
          desc: "History",
        },
        {
          icon: <Report />,
          desc: "Reports",
        },
      ],
    },
  ];
  return (
    <div className="wrapper">
      {sidebarMenu.map((d) => (
        <div className="sidebarMenu" key={d.id}>
          <h3>{d.title}</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to={d.details[0].desc === "Users" ? "/users" : "/"}>
                {d.details[0].icon}
                <p>{d.details[0].desc}</p>
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to={d.details[1].desc === "Products" ? "/products" : "/"}>
                {d.details[1].icon}
                <p>{d.details[1].desc}</p>
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to={d.details[2].desc === "/" ? "/" : "/"}>
                {d.details[2].icon}
                <p>{d.details[2].desc}</p>
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SidebarMenu;
