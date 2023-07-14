import { getIcons } from "@/app/services/getIcons";
import Icon from "./Icons/Icon";
import { categories } from "@/app/constants";

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
  if (similarIcons.length > 1) {
    return (
      <div className="flex flex-col items-center gap-4 mt-12">
        <h2 className="mb-4 text-3xl font-semibold text-white">
          Similar Icons
        </h2>
        <div className="grid w-full max-w-screen-xl grid-cols-3 gap-4 place-content-start sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 xl:mx-auto">
          {similarIcons.map(
            (similarIcon: Icon) =>
              currentIconName !== similarIcon.name && (
                <Icon
                  category={similarIcon.category}
                  icon={similarIcon}
                  key={similarIcon.url}
                />
              )
          )}
        </div>
      </div>
    );
  }
};

const getSimilarIcons = async (similarIconNames: string[]): Promise<Icon[]> => {
  const allIcons: Icon[] = [];

  for (const category of categories) {
    const categoryIcons = await getIcons(category.name);
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
