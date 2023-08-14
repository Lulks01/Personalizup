import Banners from "./components/banners";
import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="content">
        <Banners/>
      </div>
    </div>
  )
}
