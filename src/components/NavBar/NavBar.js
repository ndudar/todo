import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom"; // If using React Router
import "./NavBar.css"; // Import your CSS file

const NavBar = () => {
  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item as={Link} to="/tasklist">
          TaskList
        </Menu.Item>
        <Menu.Item as={Link} to="/login">
          Login
        </Menu.Item>
        <Menu.Item as={Link} to="/logout">
          Logout
        </Menu.Item>
        <Menu.Item as={Link} to="/profile">
          Profile
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavBar;
