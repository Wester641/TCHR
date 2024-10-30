import AboutTeacher from '@/containers/TeacherProfile/AboutTeacher';
import TeacherProfile from '@/containers/TeacherProfile/TeacherProfile';
import Head from 'next/head';

export default function Teacher() {
  return (
    <div>
      <Head>
        <title>English Teacher Profile</title>
      </Head>
      <main className="min-h-screen flex flex-col items-start justify-center  bg-[#38495c] font-[family-name:var(--font-roboto-slab)]">
        <TeacherProfile />
        <AboutTeacher />

        
      </main>
    </div>
  );
}

// <div className="max-w-full relative rounded mx-auto min-h-[100vh] bg-[#38495c] font-[family-name:var(--font-roboto-slab)]">
