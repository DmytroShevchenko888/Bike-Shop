interface NavDropdownProps {
  navOption: string[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ navOption }) => {
  return (
    <div className="drop-container">
      <div className="drop-box">
        <ul className="nav-option">
          {navOption.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavDropdown;
