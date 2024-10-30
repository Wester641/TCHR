import Link from 'next/link';
import Image from 'next/image';
import TeacherPhoto from '../../public/images/teach.png';
import TeacherPhotoSmall from '../../public/images/teach2.png';
import Slider from '../../public/images/slider-circle-v-svgrepo-com.svg';
import Edit from '../../public/images/edit-square-svgrepo-com.svg';
import Earth from '../../public/images/earth-svgrepo-com.svg';
import Eye from '../../public/images/eye-slash-svgrepo-com.svg';

export default function Teacher() {
  return (
    <div>
      <main className="min-h-screen gap-5 flex flex-col items-start justify-center font-[family-name:var(--font-roboto-slab)] bg-[#fdfdfd]">
        <div className="px-6 rounded-xl w-full">
          <h1 className="text-[2.6rem] font-bold text-[#38495c] mb-4 text-center">
            English Teacher
          </h1>
          <div>
            <div className="flex justify-between">
              <span className="w-10 h-10">
                <Image
                  src={Eye}
                  alt="English Teacher"
                  layout="intrinsic"
                  className="rounded-full border border-1 border-[#38495c] mx-auto  shadow-md"
                />
              </span>
              <span className="w-10 h-10">
                <Image
                  src={Edit}
                  alt="English Teacher"
                  layout="intrinsic"
                  className="rounded-full mx-auto"
                />
              </span>
            </div>
            <Image
              src={TeacherPhoto}
              width={300}
              height={150}
              alt="English Teacher"
              layout="intrinsic"
              className="rounded-full border border-1 border-[#38495c] mx-auto bg-[#3c5571] shadow-md"
            />
            <div className="flex justify-between">
              <span className="w-10 h-10">
                <Image
                  src={Slider}
                  alt="English Teacher"
                  layout="intrinsic"
                  className="rounded-full border border-1 border-[#38495c] mx-auto  shadow-md"
                />
              </span>
              <span className="w-10 h-10">
                <Image
                  src={Earth}
                  alt="English Teacher"
                  layout="intrinsic"
                  className="rounded-full border border-1 border-[#38495c] mx-auto  shadow-md"
                />
              </span>
            </div>
          </div>
          <div className="w-full ">
            <ul className="text-gray-700 text-center">
              <li className="text-4xl">Beginner Level</li>
              <li className="text-[2.6rem] ">English Teacher</li>
            </ul>
          </div>
          <div className="w-full">
            <ul className="text-gray-700 text-center">
              <li className="text-2xl">English Lesson</li>
              <li className="text-3xl">Beginner Lesson</li>
              <li className="text-[#38495c] text-xl ">eglish for kids</li>
            </ul>
          </div>
        </div>
        <div className="flex mx-auto gap-5">
          <div className="w-20 h-20 rounded-full border border-1 border-[#38495c] mx-auto bg-[#38495c] shadow-md overflow-hidden object-contain">
            <Image
              src={TeacherPhotoSmall}
              alt="English Teacher"
              layout="intrinsic"
            />
          </div>
          <div className="flex flex-col justify-center px-2 ">
            <span className="text-3xl text-[#38495c] border-t-2 border-[#38495c] pt-2">
              Testimonials
            </span>
            <span className=" text-[#38495c]">Beginner Lesson</span>
          </div>
        </div>

        <button className="bg-[#38495c] text-white px-4 rounded-2xl mx-auto my-3 w-52 hover:shadow-md hover:opacity-90">
          <Link href="/goverment" className="text-xl font-semibold">
            Welcome me
          </Link>
        </button>
      </main>
    </div>
  );
}
