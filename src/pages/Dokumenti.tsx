import SingleDropDown from "../components/SingleDropDown";

const dropDown = [
  { caption: "Vremenici", icon: <img src="mdi_timer-sand.svg" alt="" /> },
  { caption: "Pravilnici", icon: <img src="mdi_gavel.svg" alt="" /> },
  {
    caption: "Natječaji",
    icon: <img src="mdi_seal-variant.svg" alt="" />,
  },
  { caption: "Financije", icon: <img src="mdi_finance.svg" alt="" /> },
  {
    caption: "Kriteriji ocjenjivanja",
    icon: <img src="mdi_school.svg" alt="" />,
  },
  { caption: "Školski kurikul", icon: <img src="mdi_bookshelf.svg" alt="" /> },
  { caption: "Ostalo", icon: <img src="mdi_menu.svg" alt="" /> },
];

const Dokumenti = () => {
  return (
    <>
      <div className="bg-crvena h-[159px] ">
        <div className="w-[646px] mx-auto flex flex-col gap-4 pt-10">
          <img src="YellowBanner.svg" alt="" className="h-[26px] w-[46px]" />
          <p className="text-3xl font-merriweather text-bijela">Dokumenti</p>
        </div>
      </div>
      <div className=" flex flex-col gap-4 py-20 bg-siva5">
        {dropDown.map((item) => (
          <SingleDropDown
            title={item.caption}
            key={item.caption}
            icon={item.icon}
          />
        ))}
      </div>
    </>
  );
};
export default Dokumenti;

