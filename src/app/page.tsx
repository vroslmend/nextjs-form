import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="bg-cover flex flex-col justify-center items-center w-1/2 min-h-screen">
        <div className="rounded-3xl p-2 bg-gradient-to-br from-neutral-900 to-black/90">
          <div className="bg-transparent p-6 rounded-[calc(1.5rem-1px)]">
            <h1 className="leading-snug text-8xl font-extrabold bg-gradient-to-r from-rose-200 via-pink-400 to-sky-300 text-transparent bg-clip-text">Printify.</h1>
            <h2 className="text-3xl font-light text-transparent bg-gradient-to-br from-neutral-50 to-neutral-500 bg-clip-text">Best <span className="bg-gradient-to-l from-rose-200 via-pink-400 to-sky-300 bg-clip-text">Prints</span> Around</h2>
          </div>
        </div>
      </div>
      <div className="bg-cover flex flex-col justify-center items-center w-1/2 min-h-screen bg-[url('https://cdn.leonardo.ai/users/13ae5bda-727f-40cc-8ecc-9ea3f021a830/generations/8be1e685-6e90-493a-bbcf-7350afd2c781/Default_A_minimalist_overhead_shot_of_two_meticulously_chosen_0.jpg')]">
        
      </div>
    </main>
  );
}
