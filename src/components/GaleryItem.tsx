import { useNavigate } from "react-router-dom";

const GaleryItem = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center px-[248px] bg-bijela py-16 gap-10">
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
          onClick={() => navigate("/fotogalerije")}
          className="ml-auto hover:opacity-60 transition-all"
        >
          <img src="close.svg" alt="" />
        </button>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 p-4">
        <img
          src="https://s3-alpha-sig.figma.com/img/0df8/4fc2/d7d66f653227bad75e3e1e6b5e64cd8f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VIS1FzG82k37P1DeWwh6Z1TSliYU9~yzVGvwFww0n4lDEMbMr7FsbH90FvA53LmMlkcTkZqOgRDi3FCS4PtN1UNl~cVadKfBGHHHsImFgJu3IGHxGXIEmxKEH5xzMUMZELOVxYABkAihz1tVT8ZIq0B0iL~PkWbgB1mT5JwzqdUfIKJsPG78XOkNOgjhKYtrpVEFK7g5QFHA3VvWTRJVUtK5bPP~JeWp9mn42y5Q1VtnuQaAiM2qBsxbGV0Vp5ZnP4IHXkYG1Q5iS5d-llNw9exIpC9Z1naU74CySh2fwxNM4fgG5cx0eHNVwdzQvf~0cfgmD3wkLHgEwJToGEQajA__"
          alt=""
          className="w-[434px] h-[300px] object-cover"
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/ad91/b2e1/74fca88f89eae8f00ebe6683dd6054d9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MSWX7UK0qzrT0KiwNUEDPu7N3o3lbYtq0J6iN-mgG4Tvg-Txam53FUm59BLES5z8uzcsfF0SHsVaUZgnCbRtpR330Q4VnCYkT~Or76D6UAzbWQD9PyteIEKa9DEGM2SIrSZpAoHoiD93qxh3Whts9xydOGsXJi-OXyI~psSTGcg7ktlCPt2E5TX-yAS0ba4r905EiKU9sljB6GUxLF~81kfSxWSUYHLz1ec~5rb23gX6fpk5hB6Ozn3ZKDub0s~7vG2-Uaig6J8GXjKwbr3RoBucSHjPu9Btz00S175v3Ay8DzNiSkkvpJdNYxcvkx~P0-~Yssf4AtcUMgbKtLN6uA__"
          alt=""
          className="w-[434px] h-[300px] object-cover"
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/3abc/bd89/e88fe38d2c3cd180e2729a148d70a01b?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=izPeLQTESPcc-fCVYNfqkXq~Uje1Ve5OFQv-kaKwAJIVSdS6hNS1sudglV9adMBQD9OcI6Pk~ZrSj4xSroensf8WV9jsqAgwFYJ--rD7izXNJJ8llZqmj-OcoykiWzMenA0pZsW1h0XIsz0ahTFcoWY4Hqa6LZQ1Os5Z9fXRviNm2h6pSSVVfP58G6a6NiqtL9s~kjK049yf0kjLByQwqdkJ0lipbrAV8gzM~JJxJfdvddP~f30HN~01pQA1IgTIN7zRBgq~aYQvYh~livnyi7XaSKZ07XqTH5KekgCW~Teen6KZ4uBxoXdvvOPvKIHfLbfIl3GgpdsL9Uc-0bqNdg__"
          alt=""
          className="w-[434px] h-[300px] object-cover"
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/fc6c/13bf/269472b20773d35cec623879c4ad4a96?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cDaMKydmkCja0QX5DSGUnPihSjiWNm6MPwQWRGEhYAjz0g~aoRMth5WGg1ADjlpx0R8KsiXNNcUm027B6NWuKZ2J7Bb8WZ5guOtT44UayHI4sO7TnpKqS9rwQD2bOLlpJUX1d46pCZyUSRO5TASBiBo8XF7SJXmqVO4lMqr7fZ5NLzA0hl2Th5zrCsD4c1IBehKliQU5sFm~wPf96ydVc9xs9M~YvnZZSls~LKcMs94upHTsKHz1DUE4FPPe9vfSO0qRKyjDO9sex2zyFPbR30e2DsuzbttIpT7C4d0Zb4qp70~jeuW6gtUCPjpyrAvAfFYFwBGR8snDA~RrI23PrA__"
          alt=""
          className="w-[434px] h-[300px] object-cover"
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/06a6/b5de/d5b5b408c4962a23bd570afbfad6a53e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NRg~3BSkBii5VBGcpUY85Aa03jpVfOuk6TSeYqQsSmW0r8FmGZOGvWYkjYjx4cPbkhMrfp3xQI3hmNL~bsmuKBKl-jmxYwdj9dKLUmk2Q2OOhukt9ZSgBfRxxOkQp-4DNiio0iN1WZx-x3efqwez-JfhhMN9gbNPZ8AGLXA10nWVMVg9~ZSXieBkhuBd1LYVjiQunHiDkNIeOpA6994FlSZNiouRE4c1v3s8sswfSTrTlTtCcM9~3up5QdQZnVz2P24bTxF5EmNYoH2RW~KjKK~FVQLXMxFO1aImIICnMLLXsSJ2cG5Uv4wx8~n50kdhpVQ~H0yCHsBmrItMh1tnpw__"
          alt=""
          className="w-[434px] h-[300px] object-cover"
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/5a75/0cc5/5c06b89b4afad3241b6d3a92452f905d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W-zhf4iAgv0GECB~SyIDaq7s5TwmWSR95ZJtIcU41u4lrmHqla9j4YaWxLqLLAvpyb0OBjfEQMSlg8yoh3bbB18yuSNtOQ8qQ9MPQcyB0HUm4UAex6-OeVJ~OGKKE~RyVzPPGV0biaXLRvstXvJFndCEJc50AZG1ZHb7Fc6w928UM1UA94b1qC-ihjute3H1UjDp44Yolz0sTgXcrVKcu5JBJ36ozUymXzAdHcTe-KzI7XLb-Bj-WzsFsgTCtKB9TysacJMgIOCCFVqZM2VLiQLum9PIMxYPuciuQ-AlbgjK-bWH1ERGwQNf4XYAUq8a7LhIAcTSVjf4~CtuMySr5w__"
          alt=""
          className="w-[434px] h-[300px] object-cover"
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/36cd/0140/e6af0468e06b5ae505c3ea4e22318f15?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gG3S2aqRELJJqCVvtbVNbne2J9uZggrQ2yd2pCtejt7Ft8RFcSGuUSdYnEtBXJxhJiRGLYVbXbZ8ZpDA7IQt-dq~h54W~VQ8bf5Om3bwYmwKuPz~ThxT9nbhP09yOKrjAN5SYPAAReJ~S7yPdICKfPJ6m2HZnTCPEc0dnmgK8DFfRHVYUUvFc1aHU1BVtO3kmMqYrOqzQCHyod0umypvH3OD5JbLFci1VB~lBH0otn0d8RpjQz0X57di-Ims7CfRdHmeKmHlpOhMHip3kwLkCgBtf05ZNV0v~xqcPbTDAQdqQvYYIob9FR7zuNKYKzBPW6hQp5xs9hyDy-e8o-47rQ__"
          alt=""
          className="w-[434px] h-[300px] object-cover"
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/7af5/9de9/b0e97441ef8fa35900a02df8bae7be19?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=STlfp~6LTQROSn~9Oob1P0iP8s2mwqIqH1FPk3Iwh2qtsroAhRHe9FBAYw9YDYS6RFGIlfdIpzUKpta26x30Nx5YZctQyaabdFCq9ge09CgxitU3FilPvdBdN~9jLB7BSaT6CuzcdBruPRYC-NwU0ECsli3WuyN8vyCGW038z8Hv2J3vhKX8dvky~GoCa3bJ1GL55JO9xwzjob67zXH9peiis-IxelBPaQc2-8EWE0Uzs0rY5aKYyrPFQ6u--rrQkCfFnsFMdG9-CYWLGYtnh0b6-7revI1q6y5oaP9fEVTyc-D2dnGkbv9gwxsKIMf~JVYj-h5yxN~r1Or1L9DR2w__"
          alt=""
          className="w-[434px] h-[300px] object-cover"
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/5141/251c/63676bb17933187e4b98802f3ec10e1b?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PmBk88QtqCqRDVZYV66bN79COoJHbwT1gNi-gIbdyVoKG1ztOlVNMfexjszYFXBiRLZSmjgBZXR-5M3R0gJxyr49uh5kCcjOTJUqYbhx62X8x9OVRM2~IR8awf--RRcClxlWkILS7t8Hi8l8cElBoiIMwba0sEIG8B2vbTl-3-9KnOqXlCA2tEb3uq0zHPnqVd9mL4Vr3v0FMh24ypI8Yhug0QlkfphxXzLiC96jSm7I1pFKZv56rLG-Kf1ehpNblFAiFPBAu3ILgNdqeuO5yw9zZCdiREBaUQS-rB99p9tQH-FwZuJNeT3kqbgBHKaeGVlasLGow2ztX26rarTm9w__"
          alt=""
          className="w-[434px] h-[300px] object-cover"
        />
      </div>
      <div className="flex divide-x divide-siva4 items-center justify-center p-20">
        <div className="flex gap-10 items-center pr-10">
          <div className="flex flex-col gap-3 w-[360px]">
            <img
              src="Vector 13.svg"
              alt=""
              className="h-[16px] text-right self-end mb-2"
            />
            <p className="text-xs font-medium text-right text-siva2">
              Prethodni album
            </p>
            <p className="text-lg font-merriweather text-right text-siva1">
              Naši učenici predstavili Hrvatsku na međunarodnom natjecanju
              Euroscola
            </p>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/9159/275a/ec95df920e3bdc636bf8198db400bab7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MiftFekR~hP4ojMfgil6tr2pdYC64rF4YRbozpxavlDHNwpIu30Vqa~8tkxmPLonJ7pFuLbY5XFrR31UfEPcPihNzYOTPNv-s3uNC007UhDsuyrCwye-miSuqd-C~74kfk1J6NbfxWnxtC7W3HeWvrCnLxoRYKhV2wMPRY9mtT8ZgAk8WnS5bmDkN14fYi2Bhe3bQpyEt3D7Fdcjny0p1BgaFP7Ij0eIt0JnmeGRUcClZ6VHwTGBSpf6R4oFsMIkWRFQqMdbSfe9FpntLBt-0VqvoKKFIhB5Ap7KuTWv1uugfXZosELM4iZHimfmw00fAJhevtzExzofdvAwAgLq6A__"
            alt=""
            className="rounded-full h-[46px] w-[46px] object-cover"
          />
        </div>
        <div className="flex gap-10 items-center pl-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/89f1/f016/1fc53ac3e72f72059c5eceae63d2968e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HhRPoD1YKiIMFJ0uRw-irS14sIh2bayYsrtF8nIZ4tpy8BDDItHlEbpMkeWUoHDQhu~MApq0RNzpD-G2BUL22uNfN1HRpswOICI-gFONBWl8toyxf4UCfyxCNa5MQmZbLT6Lug5wAPq37Wud6WL0SQQl7FVGkeeOcwG0~yg2p2YuoUyN03ASz4mBJvZBjfMxeCPwsgBlkOUIX2fEbERImbzrM9km4eI5ZQHfFPLzPpT2yB8wz58C~lcPvAhzJ~DNvB5YKQFZ3KeVXuPPM38gkrQXNVGqTNZE6RPCjwrxpZDxXDDnL7H~BV0P2y96R5ordbg~YFBLWUiUjzWMMgvi7Q__"
            alt=""
            className="rounded-full h-[46px] w-[46px] object-cover"
          />
          <div className="flex flex-col gap-3 w-[360px]">
            <img
              src="Vector 4.svg"
              alt=""
              className="h-[16px] text-left self-start mb-2"
            />
            <p className="text-xs font-medium text-left text-siva2">
              Sljedeći album
            </p>
            <p className="text-lg font-merriweather text-left text-siva1">
              Naši učenici predstavili Hrvatsku na međunarodnom natjecanju
              Euroscola
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GaleryItem;
