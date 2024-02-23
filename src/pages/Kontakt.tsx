import WorkingHours from "../components/WorkingHours";

const Kontakt = () => {
  return (
    <>
      <div className="h-[159px] relative">
        <img
          className="h-[159px] z-10 w-full absolute"
          src="kontaktPic.png"
          alt=""
        />
        <div className="w-[646px] mx-auto flex flex-col gap-4 pt-10">
          <img
            src="Rectangle 27.png"
            alt=""
            className="h-[26px] w-[46px] z-20"
          />
          <p className="text-3xl font-merriweather text-crna z-30">
            Kontakt
          </p>
        </div>
        <div className="h-[159px] w-4 absolute left-[17rem] top-0 border-l-[1px]  border-bijela z-30 "></div>
      </div>
      <WorkingHours />
    </>
  );
};
export default Kontakt;
