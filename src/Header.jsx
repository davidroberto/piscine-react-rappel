const Header = ({ articlesFromApi }) => {
  return (
    <header>
      <img
        width="100px"
        src="/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.webp"
        alt="logo"
      />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>
      <p>{test}</p>
      <p>Il y {articlesFromApi.length} articles en BDD</p>
    </header>
  );
};

export default Header;
