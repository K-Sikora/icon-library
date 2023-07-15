import { getIcons } from "@/app/services/getIcons";
import IconContainer from "@/components/Icons/IconContainer";
import Image from "next/image";
type Props = {
  params: {
    category: string;
  };
};
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { category: "outline" },
    { category: "brand" },
    { category: "social" },
    { category: "solid" },
  ];
}

const IconsPage = async (props: Props) => {
  const { category } = props.params;

  const icons = await getIcons(category);

  return (
    <main className="gap-6 pb-24">
      <div className="relative w-full h-72">
        <h2 className="absolute z-20 p-4 text-2xl font-semibold text-white capitalize md:text-4xl md:px-24">
          {category} icons
        </h2>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            alt="category background"
            fill
            className="z-0 object-cover object-right-top w-full h-full"
            src={`/category/${category}.svg`}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        </div>
      </div>
      <div className="flex flex-col gap-6 px-4 pt-12 md:px-24">
        <h5 className="font-semibold text-white">
          Browse {icons.length} {category} icons
        </h5>
        <IconContainer
          category={category}
          icons={icons}
        ></IconContainer>
      </div>
    </main>
  );
};

export default IconsPage;
