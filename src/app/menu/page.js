import { MenuCard } from "../elements/menucard/page";

export default function Menu(){
    return(
        <div className="min-h-screen flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
            <h1 className="font-semibold text-center text-4xl pt-24 mb-8">Our Menu</h1>

            <div className="flex flex-wrap pb-8 gap-8 justify-center">
                <MenuCard Image="/coffee.jpg" title="Espresso"/>
                <MenuCard Image="/coffee6.jpg" title="Cappuccino"/>
                <MenuCard Image="/coffee.jpg" title="Latte"/>
                <MenuCard Image="/coffee6.jpg" title="Macchiato"/>
                <MenuCard Image="/coffee.jpg" title="Doppio"/>
                <MenuCard Image="/coffee6.jpg" title="Americano"/>
            </div>
        </div>
    )
}