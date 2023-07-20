import Link from "next/link";

type Props = {
  icon: {
    name: string;
    url: string;
  };
  category: string;
};

const SingleIcon = (props: Props) => {
  const { icon, category } = props;
  return (
    <Link
      href={`/icons/${category}/${icon.name}`}
      key={icon.name}
      className="flex flex-col items-center justify-center gap-2"
    >
      <img
        alt={icon.name}
        loading="lazy"
        className="w-full h-full p-2 border-2 rounded-md bg-primary aspect-square"
        src={icon.url}
      />
      <h3 className="w-full px-1 text-xs font-medium text-center truncate h-7">
        {icon.name}
      </h3>
    </Link>
  );
};

export default SingleIcon;
