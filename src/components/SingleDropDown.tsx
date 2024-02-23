import { useState } from "react";

interface SingleDropDownProps {
  title: string;
  icon: JSX.Element;
}

const SingleDropDown = ({ title, icon }: SingleDropDownProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <article
      className={`transition-all duration-300 w-[646px] h-[56px] mx-auto shadow ${
        showAnswer ? "h-[15rem]" : "h-[56px]"
      }`}
    >
      <div className="flex items-center justify-between p-4  bg-bijela">
        <div className="flex gap-4 items-center">
          {icon}
          <h2
            className={`cursor-pointer font-medium text-sm ${
              showAnswer && "text-crvena"
            }`}
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {title}
          </h2>
        </div>
        <ul>
          {!showAnswer && (
            <li>
              <button onClick={() => setShowAnswer(true)}>
                <img src="Vector 7.svg" alt="" />
              </button>
            </li>
          )}
          {showAnswer && (
            <li>
              <button onClick={() => setShowAnswer(false)}>
                <img src="VectorReverse 7.svg" alt="" />
              </button>
            </li>
          )}
        </ul>
      </div>
      {showAnswer && (
        <div className="bg-bijela pl-14 py-4 pr-4 divide-y divide-siva5">
          <div className="flex items-center justify-between pb-4">
            <p className="font-medium text-sm">Dokument.pdf</p>
            <p className="font-medium text-xs">PREUZMI</p>
          </div>
          <div className="flex items-center justify-between py-4">
            <p className="font-medium text-sm">Dokument.pdf</p>
            <p className="font-medium text-xs">PREUZMI</p>
          </div>
          <div className="flex items-center justify-between py-4">
            <p className="font-medium text-sm">Dokument.pdf</p>
            <p className="font-medium text-xs">PREUZMI</p>
          </div>
        </div>
      )}
    </article>
  );
};
export default SingleDropDown;

// <article className={`${showAnswer && "border-t border-gray-400 p-4 lg:p-6"}`}>
//   {showAnswer && <p>this is the answer</p>}
// </article>;
