import { useNavigate } from "react-router-dom";

const Fotogalerije = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[159px] relative">
        <img
          className="h-[159px] z-10 w-full absolute"
          src="Fotoaparat.png"
          alt=""
        />
        <div className="w-[646px] mx-auto flex flex-col gap-4 pt-10">
          <img
            src="Rectangle 27.png"
            alt=""
            className="h-[26px] w-[46px] z-20"
          />
          <p className="text-3xl font-merriweather text-crna z-30">
            Fotogalerije
          </p>
        </div>
        <div className="h-[159px] w-4 absolute left-[17rem] top-0 border-l-[1px]  border-bijela z-30 "></div>
      </div>
      <div className="divide-y divide-siva4">
        <div className="flex items-center px-[248px] bg-siva5 py-16 gap-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/a4a3/d7ff/c0952a774a7ff1cd7946b96236029242?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qDtahuCh4kUW3jSMOWrH2BR8eBc4b0w-Rb9E8DFkNBE6FIpy7S4QW8u~nEgXgcvCyXzGKaDz4ugn-h7REVB8GU6nvuCyqow8YRG0lPG4Tk8U97TNX3wkt-6gGxE2SLGMuZoTdPdkM2WPqFpnc54Rt7yyWHXM6RQ1toW0bkPy7hjWEWLrRU3qEA42HFZvPl9oZd2u49bHR5phkAHWHEAfxmbe73u8uKAsFhUbPH0XiebNnAK8ztBHhLbDD5jGMA4HTxYq-muumpVUGF5xEPjBztsU-1SkGKFISGFWkg4eK3lFse~87b5katQ42w5WOfR3WSrRowpaCTDJHMLrPhtFBA__"
            alt=""
            className="rounded-full h-[88px] w-[88px] object-cover"
          />
          <div className="flex flex-col">
            <p className="font-merriweather text-3xl">Atmosfera u gimnaziji</p>
            <p className="font-medium text-sm">19 slika</p>
          </div>
          <button
            onClick={() => navigate("/atmosferaUGimnaziji")}
            className="ml-auto hover:opacity-60 transition-all"
          >
            <img src="Vector 4.svg" alt="" />
          </button>
        </div>
        <div className="flex items-center px-[248px] bg-siva5 py-16 gap-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/89f1/f016/1fc53ac3e72f72059c5eceae63d2968e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HhRPoD1YKiIMFJ0uRw-irS14sIh2bayYsrtF8nIZ4tpy8BDDItHlEbpMkeWUoHDQhu~MApq0RNzpD-G2BUL22uNfN1HRpswOICI-gFONBWl8toyxf4UCfyxCNa5MQmZbLT6Lug5wAPq37Wud6WL0SQQl7FVGkeeOcwG0~yg2p2YuoUyN03ASz4mBJvZBjfMxeCPwsgBlkOUIX2fEbERImbzrM9km4eI5ZQHfFPLzPpT2yB8wz58C~lcPvAhzJ~DNvB5YKQFZ3KeVXuPPM38gkrQXNVGqTNZE6RPCjwrxpZDxXDDnL7H~BV0P2y96R5ordbg~YFBLWUiUjzWMMgvi7Q__"
            alt=""
            className="rounded-full h-[88px] w-[88px] object-cover"
          />
          <div className="flex flex-col">
            <p className="font-merriweather text-3xl">
              Terentska nastava Boka Kotorska
            </p>
            <p className="font-medium text-sm">19 slika</p>
          </div>
          <button className="ml-auto hover:opacity-60 transition-all">
            <img src="Vector 4.svg" alt="" />
          </button>
        </div>
        <div className="flex items-center px-[248px] bg-siva5 py-16 gap-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/9159/275a/ec95df920e3bdc636bf8198db400bab7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MiftFekR~hP4ojMfgil6tr2pdYC64rF4YRbozpxavlDHNwpIu30Vqa~8tkxmPLonJ7pFuLbY5XFrR31UfEPcPihNzYOTPNv-s3uNC007UhDsuyrCwye-miSuqd-C~74kfk1J6NbfxWnxtC7W3HeWvrCnLxoRYKhV2wMPRY9mtT8ZgAk8WnS5bmDkN14fYi2Bhe3bQpyEt3D7Fdcjny0p1BgaFP7Ij0eIt0JnmeGRUcClZ6VHwTGBSpf6R4oFsMIkWRFQqMdbSfe9FpntLBt-0VqvoKKFIhB5Ap7KuTWv1uugfXZosELM4iZHimfmw00fAJhevtzExzofdvAwAgLq6A__"
            alt=""
            className="rounded-full h-[88px] w-[88px] object-cover"
          />
          <div className="flex flex-col">
            <p className="font-merriweather text-3xl">
              Naši učenici predstavili Hrvatsku na međunarodnom natjecanju
              Euroscola
            </p>
            <p className="font-medium text-sm">19 slika</p>
          </div>
          <button className="ml-auto hover:opacity-60 transition-all w-10">
            <img
              src="Vector 4.svg"
              alt=""
              className="h-[18px] w-[18px] text-right ml-2"
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default Fotogalerije;
