import About from "./about/page";
import Footer from "./footer/page";
import HomeMain from "./homemain/page";
import Menu from "./menu/page";

import Product from "./product/page";
import Reviews from "./reviews/page";


export default function Home() {
  return (
   <main>
  
   <HomeMain />
   <Menu />
   <About />
   <Product />
   <Reviews />
   <Footer />
   </main>
  )
}
