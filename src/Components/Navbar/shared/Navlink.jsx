const Navlink = () => {
  const menus = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Compare Country",
      link: "/compare",
    },
    {
      title: "News & Article",
      link: "/",
    },
  ];

  return (
    <nav>
      <ul className="w-max hidden md:flex items-center gap-3 text-xl font-thin">
        {menus.map((menu, index) => {
          return (
            <li
              key={index}
              className="hover:border-b-2 hover:border-main-higlight easy-in-out"
            >
              <a href={menu.link}>{menu.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navlink;
