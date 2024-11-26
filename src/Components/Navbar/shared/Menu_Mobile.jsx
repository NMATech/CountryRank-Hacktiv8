const Menu_Mobile = () => {
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
    <nav>
      <ul className="fixed bg-main-primary w-[200px] h-max flex flex-col items-center top-[3.5em] right-0 gap-3 text-xl font-thin p-3 easy-in-out">
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
    </nav>
  );
};

export default Menu_Mobile;
