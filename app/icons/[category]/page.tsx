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
    <main className="py-24 flex flex-col gap-6">
      <h5 className="font-semibold">
        Browse through {icons.length} {category} icons
      </h5>
      <IconContainer icons={icons}></IconContainer>
    </main>
  );
};

export default IconsPage;
