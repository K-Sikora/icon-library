import { getFileByName } from "@/app/services/getIconByName";
import { Icons, getIcons } from "@/app/services/getIcons";
import CopyUrlButton from "@/components/CopyUrlButton";
import DownloadButton from "@/components/DownloadButton";
import React from "react";

const categories = ["solid", "brand", "outline", "social"];
export const dynamicParams = false;
export async function generateStaticParams() {
  const allIcons: Icons[] = [];
  await Promise.all(
    categories.map(async (category) => {
      const icons = await getIcons(category);
      console.log(icons);
      icons.forEach((icon) => {
        allIcons.push(icon);
      });
    })
  );
  console.log(allIcons);
  allIcons.forEach((icon) =>
    console.log({ icon: icon.name, url: icon.url, category: icon.category })
  );
  return allIcons.map((icon) => ({ icon: icon.name, category: icon.category }));
}

const IconPage = async ({
  params,
}: {
  params: { icon: string; category: string };
}) => {
  const icon = await getFileByName(params.category, params.icon);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-12 -mt-20">
      <div
        key={icon.name}
        className="flex flex-col items-center justify-center gap-2 duration-300 bg-gray-100 border-2 rounded-md shadow-md hover:border-indigo-800 hover:bg-gray-200 h-36 w-36"
      >
        <img
          className="w-1/3 h-1/3"
          src={icon.url}
        />
        <h3 className="w-full h-6 px-3 text-sm font-medium text-center truncate">
          {icon.name}
        </h3>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <DownloadButton icon={icon} />
        <CopyUrlButton
          url={icon.url}
          name={icon.name}
        />
      </div>
    </div>
  );
};

export default IconPage;
