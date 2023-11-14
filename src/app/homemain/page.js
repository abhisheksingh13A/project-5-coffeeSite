import Image from "next/image";

export default function HomeMain(){
    return(
        <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]">
            <div className="w-full lg:w-2/4 space-y-4 mt-24 lg:mt-0">
                <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">Start Your Day With A Streaming Cup of Coffee</h1>
                <p>Boost your productivity and build your mood with a glass of coffee in the morning</p>

                <div className="flex flex-row gap-6">
                    <button  className="px-6 py-1 border-white bg-orange-200 hover:bg-orange-400 transition-all rounded-full">ADD TO CARD</button>
                    <button className="px-6 py-1 border-white bg-orange-200 hover:bg-orange-400 transition-all rounded-full">MORE MENU</button>
                </div>
            </div >
           
           <div className="relative">
           <Image src="/coffee.jpg" alt="coffee" width={400} height={400} className="rounded-full"/>
          
           <div className="absolute bg-white px-11 py-2 top-5 right-0 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)]">
            <h2 className="font-semibold">14k</h2>
           </div>
           <div className="absolute bg-white px-8 py-2 bottom-0 -left-10 rounded-full">
            <h2>Cappuccino</h2>
           </div>
           </div>
          


        </div>
    )
}