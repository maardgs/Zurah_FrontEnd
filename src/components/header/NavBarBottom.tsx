import { CoffeeBean, Cow } from "@phosphor-icons/react";
import { Carrot, Leaf, Tag } from "lucide-react";
import { Link } from "react-router-dom";

export const NavBarBottom = () => {
  return (
    <section className="hidden items-center justify-center bg-[#fffbf7] border-b-[0.2px] border-[#c59e82a9] mb-5 md:flex">
      <div className="w-full px-4">
        <nav>
          <ul className="flex flex-wrap justify-center gap-4 md:gap-16">
            <Link to={"/products-cat/56"}>
              <li className="flex justify-center gap-1 items-center hover:border-b-[1px] hover:border-olive cursor-pointer py-2">
                <Tag size={20} className="font-[21px] text-[#843C0A]" />
                <p className="font-[21px] text-[#843C0A]">Ofertas</p>
              </li>
            </Link>
            <Link to={"/products-cat/58"}>
              <li className="flex justify-center gap-1 items-center hover:border-b-[1px] hover:border-olive cursor-pointer py-2">
                <Carrot size={20} className="font-[21px] text-[#843C0A]" />
                <p className="font-[21px] text-[#843C0A] whitespace-nowrap">
                  Hortifruti
                </p>
              </li>
            </Link>
            <Link to={"/products-cat/55"}>
              <li className="flex justify-center gap-1 items-center hover:border-b-[1px] hover:border-olive cursor-pointer py-2">
                <CoffeeBean size={20} className="font-[21px] text-[#843C0A]" />
                <p className="font-[21px] text-[#843C0A]">Cereais</p>
              </li>
            </Link>
            <Link to={"/products-cat/59"}>
              <li className="flex justify-center gap-1 items-center hover:border-b-[1px] hover:border-olive cursor-pointer py-2">
                <Cow size={20} className="font-[21px] text-[#843C0A]" />
                <p className="font-[21px] text-[#843C0A] whitespace-nowrap">
                  Laticínios
                </p>
              </li>
            </Link>
            <Link to={"/products-cat/57"}>
              <li className="flex justify-center gap-1 items-center hover:border-b-[1px] hover:border-olive cursor-pointer py-2">
                <Leaf size={20} className="font-[21px] text-[#843C0A]" />
                <p className="font-[21px] text-[#843C0A]">Orgânicos</p>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </section>
  );
};