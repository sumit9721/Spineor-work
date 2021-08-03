import Menu from "../../../../public/svg/Menu";
const MenuButton = (props) => {
  return (
    <button
      className="menu-btn"
      on="tap:sidebar.toggle"
      aria-label="Mobile Navigation"
    >
      <Menu />
    </button>
  );
};

export default MenuButton;
