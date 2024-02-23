import Location from "./Location";

const WorkingHours = () => {
  return (
    <div className="py-16 px-28 w-full flex flex-col gap-16">
      <div className="flex items-center justify-between">
        <p className="font-merriweather text-crna">Radno vrijeme ravnatelja</p>
        <div className="flex gap-4 items-center">
          <img src="mdi_phone-classic.png" alt="phone icon" />
          <p className="font-medium text-sm">
            Kontakt broj: <span className="text-crvena">091/1082-799</span>
          </p>
        </div>
      </div>
      <div className="flex gap-4 divide-x justify-between divide-siva4">
        <div className="flex flex-col gap-3 pl-12">
          <p className="font-medium text-crvena">PON</p>
          <div className="flex gap-2">
            <img src="mdi_clock-time-three-outline.svg" alt="" />
            <p className="font-medium text-sm text-crna pl-0.5">
              08:00 - 12:00
            </p>
          </div>

          <div className="flex gap-3 pl-0.5 relative mt-4">
            <img src="Vector.svg" alt="" />
            <p className="absolute -top-4 text-xs left-7">sa strankama</p>
            <p className="font-medium text-sm text-crna">08:00 - 12:00</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pl-12">
          <p className="font-medium text-crvena">UTO</p>
          <div className="flex gap-2">
            <img src="mdi_clock-time-three-outline.svg" alt="" />
            <p className="font-medium text-sm text-crna pl-0.5">
              08:00 - 13:30
            </p>
          </div>

          <div className="flex gap-3 pl-0.5 relative mt-4">
            <img src="Vector.svg" alt="" />
            <p className="absolute -top-4 text-xs left-7">sa strankama</p>
            <p className="font-medium text-sm text-crna">po dogovoru</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pl-12">
          <p className="font-medium text-crvena">SRI</p>
          <div className="flex gap-2">
            <img src="mdi_clock-time-three-outline.svg" alt="" />
            <p className="font-medium text-sm text-crna pl-0.5">
              10:00 - 14:30
            </p>
          </div>

          <div className="flex gap-3 pl-0.5 relative mt-4">
            <img src="Vector.svg" alt="" />
            <p className="absolute -top-4 text-xs left-7">sa strankama</p>
            <p className="font-medium text-sm text-crna">po dogovoru</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pl-12">
          <p className="font-medium text-crvena">ČET</p>
          <div className="flex gap-2">
            <img src="mdi_clock-time-three-outline.svg" alt="" />
            <p className="font-medium text-sm text-crna pl-0.5">
              08:00 - 12:00
            </p>
          </div>

          <div className="flex gap-3 pl-0.5 relative mt-4">
            <img src="Vector.svg" alt="" />
            <p className="absolute -top-4 text-xs left-7">sa strankama</p>
            <p className="font-medium text-sm text-crna">08:00 - 12:00</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pl-12">
          <p className="font-medium text-crvena">PET</p>
          <div className="flex gap-2">
            <img src="mdi_clock-time-three-outline.svg" alt="" />
            <p className="font-medium text-sm text-crna pl-0.5">
              10:00 - 14:30
            </p>
          </div>

          <div className="flex gap-3 pl-0.5 relative mt-4">
            <img src="Vector.svg" alt="" />
            <p className="absolute -top-4 text-xs left-7">sa strankama</p>
            <p className="font-medium text-sm text-crna">po dogovoru</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-merriweather text-crna">Radno vrijeme tajništva</p>
        <div className="flex gap-4 items-center">
          <img src="mdi_phone-classic.png" alt="phone icon" />
          <p className="font-medium text-sm">
            Kontakt broj: <span className="text-crvena">091/3332-844</span>
          </p>
        </div>
      </div>
      <div className="flex gap-4 divide-x justify-between divide-siva4">
        <div className="flex flex-col gap-3 pl-12">
          <p className="font-medium text-crvena">PON</p>
          <div className="flex gap-2">
            <img src="mdi_clock-time-three-outline.svg" alt="" />
            <p className="font-medium text-sm text-crna pl-0.5">
              10:00 - 15:00
            </p>
          </div>

          <div className="flex gap-3 pl-0.5 relative mt-4">
            <img src="Vector.svg" alt="" />
            <p className="absolute -top-4 text-xs left-7">sa strankama</p>
            <p className="font-medium text-sm text-crna">10:00 - 13:00</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pl-12">
          <p className="font-medium text-crvena">UTO</p>
          <div className="flex gap-2">
            <img src="mdi_clock-time-three-outline.svg" alt="" />
            <p className="font-medium text-sm text-crna pl-0.5">
              09:00 - 15:00
            </p>
          </div>

          <div className="flex gap-3 pl-0.5 relative mt-4">
            <img src="Vector.svg" alt="" />
            <p className="absolute -top-4 text-xs left-7">sa strankama</p>
            <p className="font-medium text-sm text-crna">10:00 - 13:00</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pl-12">
          <p className="font-medium text-crvena">SRI</p>
          <div className="flex gap-2">
            <img src="mdi_clock-time-three-outline.svg" alt="" />
            <p className="font-medium text-sm text-crna pl-0.5">
              09:00 - 15:00
            </p>
          </div>

          <div className="flex gap-3 pl-0.5 relative mt-4">
            <img src="Vector.svg" alt="" />
            <p className="absolute -top-4 text-xs left-7">sa strankama</p>
            <p className="font-medium text-sm text-crna">10:00 - 13:00</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pl-12">
          <p className="font-medium text-crvena">ČET</p>
          <div className="flex gap-2">
            <img src="mdi_clock-time-three-outline.svg" alt="" />
            <p className="font-medium text-sm text-crna pl-0.5">
              09:00 - 15:00
            </p>
          </div>

          <div className="flex gap-3 pl-0.5 relative mt-4">
            <img src="Vector.svg" alt="" />
            <p className="absolute -top-4 text-xs left-7">sa strankama</p>
            <p className="font-medium text-sm text-crna">10:00 - 13:00</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pl-12">
          <p className="font-medium text-crvena">PET</p>
          <div className="flex gap-2">
            <img src="mdi_clock-time-three-outline.svg" alt="" />
            <p className="font-medium text-sm text-crna pl-0.5">
              09:00 - 15:00
            </p>
          </div>

          <div className="flex gap-3 pl-0.5 relative mt-4">
            <img src="Vector.svg" alt="" />
            <p className="absolute -top-4 text-xs left-7">sa strankama</p>
            <p className="font-medium text-sm text-crna">10:00 - 13:00</p>
          </div>
        </div>
      </div>
      <Location />
    </div>
  );
};
export default WorkingHours;
