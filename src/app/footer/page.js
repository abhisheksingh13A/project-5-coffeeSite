import Link from "next/link";

export default function Footer(){
    return(
        <div className="bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
                <div className="w-full md:w-1/4">
                    <h1 className="font-semibold text-xl pb-4">CafePulse</h1>
                    <p className="text-sm">React Responsive Coffee Website Tutorial Using ReactJs , Vite
React js Projects for Beginners
Build A Mobile .</p>
                </div>
                <div >
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
                    <nav className="flex flex-col gap-2">
                        <Link href="/" className="hover:text-backgroundColor transition-all cursor-pointer">Menu</Link>
                        <Link href="/" className="hover:text-backgroundColor transition-all cursor-pointer">About Us</Link>
                        <Link href="/" className="hover:text-backgroundColor transition-all cursor-pointer">Menu</Link>
                        <Link href="/" className="hover:text-backgroundColor transition-all cursor-pointer">Menu</Link>
                    </nav>
                </div>
                <div >
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
                    <nav className="flex flex-col gap-2">
                        <Link href="/" className="hover:text-backgroundColor transition-all cursor-pointer">Cappuccino</Link>
                        <Link href="/" className="hover:text-backgroundColor transition-all cursor-pointer">Latte</Link>
                        <Link href="/" className="hover:text-backgroundColor transition-all cursor-pointer">Americano</Link>
                    </nav>
                </div>
                <div >
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contect Us</h1>
                    <nav className="flex flex-col gap-2">
                        <Link href="/" className="hover:text-backgroundColor transition-all cursor-pointer">CafePulse@gmail.com</Link>
                        <Link href="/" className="hover:text-backgroundColor transition-all cursor-pointer">+84 746 7392 3874</Link>
                        <Link href="/" className="hover:text-backgroundColor transition-all cursor-pointer">Social Media</Link>
                    </nav>
                </div>

            </div>
            <div>
    <p className="text-center py-4">
        @copyright developed by 
        <span className="text-backgroundColor">Abhishek</span>
         | All right reserved
    </p>
</div>
        </div>
    )
}