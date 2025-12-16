import NextImg from "@/assets/twitter-card.png";
import Image from "next/image";
const Imagepage = () => {
  return (
    <div className="text-4xl text-center">
      <h1 className="">This is images picture</h1>
      <img
        src="https://h8dxkfmaphn8o0p3.public.blob.vercel-storage.com/static/blog/next-16/twitter-card.png"
        alt="NextJs"
        width={500}
        height={500}
        className="mx-auto"
      />
      <h1>Image with nextJs image component</h1>
      <Image
        src="https://h8dxkfmaphn8o0p3.public.blob.vercel-storage.com/static/blog/next-16/twitter-card.png"
        alt="nextJs"
        width={500}
        height={500}
        className="mx-auto"
      ></Image>
      <h1>Image from local source</h1>
      <Image src={NextImg} alt="nextImg"></Image>
    </div>
  );
};

export default Imagepage;
