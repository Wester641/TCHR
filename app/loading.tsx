export default function Loading() {
  return (
    <div className="flex items-center animate-pulse justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-roboto-slab)] bg-gradient-to-l from-gray-200 to-slate-200">
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-l transition-all duration-300 from-gray-200 to-slate-200">
        <div className="animate-spin w-16 h-16 border-4 border-[#38495c] border-t-transparent border-solid rounded-full" />
      </div>
    </div>
  );
}
