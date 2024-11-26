import { IoMenu, IoClose } from "react-icons/io5";

const Btn_Mobile = ({ isClicked, clicked }) => {
  return (
    <button className="flex md:hidden" onClick={clicked}>
      {isClicked ? (
        <IoClose className="text-[40px] ease-in-out" />
      ) : (
        <IoMenu className="text-[40px] ease-in-out" />
      )}
    </button>
  );
};

export default Btn_Mobile;
