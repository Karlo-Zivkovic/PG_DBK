const Footer = () => {
  return (
    <div className="bg-crna flex gap-28 h-[471px] px-[136px] py-20">
      <img
        src="https://s3-alpha-sig.figma.com/img/2183/7284/0224f3ce20131f98f917efc4b6f1d458?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ndju9zfscIIOX-GeDUh26OXkedf9wilLK2SkwMbJi3GaDBiId2HzK1xz~L110pViPaqkSmg14XscxdRwqYiNgd9RV99TnphcqhXmXPrOD5xYsY0khkEnaUbLJTjgI1~9grADrnGb9i9ig0Okw9eW3G-jZwdVrc0WKijiQqJQwQtCpzkqc3pnHbq5YpRJUT6PrzBCCH-vakVriqBZwBAf1w91buEfoieJni6JZiBVcbx02NlNBBhn-PB--OO3pxdvGVkhmm7yg1wNakT9uSlCZLwRvYehCEKTwtlRRZ25pBSkrHvbbYrzUx4DcS~Lw~FKcLNRfIcKhVGBTb4LENQS~w__"
        alt=""
        className="h-[55px] w-[158px]"
      />

      <div className="grid grid-cols-3 grid-rows-2 gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-zuta text-sm font-bold">
            Dubrovačka Privatna Gimnazija
          </p>
          <p className="font-medium text-sm text-bijela">
            Ul. Iva Vojnovića 12 20 000 Dubrovnik
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-zuta text-sm font-bold">Tajništvo</p>
          <p className="font-medium text-sm text-bijela">
            +385(0)20/332-844 ?@pg-dubrovnik.net
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-zuta text-sm font-bold">Ravnatelj</p>
          <p className="font-medium text-sm text-bijela">
            +385(0)91/3332-844 tomislav.franusic@pg-dubrovnik.net
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-zuta text-sm font-bold">Povežimo se!</p>
          <div className="flex gap-2">
            <img src="mdi_facebookWhite.svg" alt="" className="h-[24px]" />
            <img src="mdi_instagramWhite.svg" alt="" className="h-[24px]" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-zuta text-sm font-bold">Dodatni linkovi</p>
          <p className="font-medium text-sm text-bijela">Web imenik</p>
          <p className="font-medium text-sm text-bijela">Popis učenika</p>
          <p className="font-medium text-sm text-bijela">Popis nastavnika</p>
          <p className="font-medium text-sm text-bijela">Popis lektira</p>
          <p className="font-medium text-sm text-bijela">Raspored sati</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-zuta text-sm font-bold">Dodatni linkovi</p>
          <p className="font-medium text-sm text-bijela">E-učenik</p>
          <p className="font-medium text-sm text-bijela"> E-projekti</p>
          <p className="font-medium text-sm text-bijela">Konzultacije </p>
          <p className="font-medium text-sm text-bijela">Popis udžbenika </p>
          <p className="font-medium text-sm text-bijela">
            Radno vrijeme knjižnice
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
