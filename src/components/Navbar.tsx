import { NavLink, useLocation } from "react-router-dom";
import UnionSvg from "./UnionSvg";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="w-full">
      <div className="bg-siva5 h-14 flex items-center justify-between px-6 ">
        <div className="flex items-center divide-x-2 divide-siva4">
          <div className="flex items-center gap-4 text-sm pr-6">
            <img
              src="mdi_phone-classic.png"
              alt="phone icon"
              className="h-4 w-4"
            />
            <p className="font-medium">
              <span className="font-bold">Tajništvo</span> +385(0)20/332-844
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm pl-6">
            <img src="Vector.png" alt="phone icon" className="h-4 w-4" />
            <p className="font-medium">
              <span className="font-bold">Ravnatelj</span>{" "}
              tomislav.franusic@pg-dubrovnik.net
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <p className="font-bold text-sm">Povežimo se!</p>

          <img src="mdi_facebook.png" alt="facebook logo" className="h-6 w-6" />
          <img
            src="mdi_instagram.png"
            alt="instagram logo"
            className="h-6 w-6"
          />
        </div>
      </div>
      <div className="h-20 p-6 flex items-center justify-between text-siva1">
        <div className="flex items-center gap-4">
          <img src="DPG-bez-pozadine--300x104 1.png" alt="" />
          <p className="font-merriweather italic text-sm">
            Ne mora svatko biti odličan učenik,
            <br />
            ali svatko može postati odličan čovjek
          </p>
        </div>
        <div className="flex items-center font-medium text-sm gap-10">
          <NavLink to="naslovnica" className="relative">
            Naslovnica{" "}
            {location.pathname === "/naslovnica" && (
              <div className="absolute left-7 top-6">
                <UnionSvg />
              </div>
            )}
          </NavLink>

          <NavLink to="aboutUs" className="relative">
            O nama{" "}
            {location.pathname === "/aboutUs" && (
              <div className="absolute left-[22px] top-6 ">
                <UnionSvg />
              </div>
            )}
          </NavLink>
          <NavLink to="fotogalerije" className="relative">
            Fotogalerije{" "}
            {location.pathname === "/fotogalerije" && (
              <div className="absolute left-7 top-6">
                <UnionSvg />
              </div>
            )}
          </NavLink>
          <NavLink to="dokumenti" className="relative">
            Dokumenti
            {location.pathname === "/dokumenti" && (
              <div className="absolute left-7 top-6">
                <UnionSvg />
              </div>
            )}
          </NavLink>
          <NavLink to="kontakt" className="relative">
            Kontakt
            {location.pathname === "/kontakt" && (
              <div className="absolute left-5 top-6">
                <UnionSvg />
              </div>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
