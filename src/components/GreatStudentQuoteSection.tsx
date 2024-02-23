const GreatStudentQuoteSection = () => {
  return (
    <div className="bg-yellowBook relative h-[385px] w-full">
      <img
        src="https://s3-alpha-sig.figma.com/img/f9f8/4931/baf6e7694b7ba53a3bd2f8361f8daca1?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K71MkE1kxGhVGHvoLddyUBLYznIhgF9Mg1CX~53r9BdyyQEuM5rvgLHv0yiDv6j8UFniEueS~vIIzSq46Vx9RaW9pUJbluShYaa12Y9NpJ3ubKMZtb7rdVAWBb5batHZY2T5~tXNBqOrtS4uNQvQ9YY4pIR7WmVfXIruLhFOgn-r3M7N0PFvoi1khehOEV5TURFj28vydyA9x3whNN2zTIT06nvkqCoLdD1jGof7CqcleajmyZuAWQGzoCGPLpVHXmPpo4CSu4o5Xzkd1KeWtlHBi9OphtR0GOaZrB6R94D9OBbi~xSum96shAOXNRvhAnsk7ZXM0kx1Yy1c43Tq9w__"
        alt=""
        className="h-[385px] w-full absolute top-0 opacity-10"
      />
      <div className="flex flex-col gap-4 items-center justify-center h-full">
        <div className="flex gap-1">
          <img src="default.svg" alt="" />
          <p className="text-crvena font-bold text-2xl">{`>5`}</p>
        </div>
        <p className="font-bold text-2xl text-crna">
          Ne mora svatko biti odličan učenik,
        </p>
        <p className="italic font-merriweather text-5xl text-crna">
          ali svatko može postati odličan čovjek
        </p>
      </div>
    </div>
  );
};
export default GreatStudentQuoteSection;
