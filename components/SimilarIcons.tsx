import { getIcons } from "@/app/services/getIcons";
import Icon from "./Icons/Icon";

type Icon = {
  name: string;
  url: string;
  category: string;
};

type SimilarIconsProps = {
  currentIconName: string;
};

const SimilarIcons = async ({ currentIconName }: SimilarIconsProps) => {
  const similarIconNames: string[] = [];
  for (let i = 1; i <= 2; i++) {
    const similarIconName = currentIconName.replace(".svg", `-${i}.svg`);
    similarIconNames.push(similarIconName);
  }

  const similarIcons = await getSimilarIcons(similarIconNames);
  return (
    <div className="flex flex-col items-center gap-4 mt-12">
      <h2 className="mb-4 text-2xl font-bold">Similar Icons</h2>
      <div className="flex flex-wrap items-center justify-center w-full max-w-screen-xl gap-4 mx-auto">
        {similarIcons.map((icon: Icon) => (
          <>
            <Icon
              category={icon.category}
              icon={icon}
              key={icon.url}
            />
          </>
        ))}
      </div>
    </div>
  );
};

const getSimilarIcons = async (similarIconNames: string[]): Promise<Icon[]> => {
  const allIcons: Icon[] = [];

  const categories = ["outline", "solid", "brand", "social"];

  for (const category of categories) {
    const categoryIcons = await getIcons(category);
    const similarIcons = categoryIcons.filter((icon) =>
      similarIconNames.some((similarIconName) =>
        icon.name.startsWith(similarIconName.slice(0, 3))
      )
    );
    allIcons.push(...similarIcons);
  }

  return allIcons;
};

export default SimilarIcons;
