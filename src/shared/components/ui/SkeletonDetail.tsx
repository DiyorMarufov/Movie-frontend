const SkeletonDetail = () => {
  return (
    <>
      <div className="container flex flex-row rounded-lg max-sm:flex-col">
        <div className="w-1/2 h-[470px] bg-gray-300 rounded-lg animate-pulse max-sm:w-[100%]"></div>
        <div className="w-1/2 p-[30px] flex flex-col gap-[15px] max-sm:w-[100%]">
          <div className="w-[50%] h-6 bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="w-[15%] h-3 bg-gray-300 rounded-lg py-[5px] animate-pulse"></div>
          <div className="w-[10%] h-3  bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="w-[5%] h-3  bg-gray-300 rounded-lg py-[7px] animate-pulse"></div>
          <div className="w-[100%] h-60  bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </>
  );
};

export default SkeletonDetail;
