import Image, { StaticImageData } from "next/image";

interface InfoAboutMeProps {
  images?: string | StaticImageData;
}

function InfoAboutMe({ images = "/images/teach.png" }: InfoAboutMeProps) {
  return (
    <div className="flex flex-col relative p-[10px]  font-[family-name:var(--font-roboto-slab)] bg-[#E4E6E7] shadow-xl min-h-60 ">
      <div className="">
        <div className="text-3xl ">English teacher</div>
        <div className="">English for kids</div>
      </div>

      <div>
        <Image
          className="mx-auto"
          src={images}
          alt="Vercel logomark"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default InfoAboutMe;
