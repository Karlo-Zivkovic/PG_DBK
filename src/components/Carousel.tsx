const Carousel = () => {
  return (
    <div className="relative">
      <div className="bg-hero h-[534px] flex items-center justify-center">
        <img
          src="image 2.png"
          alt=""
          className="absolute top-0 opacity-15 z-10"
        />
        <div className="h-[534px] w-4 absolute left-[25rem] border-l-[1px]  border-bijela z-30 "></div>
        <div className="text-bijela z-50 flex flex-col gap-4">
          <img
            src="Rectangle 13.png"
            alt=""
            className="h-[26px] w-[46px] mb-2"
          />
          <p className="text-[32px] font-merriweather">
            Neque porro quisquam est
          </p>
          <p className="font-medium">
            Sed ut perspiciatis unde omnis iste natus error sit
            <br />
            voluptatem accusantium doloremque laudantium
          </p>
          <button className="bg-zuta mt-4 text-crna w-[166px] h-[48px] text-sm font-bold hover:bg-zuta2 transition-all">
            Call To Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
