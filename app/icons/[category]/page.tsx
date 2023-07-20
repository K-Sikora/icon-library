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

export async function generateMetadata(props: Props) {
  const { category } = props.params;
  return {
    title: `just_icons - ${
      category.charAt(0).toUpperCase() + category.slice(1)
    }`,
  };
}

const IconsPage = async (props: Props) => {
  const { category } = props.params;

  const icons = await getIcons(category);

  return (
    <main className="gap-6 pb-24">
      <div className="relative w-full h-72">
        <h2 className="absolute z-20 p-4 text-2xl font-semibold text-black capitalize md:text-4xl xl:px-24">
          {category} icons
        </h2>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            alt="category background"
            fill
            className="z-0 object-cover object-center w-full h-full"
            src={`/category/${category}.svg`}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        </div>
      </div>
      <div className="flex flex-col gap-6 px-8 pt-12 xl:px-24">
        <h5 className="font-semibold">
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
