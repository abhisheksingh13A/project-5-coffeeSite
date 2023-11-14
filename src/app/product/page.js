import ProductCard from "../elements/productcard/page";

export default function Product(){
    return(
        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 py-4 bg-backgroundColor">
            <h1 className="font-semibold text-center text-4xl lg:mt-24 mt-16 mb-8">Our Products</h1>
          <div className="flex flex-col lg:flex-row gap-12 justify-center">
<ProductCard Image="/coffee4.jpg" title="Nespresso" />
<ProductCard Image="/coffee5.jpg" title="Nespresso" />
<ProductCard Image="/coffee4.jpg" title="Nespresso" />

          </div>
        </div>
    )
}