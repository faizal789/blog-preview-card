const Card = () => {
  return (
    <div className="relative flex flex-col gap-6 bg-white-neutral w-96 max-[400px]:w-80 p-5 rounded-xl group">
      <div className="w-full h-full bg-black-neutral absolute top-2 left-2 rounded-xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
      <img
        src="assets/images/illustration-article.svg"
        className="w-full rounded-xl"
        alt="card image"
      />
      <div className="flex flex-col gap-3 max-[400px]:gap-2">
        <p className="bg-yellow-primary rounded-md font-extrabold w-fit py-1 px-4 text-sm">
          Learning
        </p>
        <p className="text-black-neutral text-[15px]">Published 21 Dec 2023</p>
        <h1 className="font-extrabold text-2xl max-[400px]:text-xl hover:text-yellow-primary transition-colors duration-300 cursor-pointer">
          HTML & CSS foundations
        </h1>
        <p className="text-grey-neutral">
          These languages are the backbone of every website, defining structur,
          content, and presentation.
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <img src="assets/images/image-avatar.webp" className="w-9" alt="" />
        <span className="font-bold">Greg Hooper</span>
      </div>
    </div>
  );
};

export default Card;
