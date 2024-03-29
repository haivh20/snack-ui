import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import { Product } from "@/types";
import useCart from "@/hooks/store/useCart";
import IconButton from "../icon-button";
import Currency from "../currency";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={
            "https://web.hn.ss.bfcplatform.vn/mkmart/product/20233/4d10ffe865114126b1a40ad8ca0b0471-m.jpg"
          }
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.price}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              {data.quantity}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
