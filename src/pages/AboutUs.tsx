const AboutUs = () => {
  return (
    <>
      <div className="bg-crvena h-[159px] relative">
        <div className="w-[646px] mx-auto flex flex-col gap-4 pt-10">
          <img src="YellowBanner.svg" alt="" className="h-[26px] w-[46px]" />
          <p className="text-3xl font-merriweather text-bijela">O nama</p>
        </div>
        <div className="h-[159px] w-4 absolute left-[17rem] top-0 border-l-[1px]  border-bijela z-30 "></div>
      </div>
      <div className="flex justify-between">
        <div className="p-28">
          <img src="mdi_calendar-range-crvena.svg" alt="" /> <br />
          <div className="flex gap-8 items-center">
            <div className="flex flex-col">
              <p className="font-medium text-xs">Škola osnovana</p>
              <p className="font-merriweather text-3xl">
                01.09. <br /> 2009.
              </p>
            </div>
            <p>
              Dubrovačka privatna gimnazija, škola je koja nudi dva programa:
              opći i jezični. Mala smo škola, koju je 1. rujna 2009. osnovao
              Tomislav Franušić, mr.sc. jezikoslovlja te profesor anglistike i
              talijanistike. U ovoj školskoj godini 2020. /21. imamo ukupno 67
              učenika u 4 razreda (naraštaja).
            </p>
          </div>
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/1abc/454e/8f62692a5b190d7b479355803b464453?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kjM4jP-SfTqZ~rk1QWwuH-rn2C15N-G8UveAoOyJBAiUawkoT4XrXSW7HWOck9pCJn~K0BqB21Clk9SOUs0TS5XfQrgtGVMpK8b8Cj5uyLHSP60UlYviUTQkaySwqg510Brqr2Sm70M0BgbkNfkRzwgnH02RQajqhgKyCdlxICqnQOZb7juKWvgOKKVIelQmbD1wc2zA1S0oFL21tsN1F7SVI44QE5--sCRZMIlTNReSU-f1Quuiqep5VpKVp5nhYLTTxiTveDSFcJ3fPzL8SV4AJ8~sqcjenh0U2jtp7LXxjU48P31LBbj2-2iyRiZKp8XWf3YxH2x0rAekgo6IyA__"
          alt=""
          className="h-[422px] w-[559px]"
        />
      </div>

      <div className="flex">
        <img
          src="https://s3-alpha-sig.figma.com/img/5e88/3c8c/d57017137d38a8b2aaac0480fb4c7e92?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RQj03tDG5biOJ3MoJoCyyv2nizljXrA4uLVfeZWPWhrVKWbyzLMQNi4vsWfFgwqBhT7-5LaS5dKrJRD6GnCgATTW953f7TXfW-8FHY8TRRpK8NYd5zfwe9L3Pmj00tD8Rd1vm2QpBYr~omVoV0~ZaHIpumoJxXXQ6hGvTctZNuFh8-JHSi~XWK69kwb-HfbuILAPbteVmuINXjZlua5g9kGrRbaSwx6k7jAT0bGhyx6G6DkH24lBfsJ~uWrOQnC7FRU5VGKEVWBHqTIRbeluE1rGm2kDLjPmOaJTTyLL-ME6isMSp-Z1hcU3Q1yEl6VxZGS-A9Tr9LkkozVOEQBcIQ__"
          alt=""
          className="w-[823px] h-[667px]"
        />
        <div className="p-28">
          <img src="mdi_school.svg" alt="" /> <br />
          <div className="grid grid-cols-2 grid-rows-2 gap-10 gap-x-20">
            <div className="flex flex-col gap-2">
              <p className="font-medium text-xs">Prvi razred</p>
              <p className="font-merriweather text-xl">16 učenika</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-xs">Drugi razred</p>
              <p className="font-merriweather text-xl">22 učenika</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-xs">Treći razred</p>
              <p className="font-merriweather text-xl">10 učenika</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-xs">Četvrti razred</p>
              <p className="font-merriweather text-xl">19 učenika</p>
            </div>
          </div>
          <img src="mdi_briefcase-variant.svg" className="mt-14" alt="" />
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-xs font-medium">Djelatnici</p>
            <p className="font-merriweather text-xl">18 profesora +</p>
            <p>
              tajnica, psihologinja,
              <br /> knjižničarka i spremačica
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellowBook relative h-[267px] w-full">
        <img
          src="https://s3-alpha-sig.figma.com/img/f9f8/4931/baf6e7694b7ba53a3bd2f8361f8daca1?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K71MkE1kxGhVGHvoLddyUBLYznIhgF9Mg1CX~53r9BdyyQEuM5rvgLHv0yiDv6j8UFniEueS~vIIzSq46Vx9RaW9pUJbluShYaa12Y9NpJ3ubKMZtb7rdVAWBb5batHZY2T5~tXNBqOrtS4uNQvQ9YY4pIR7WmVfXIruLhFOgn-r3M7N0PFvoi1khehOEV5TURFj28vydyA9x3whNN2zTIT06nvkqCoLdD1jGof7CqcleajmyZuAWQGzoCGPLpVHXmPpo4CSu4o5Xzkd1KeWtlHBi9OphtR0GOaZrB6R94D9OBbi~xSum96shAOXNRvhAnsk7ZXM0kx1Yy1c43Tq9w__"
          alt=""
          className="h-[267px] w-full absolute top-0 opacity-10"
        />
        <div className="flex items-center justify-center h-full w-[647px] mx-auto text-center">
          <p className="text-xl text-crna font-merriweather">
            Osnovni motiv našega postojanja je individualni pristup svakom
            učeniku. Gajimo dobru radnu atmosferu i pozitivne međuljudske
            odnose, u obiteljskom okruženju.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-32 gap-y-12 bg-bijela px-56 pt-32 pb-8">
        <div className="flex flex-col gap-4 w-[432px]">
          <img src="Rectangle 27.png" alt="" className="h-[12px] w-[22px]" />
          <p className="font-merriweather text-lg">
            Suradnja s gradskim ustanovama
          </p>
          <p>
            Nastojimo uvijek i iznova organizirati što suvremeniju te praktičnu
            korelacijsku i interdisciplinarnu nastavu, koja se ne odvija samo u
            učionicama. Surađujemo zbog toga s mnogim gradskim ustanovama i
            institucijama kako bi naši učenici mogli imati nastavu i na ulicama
            Grada, u muzejima, galerijama, kinima i kazalištu, u bogomoljama i
            na arheološkim lokalitetima, u prirodi adrenalinskih parkova i
            botaničkih vrtova, šuma, nacionalnih parkova i rezrevata prirode, u
            laboratorijima i praktikumima Sveučilišta u Dubrovniku i R-I-T
            Croatia. Pandemija je sve ovo usporila, ali se radujemo nastavku
            ovakvog načina i tempa rada, već od iduće školske godine.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img src="Rectangle 28.png" alt="" className="h-[12px] w-[22px]" />
          <p className="font-merriweather text-lg">Naši sportaši</p>
          <p>
            Još jedna karakteristična činjenica, na koju smo ponosni, veže se za
            našu školu. Mnogi mladi dubrovački sportaši (vaterpolisti, judaši,
            rukometaši, košarkaši, nogometaši, tenisači, veslači...) biraju
            školovanje u DPG-u. Škola smo koja zasigurno pruža najbolju podršku
            i najbolje uvjete za mlade talentirane športaše i učenike u našem
            Gradu i županiji. Mnogi su naši bivši učenici, nastavili školvanje u
            Hrvatskoj i izvan nje, na prestižnim sveučilištima te su razvijali
            svoje intelektualne sposobnosti i sportsku karijeru postižući
            vrhunske rezultate.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img src="Rectangle 28.png" alt="" className="h-[12px] w-[22px]" />
          <p className="font-merriweather text-lg">Uspjesi naše škole</p>
          <p>
            Iako ne upisujemo isključivo odlične učenike poput ostalih naših
            gimnazija, rezultati državne mature kao vanjskog vrednovanja,
            pokazuju ravnopravne rezultate i uspjehe s ostalima, što nas ispunja
            ponosom i smatramo najvećim uspjehom naše škole i potvrdu načina na
            koji radimo!
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <img src="Rectangle 27.png" alt="" className="h-[12px] w-[22px]" />
          <p className="font-merriweather text-lg">Međunarodni projekti</p>
          <p>
            Imamo iskustvo različitih međunarodnih projekata i suradnji sa
            školama iz Italije, Španjolske, Poljske i Latvije (Ersamus +
            Multikey project), te bilateralne suradnje sa školama iz Kumanova
            (Sjeverna Makedonija) i Bad Homburga (Njemačka), kao i s učenicima i
            institucijama Hrvata iz susjedne Boke kotorske.
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center gap-12 pb-20">
        <img src="DPG-bez-pozadine--300x104 1.png" alt="" />
        <p className="font-merriweather text-lg w-[647px] leading-6 text-center text-crna">
          Dubrovačka privatna gimnazija, kroz redoviti kurikulum i kroz
          vannastavne aktivnosti i projekte poglavito skrbi o dubrovačkoj
          tradiciji – govoru i baštini (projekti: „Očuvajmo govor Dubrovnika“,
          „Daksa –otočić tužnih sjećanja“ te radionice dubrovačkog govora)...
        </p>
      </div>
    </>
  );
};
export default AboutUs;
