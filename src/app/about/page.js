import Image from "next/image";

export default function About(){
    return(
        <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
            <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us </h1>

            <div className="flex flex-col lg:flex-row items-center gap-5">
                <div className="w-full lg:m-2/4">
                    <Image src="/coffee7.jpg" alt="img" width={300} height={100} className="w-full h-96 rounded-lg"/>
                </div>
<div className="w-full lg:w-2/4 p-4 space-y-3">
    <h2 className="font-semibold text-3xl">What Makes Our Coffee Special?</h2>
    <p>Build A Coffee Website Using React JS And Tailwind CSS
React Responsive Coffee Website Tutorial Using ReactJs , Vite
React js Projects for Beginners.
</p>
    <p>Build A Coffee Website Using React JS And Tailwind CSS
React Responsive Coffee Website Tutorial Using ReactJs , Vite
React js Projects for Beginners.
</p>

<button className="px-6 py-1 border-white bg-orange-200 hover:bg-orange-400 transition-all rounded-full">Learn More</button>
</div>
            </div>
        </div>
    )
}