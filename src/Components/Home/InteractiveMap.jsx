import Globe from "./shared/Globe";

const InteractiveMap = ({ setIsMapClicked }) => {
  return (
    <div className="w-[95%] mx-auto mt-[30px] text-white">
      <h1 className="text-3xl text-center mb-5">Interactive Globe</h1>
      <div className="bg-transparent">
        <Globe setIsMapClicked={setIsMapClicked} />
      </div>
    </div>
  );
};

export default InteractiveMap;
