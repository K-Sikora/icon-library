import { getIcons } from "@/app/services/getIcons";
import IconContainer from "@/components/Icons/IconContainer";
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
    <main className="flex flex-col max-w-screen-xl gap-6 px-4 py-24 mx-auto md:px-8">
      <h5 className="font-semibold">
        Browse {icons.length} {category} icons
      </h5>
      <IconContainer
        category={category}
        icons={icons}
      ></IconContainer>
    </main>
  );
};

export default IconsPage;
