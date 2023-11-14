import Image from "next/image";
import {BsStarFill, BsStarHalf} from "react-icons/bs"
export default function ProductCard(props){
    return(
        <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg">
<Image src={props.Image} alt="img" width={200} height={50} className="rounded-lg w-full h-80"/>
<div className="flex flex-col items-center mt-5 gap-3">
    <h2 className="font-semibold text-xl">{props.title}</h2>
    <div className="flex">
        <BsStarFill className="text-brightColor" />
        <BsStarFill className="text-brightColor" />
<BsStarFill className="text-brightColor" />
<BsStarFill className="text-brightColor" />
<BsStarHalf className="text-brightColor" />

    </div>
    <h3 className="font-semibold text-lg">$15.99</h3>
    <button className="px-6 py-1 border-white bg-orange-200 hover:bg-orange-400 transition-all rounded-full">ADD TO CARD</button>
</div>
        </div>
    )
}