'use client';
import Link from 'next/link';
import Image from 'next/image';
import TeacherPhoto from '../../public/images/teach.png';
import TeacherPhotoSmall from '../../public/images/teach2.png';
import Slider from '../../public/images/slider-circle-v-svgrepo-com.svg';
import Edit from '../../public/images/edit-square-svgrepo-com.svg';
import Earth from '../../public/images/earth-svgrepo-com.svg';
import Eye from '../../public/images/eye-slash-svgrepo-com.svg';
import { useState } from 'react';

export default function Teacher() {
  const [eyesIsOpen, setEyesIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [sliderIsOpen, setSliderIsOpen] = useState(false);
  const [earthIsOpen, setEarthIsOpen] = useState(false);

  return (
    <div className="">
      <main className="min-h-screen bg-[#f9f3e7] gap-5 flex flex-col items-start justify-center font-[family-name:var(--font-roboto-slab)]">
        <div className="px-6 rounded-xl w-full">
          <h1 className="text-[2.6rem] font-bold text-[#38495c] mb-4 text-center">
            English Teacher
          </h1>
          <div>
            <div className="flex justify-between">
              <button
                className="w-10 h-10"
                // className="flex z-50 flex-col justify-around relative py-2 bg-[#f9f3e7] items-center min-h-6 rounded-full px-2 min-w-[40px] shadow-lg hover:shadow-lg hover:opacity-90"
                onClick={() => setEyesIsOpen(!eyesIsOpen)}
              >
                <Image
                  src={Eye}
                  alt="English Teacher"
                  layout="intrinsic"
                  className="rounded-full border border-1 border-[#38495c] mx-auto  shadow-md"
                />
                {eyesIsOpen && (
                  <nav className="absolute  min-w-[10rem] shadow-lg  rounded-md min-h-[13rem] bg-[#435468] border-2 border-[#dcdcdc]">
                    <ul className="flex flex-col justify-start items-start p-2 gap-2">
                      <li className="hover:bg-[#435468bc] hover:shadow-lg hover:opacity-90">
                        Service
                      </li>
                      <li className="hover:bg-[#435468bc] hover:shadow-lg hover:opacity-90">
                        About me
                      </li>
                      <li className="hover:bg-[#435468bc] hover:shadow-lg hover:opacity-90">
                        Contacts
                      </li>
                    </ul>
                  </nav>
                )}
              </button>
              <button
                className="w-10 h-10"
                onClick={() => setEditIsOpen(!editIsOpen)}
              >
                <Image
                  src={Edit}
                  alt="English Teacher"
                  layout="intrinsic"
                  className="rounded-full mx-auto"
                />
                {editIsOpen && (
                  <nav className="absolute right-7 min-w-[10rem] shadow-lg  rounded-md min-h-[13rem] bg-[#435468] border-2 border-[#dcdcdc]">
                    <ul className="flex flex-col justify-start items-start p-2 gap-2">
                      <li className="hover:bg-[#435468bc] hover:shadow-lg hover:opacity-90">
                        first
                      </li>
                      <li className="hover:bg-[#435468bc] hover:shadow-lg hover:opacity-90">
                        second
                      </li>
                      <li className="hover:bg-[#435468bc] hover:shadow-lg hover:opacity-90">
                        thirth
                      </li>
                    </ul>
                  </nav>
                )}
              </button>
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
              <button
                className="w-10 h-10"
                onClick={() => setSliderIsOpen(!sliderIsOpen)}
              >
                <Image
                  src={Slider}
                  alt="English Teacher"
                  layout="intrinsic"
                  className="rounded-full border border-1 border-[#38495c] mx-auto  shadow-md"
                />
                {sliderIsOpen && (
                  <nav className="absolute  min-w-[10rem] shadow-lg  rounded-md min-h-[13rem] bg-[#435468] border-2 border-[#dcdcdc]">
                    <ul className="flex flex-col justify-start items-start p-2 gap-2">
                      <li className="hover:bg-[#435468bc] hover:shadow-lg hover:opacity-90">
                        page
                      </li>
                      <li className="hover:bg-[#435468bc] hover:shadow-lg hover:opacity-90">
                        section
                      </li>
                      <li className="hover:bg-[#435468bc] hover:shadow-lg hover:opacity-90">
                        nav
                      </li>
                    </ul>
                  </nav>
                )}
              </button>
              <button
                className="w-10 h-10"
                onClick={() => setEarthIsOpen(!earthIsOpen)}
              >
                <Image
                  src={Earth}
                  alt="English Teacher"
                  layout="intrinsic"
                  className="rounded-full border border-1 border-[#38495c] mx-auto  shadow-md"
                />
                {earthIsOpen && (
                  <nav className="absolute right-7 min-w-[10rem] shadow-lg  rounded-md min-h-[13rem] bg-[#435468] border-2 border-[#dcdcdc]">
                    <ul className="flex flex-col justify-start items-start p-2 gap-2">
                      <li className="hover:bg-[#435468bc] hover:shadow-lg hover:opacity-90">
                        earth
                      </li>
                      <li className="hover:bg-[#435468bc] hover:shadow-lg hover:opacity-90">
                        north
                      </li>
                      <li className="hover:bg-[#435468bc] hover:shadow-lg hover:opacity-90">
                        south
                      </li>
                    </ul>
                  </nav>
                )}
              </button>
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
