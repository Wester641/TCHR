import Image from "next/image";
import TeacherPhoto from "../../public/images/teach.png";

export default function AboutTeacher() {
  return (
    <div className="p-4 flex flex-col items-center mx-auto text-center w-full bg-[#E4E6E7]">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">English Teacher</h1>

      <div className="p-6 rounded-xl shadow-md w-full max-w-sm mb-8 bg-white">
        <Image
          src={TeacherPhoto}
          alt="English Teacher"
          width={200}
          height={150}
          layout="intrinsic"
          className="rounded-full mx-auto bg-white shadow-md"
        />


        

        <h2 className="text-2xl font-semibold text-blue-800 mt-4">
          Beginner Level English Teacher
        </h2>
        <p className="text-gray-600 mt-2">English Lessons</p>
      </div>

      <div className="p-6 rounded-xl shadow-md w-full max-w-md mb-8 bg-white">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Services</h3>
        <ul className="text-gray-700 space-y-2">
          <li>📚 Beginner English Lessons</li>
          <li>📝 Basic vocabulary and grammar</li>
          <li>📆 One-on-one lessons</li>
        </ul>
      </div>

      <div className="p-6 rounded-xl shadow-md w-full max-w-md bg-white">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Testimonials</h3>
        <p className="text-gray-700 italic">
          One of the best teachers for beginners!
        </p>
        <p className="text-gray-700 mt-2">
          Highly recommended for anyone starting English.
        </p>
      </div>
    </div>
  );
}
