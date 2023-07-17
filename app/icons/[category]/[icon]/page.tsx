import { getIconByName } from "@/app/services/getIconByName";
import { getIcons } from "@/app/services/getIcons";
import CopyUrlButton from "@/components/CopyUrlButton";
import DownloadButton from "@/components/DownloadButton";
import GoBack from "@/components/GoBack";
import { categories } from "@/app/constants";
import { type Icon } from "@/app/types/IconType";
export const dynamicParams = false;
export async function generateStaticParams() {
  const allIcons: Icon[] = [];
  await Promise.all(
    categories.map(async (category) => {
      const icons = await getIcons(category.name);
      icons.forEach((icon) => {
        allIcons.push(icon);
      });
    })
  );

  return allIcons.map((icon) => ({ icon: icon.name, category: icon.category }));
}
type Props = {
  params: {
    icon: string;
    category: string;
  };
};
export async function generateMetadata(props: Props) {
  const icon: Icon = await getIconByName(
    props.params.category,
    props.params.icon
  );
  if (icon) {
    return {
      title: icon.name,
    };
  }
}

const IconPage = async ({
  params,
}: {
  params: { icon: string; category: string };
}) => {
  const icon = await getIconByName(params.category, params.icon);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen gap-12 px-4 py-24 -mt-20 md:px-8">
      <GoBack />
      <div
        key={icon.name}
        className="flex flex-col items-center justify-center gap-2 text-white duration-300 border-2 rounded-md shadow-md shadow-sky-400/20 bg-sky-600 hover:bg-sky-600/50 h-36 w-36"
      >
        <img
          alt={`${icon.name} icon`}
          className="w-2/3"
          src={icon.url}
        />
      </div>
      <h3 className="w-full h-6 px-3 text-sm font-medium text-center text-white">
        {icon.name}
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <CopyUrlButton
          url={icon.url}
          name={icon.name}
        />
        <DownloadButton icon={icon} />
      </div>
    </div>
  );
};

export default IconPage;
