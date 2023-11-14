import Image from "next/image";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
export default function ReviewCard(props){
    return(
        <div className="flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5">
            <div className="flex flex-row items-center lg:justify-start justify-center">
               <div className="w-1/4">
               <Image src={props.Image}  alt="img" width={100} height={100} className="rounded-full"/>
               </div>
            
           
            <div className="mx-3">
        <h2 className="font-semibold text-lg">{props.title}</h2>
        <div className="flex">
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarHalf className="text-brightColor" />
        </div>
        </div>

      <span className="ml-16"><FaQuoteRight className="text-backgroundColor" size={42}/></span>
            </div>
            <p>loren Build A Coffee Website Using React JS And Tailwind CSS
React Responsive Coffee Website Tutorial Using ReactJs , Vite
React js Projects for Beginners
Build A Mobile </p>
        </div>
    )
}