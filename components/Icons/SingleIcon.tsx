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
      className="flex flex-col p-1 items-center justify-center gap-2"
    >
      <img
        alt={icon.name}
        loading="lazy"
        className="w-full h-full bg-sky-600 p-2 rounded-md border-2 aspect-square"
        src={icon.url}
      />
      <h3 className="w-full h-7 px-1 text-xs font-medium text-center text-white truncate">
        {icon.name}
      </h3>
    </Link>
  );
};

export default SingleIcon;
