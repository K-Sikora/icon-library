"use client";

import { Button } from "./ui/button";
import { FaCloudDownloadAlt } from "react-icons/fa";
type Props = {
  icon: {
    url: string;
    name: string;
  };
};

const DownloadButton = (props: Props) => {
  const handleDownload = () => {
    const svgUrl = props.icon.url;

    fetch(svgUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const svgDataUrl = reader.result;
          if (svgDataUrl !== null && typeof svgDataUrl === "string") {
            const link = document.createElement("a");
            link.href = svgDataUrl;
            link.download = props.icon.name;
            link.click();
          } else {
            console.error("Error occurred while reading SVG data");
          }
        };
        reader.readAsDataURL(blob);
      })
      .catch((error) => {
        console.error("Error occurred while downloading SVG", error);
      });
  };
  return (
    <Button
      variant="default"
      className="flex items-center justify-center gap-1 border rounded-md h-9"
      onClick={handleDownload}
    >
      Download
      <FaCloudDownloadAlt size={18} />
    </Button>
  );
};

export default DownloadButton;
