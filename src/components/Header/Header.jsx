import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <h1>🏝️ On the way</h1>
      <div className="header-profile">
        <img
          src="https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="profile"
        />
      </div>
    </div>
  );
};
