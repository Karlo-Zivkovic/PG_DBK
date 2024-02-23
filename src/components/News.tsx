import { useNavigate } from "react-router-dom";
import DateFooter from "./DateFooter";

const News = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-[192px] py-[60px] bg-siva5">
      <div className="flex flex-col gap-2">
        <img src="Rectangle 27.png" alt="" className="w-[22px] h-[12px]" />
        <p className="font-merriweather text-crna">Izdvajamo</p>
      </div>
      <button
        onClick={() => navigate("/covidBlog")}
        className="mt-8 flex text-left"
      >
        <img src="Rectangle 25.png" alt="" />
        <div className="w-[312px] h-[424px] bg-bijela px-5 py-6 flex flex-col justify-between">
          <div>
            <p className="text-siva1 text-lg font-merriweather">
              Epidemiološke mjere vezane uz početak i tijek školske godine
            </p>
            <p className="text-crvena font-medium">
              Školska godina 2020./2021.
            </p>

            <p className="font-medium text-siva1 text-sm mt-3">
              Sukladno objavljenim Odlukama Ministarstva znanosti i obrazovanja,
              te Hrvatskog zavoda za javno zdravstvo, ravnatelj/osnivač
              Dubrovačke privatne gimnazije dužan je donijeti preporuke...
            </p>
          </div>
          <DateFooter dateString={"11/07/2020"} />
        </div>
      </button>
      <div className="mt-[60px]">
        <div className="flex flex-col gap-2">
          <img src="Rectangle 28.png" alt="" className="w-[22px] h-[12px]" />
          <p className="font-merriweather text-crna">Ostale novosti</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="flex flex-col gap-4">
            <div className="flex px-5 py-6 flex-col justify-between gap-4 bg-bijela">
              <div className="flex flex-col">
                <p className="text-siva1 text-lg font-merriweather">
                  Natječaj za upis učenika u 1. Razred srednje škole
                </p>
                <p className="text-crvena font-medium">
                  Školska godina 2020./2021.
                </p>
              </div>
              <DateFooter dateString={"13/08/2020"} />
            </div>
            <div className="flex px-5 py-6 flex-col justify-between gap-4 bg-bijela">
              <div className="flex flex-col">
                <p className="text-siva1 text-lg font-merriweather">
                  Uvjeti upisa
                </p>
              </div>
              <DateFooter dateString={"13/08/2020"} />
            </div>
            <div className="flex flex-col bg-bijela">
              <img src="Rectangle 30.png" alt="" />
              <div className="flex flex-col px-5 py-6 gap-4">
                <div>
                  <p className="text-siva1 text-lg font-merriweather">
                    Objava predbilježbi za predupise
                  </p>
                  <p className="font-medium text-siva1 text-sm mt-2">
                    U teškim vremenima, i više nego inače, treba misliti na
                    budućnost uz kvalitetno obrazovanje. U našem Gradu već 10
                    godina za vas postoji i drugačija škola: DPG Krase nas:
                    individualni pristup i...
                  </p>
                </div>
                <DateFooter dateString={"13/07/2020"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col bg-bijela">
              <img
                src="https://s3-alpha-sig.figma.com/img/269e/eea0/1120fdc5538b2d2fe7fa732da7857d5b?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgINXwpNGZu1C~jC48j1pvq7A0NFo~qn8sQMwCdp2OeftXi83rd~QagT3cepxfUFMKZELTMteWtTKQ8lwV5jlHTa6-Mr~dn-jktPvX1zbunjbk0YZusCwGpL9TpSIUXfoTPhPQ-g55NLbx0CVf9-USkBBfy1GKAFT9UBkVcCAsdACKYZWUBGeXuCGrNoGDjAYzQgwzIKIBmmlxC9MUXkPe8yLNgYSUSJfItCNtv5AAeqhK7tl67m7cJR1tb6BX7PBMzwsHXh7e0B7F7aHdHHngSPvTG260k04dIag31~-7bfzHSfSnnzn67EuFfG~yU2qVsoy3YZnnZJNMWHFZ6g8g__"
                alt=""
                className=""
              />
              <div className="flex flex-col px-5 py-6 gap-4">
                <div>
                  <p className="text-siva1 text-lg font-merriweather">
                    Popis udžbenika
                  </p>
                  <p className="text-crvena font-medium">
                    Školska godina 2020./2021.
                  </p>
                </div>
                <DateFooter dateString={"02/08/2020"} />
              </div>
            </div>
            <div className="flex flex-col bg-bijela">
              <img
                src="https://s3-alpha-sig.figma.com/img/e5f5/eade/7112b498c2803320ca90d13d3fed319f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M60G52QYiTwDVGcpSDf2xlnAo5OI8YLP8hcxtdBYNWH3nXiz~9SJ~jgXRz-wuLIxM0Ahrk6dk~JomAd5QYwWuFjM6PfH~kXf4R2x3SaqVEwcWLEC6FZXKeyZ9TtUJ9LKHa8gvjiO4io~tSU-6R4t8NN5rhHlnfYjtNOVfYkly4ljNDyIbbn9T3vz0Ljjdjim25kBTrNu4iEsV6iRUANNlVEd3eIwjFriAAWhRrcXYZJro8sGtyllx-d0L0yU0jDUbFzPTrAshqLt4g786Jr98pvm~nInWqic8vrWeOfFmdU95vN9odmcZ2mxIWknAqkjmb07~3V0xK7YH4hRTBFXHg__"
                alt=""
                className=""
              />
              <div className="flex flex-col px-5 py-6 gap-4">
                <div>
                  <p className="text-siva1 text-lg font-merriweather">
                    Cambridge ESOL
                  </p>
                  <p className="text-crvena font-medium">Tečajevi</p>
                  <p className="font-medium text-siva1 text-sm mt-2">
                    DPG i ove godine poziva srednjoškolce na pohađanje i
                    polaganje izvrsnog i svjetski priznatog Cambridge ESOL
                    tečaja engleskog jezika na razini C1. Trajni certifikati
                    potrebnoga stupnja znanja...
                  </p>
                </div>
                <DateFooter dateString={"15/06/2020"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col bg-bijela">
              <img
                src="https://s3-alpha-sig.figma.com/img/f30c/1b95/02a39fda364081651e0e960f8d3a18bd?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CatlqIm0MFeF2vXsul~3UdenVVrDPzX1sXuSO6987hye3MrQZmYlJZorv2t5eMAKQ4BEKyG02IoS7zxLlXnOPBJD1-9TSOS4TcqeQA-HBZhX8dY~bSCdkDLn3PzNvuChv432vgpwH1x-wkXg94xEmoC2vMQ6kMk1gY7eKRTHMMkEjRHy6mW9tRCBKs-KcN-4ZFD-HQHpklDH4X9BE7V3eYRhepvL1qJXQuZgSUyOC891lNI6nAnaa~-w8ii38dDk~-5fOmNr1Eig0Szkp3tg64Y9dyXsPVrf-iNgqqaeVMVkU18c6tIEoINWcNEld3mWnIscQpqzb4Bq1hKw4srNOg__"
                alt=""
              />
              <div className="flex flex-col px-5 py-6 gap-4">
                <div>
                  <p className="text-siva1 text-lg font-merriweather">
                    Obavijest kandidatima za upis u 1. razred Dubrovačke
                    Privatne Gimnazije
                  </p>
                  <p className="font-medium text-siva1 text-sm mt-2">
                    Poštovani kandidati, s obzirom na aktualnu situaciju s
                    pandemijom, obavještavam vas, da kompletnu procedure upisa u
                    našu gimnaziju, možete odraditi na daljinu...
                  </p>
                </div>
                <DateFooter dateString={"22/07/2020"} />
              </div>
            </div>

            <div className="flex px-5 py-6 flex-col justify-between gap-4 bg-bijela">
              <div className="flex flex-col">
                <p className="text-siva1 text-lg font-merriweather">
                  Tečaj hrvatskog jezika i kulture za strance
                </p>
                <p className="text-crvena font-medium">Tečajevi</p>
                <p className="font-medium text-siva1 text-sm mt-2">
                  {`I ove godine Dubrovačka privatna gimnazija organizira- TEČAJ HRVATSKOG JEZIKA I KULTURE ZA STRANCE  {CROATIAN LANGUAGE AND CULTURE}   Početi tečaj {Basic Croatian} Napredni...`}
                </p>
              </div>
              <DateFooter dateString={"11/05/2020"} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-10 text-crna">
        <button className="px-[38px] py-[15px] border-crna border w-[314px] text-sm font-bold hover:text-siva5 hover:bg-crna transition-all">
          Učitaj još novosti
        </button>
      </div>
    </div>
  );
};

export default News;
