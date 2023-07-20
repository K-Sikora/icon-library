import {
  AiOutlineGoogle,
  AiOutlineTwitter,
  AiOutlineUser,
} from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
export const categories = [
  {
    name: "brand",
    icon: (
      <AiOutlineGoogle
        className="duration-300 group-hover:text-black/60"
        size={24}
      />
    ),
  },
  {
    name: "social",

    icon: (
      <AiOutlineTwitter
        className="duration-300 group-hover:text-black/60"
        size={24}
      />
    ),
  },
  {
    name: "solid",
    icon: (
      <BiSolidUser
        className="duration-300 group-hover:text-black/60"
        size={24}
      />
    ),
  },
  {
    name: "outline",
    icon: (
      <AiOutlineUser
        className="duration-300 group-hover:text-black/60"
        size={24}
      />
    ),
  },
];
