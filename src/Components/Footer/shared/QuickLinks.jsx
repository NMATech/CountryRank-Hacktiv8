const QuickLinks = () => {
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
    <div className="w-max mx-auto md:mx-0 mt-0 md:mt-[30px]">
      <h1 className="font-semibold text-xl">Quick Links</h1>
      <ul className="text-white/80 mt-5">
        {menus.map((menu, index) => {
          return (
            <li key={index}>
              <a href={menu.link}>{menu.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuickLinks;
