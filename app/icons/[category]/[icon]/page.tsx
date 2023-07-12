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
    <div className="flex flex-col gap-12 min-h-screen items-center justify-center -mt-20">
      <div
        key={icon.name}
        className="bg-gray-100 border-2 hover:border-indigo-800 duration-300 hover:bg-gray-200 shadow-md flex rounded-md flex-col items-center justify-center h-36 w-36 gap-2"
      >
        <img
          className="w-1/3 h-1/3"
          src={icon.url}
        />
        <h3 className="text-sm truncate w-full px-3 h-6 font-medium text-center">
          {icon.name}
        </h3>
      </div>
      <div className="flex gap-2 flex-wrap items-center justify-center">
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
