const QuestionForUs = () => {
  return (
    <div>
      <div className="bg-yellowQuestion h-[686px] relative flex items-center justify-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/3b02/2721/8781e5cc73259fadeeba114b37fca516?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GVwXR7Qce0TE1q0C5VMMedjvTrsABosqjgFn2zObsuiH3tWnx5EznmX9qdY9vKrBrwoyA6INqFeIRf72sdmnkPFTMYluWRTvjwxl-Dsw24Y5g7Af68DcIRh~LPIsN2ktJ54QyptKXa52Fre7jkY6Oz0ZRUaksalaBfHBCtiZ41hZ~bF338tkEBtRu2RlVZtkXSMwhhJmnvy5dVZdL1ABiGgjy5cJwyi-zAtTOM9Rb0ksAgGnKx7AyxjvWLuk1mPUaOVPsiDEpTWQFUEq7~yBdIGpJPOr8maM0grAR4lM5sZqN4QU74TMz7fBpct0mV3JYvhmcBahyjsVvvx-TNPtSA__"
          alt=""
          className="opacity-20 h-[686px] absolute top-0 w-full"
        />
        <div className="flex flex-col items-center justify-center gap-2 w-[646px]">
          <img src="Group 21.svg" alt="" />
          <p className="font-merriweather text-crna text-lg z-30">
            Imate pitanje za nas?
          </p>
          <form className="z-40 w-full mt-8 text-crna">
            <div className="flex gap-8 w-full">
              <div className="flex flex-col gap-2 grow">
                <div className="flex items-center justify-between">
                  <label htmlFor="username" className="font-medium text-sm">
                    Ime i Prezime
                  </label>
                  <p className="text-xs font-medium">obavezno</p>
                </div>
                <input type="text" className="h-[50px] px-2" id="username" />
              </div>
              <div className="flex flex-col gap-2 grow">
                <div className="flex items-center justify-between">
                  <label htmlFor="email" className="font-medium text-sm">
                    E-mail
                  </label>
                  <p className="text-xs font-medium">obavezno</p>
                </div>
                <input type="text" className="h-[50px] px-2" id="email" />
              </div>
            </div>
            <div className="flex flex-col gap-2 grow mt-4">
              <label htmlFor="caption" className="font-medium text-sm">
                Naslov
              </label>
              <input type="text" className="h-[50px] px-2" id="caption" />
            </div>
            <div className="flex flex-col gap-2 grow mt-4">
              <div className="flex items-center justify-between">
                <label htmlFor="message" className="font-medium text-sm">
                  Poruka
                </label>
                <p className="text-xs font-medium">obavezno</p>
              </div>
              <textarea className="h-[100px] px-2" id="message" />
            </div>
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-6">
                <input type="checkbox" className="w-[14px] h-[14px] px-2" />
                <p className="font-medium text-xs w-[25rem] text-[#000000]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>

              <button className="bg-crna text-zuta font-bold px-[38px] py-[15px] hover:bg-siva1 transition-all duration-300">
                Pošalji
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default QuestionForUs;
