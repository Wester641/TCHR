import NavButton from "@/component/button/nav-button";
import InfoAboutMe from "@/component/info-about-me/InfoAboutMe";
import kids from "../../public/kids.jpg";

export default function About() {
  return (
    <div className="max-w-[375px] relative rounded mx-auto min-h-[100vh] bg-[#38495c] font-[family-name:var(--font-roboto-slab)]">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start py-3">
        <NavButton link="/" text="back" />
      </div>
      <div className="text-[#38495c]">
        <InfoAboutMe />
      </div>
      <div className="flex flex-row gap-8 row-start-2 items-center justify-around my-3">
        <div>
          <h1 className="text-3xl">About me</h1>
          <h4>English teacher</h4>
        </div>
        <div>
          <NavButton link="/practice" text="Practice" logo={false} />
        </div>
      </div>
      <div className="text-[#38495c] p-3">
        <InfoAboutMe images={kids} />
      </div>
    </div>
  );
}
