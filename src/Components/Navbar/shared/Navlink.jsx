const Navlink = () => {
  const menus = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Compare Country",
      link: "/",
    },
    {
      title: "News & Article",
      link: "/",
    },
  ];

  return (
    <ul className="w-max hidden md:flex items-center gap-3 text-xl font-thin">
      {menus.map((menu, index) => {
        return (
          <li
            key={index}
            className="hover:border-b-2 hover:border-main-higlight easy-in-out"
          >
            <a href="">{menu.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlink;
