import { Link } from "react-router-dom";
import CarroselProduct from "../../components/Carrosel/CarroselProduct";
import ListCategory from "../../components/Categories/ListCategory/ListCategory";
import CategoryConsumer from "../../components/categoryConsumer/CategoryConsumer";


import Rolagem from "../../components/Slider/Rolagem";
import ListaProductHome from "@/components/Products/ListProduct/ListaProductHome";

function Home() {
  return (
    <>

      <div className="min-h-screen bg-[#FFFBF7] flex flex-col items-center">
        <main className="flex-grow w-full p-0">
          <section id="home" className="mb-12">
            <Rolagem />
          </section>
          <div className="flex-grow w-full px-4 md:px-14 flex flex-col items-center pb-6">
            <CategoryConsumer />

    
    <div className="min-h-screen bg-[#FFFBF7] flex flex-col items-center">
      <main className="flex-grow w-full p-0">
        <section id="home" className="mb-12">
          <Rolagem />
        </section>
        <div className="flex-grow w-full p-14 flex flex-col items-center pb-6 space-y-10">


            <ListaProductHome />


            <CarroselProduct />
          </div>
        </main>
        <ListCategory />
      </div>

          <CarroselProduct />
        </div>
      </main>
    </div>

    </>
  );
}

export default Home;
