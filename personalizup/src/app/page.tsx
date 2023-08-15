import Banners from "./components/banners";
import Header from "./components/header";
import AboveBanners from "./components/abovebanners";
import Products from "./components/Products";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="content">
        <Banners/>
        <AboveBanners/>
        <Products/>
      </div>
    </div>
  )
}
