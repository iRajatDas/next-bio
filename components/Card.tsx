import Link from "next/link";
import React from "react";

type TCard = {
  toolPath: string;
  toolName: string;
  tagline?: string;
  icon: JSX.Element;
};

const Card = ({ toolPath, toolName, tagline, icon }: TCard) => {
  return (
    <li className="px-4 py-6 focus:text-blue-600
    overflow-hidden rounded-xl border border-gray-200 border-opacity-60 dark:border-gray-700">
      <Link href={toolPath} className="">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">{toolName} &rarr;</h3>
          <span className="h-10 w-10 grid place-items-center">
            {icon}
          </span>
        </div>
        <p className="mt-4 text-lg dark:text-gray-400">
          {tagline
            ? tagline
            : `Instantly generater catchy profile bio with our AI bio for ${toolName.split(" ")[0]
            }`}
        </p>
      </Link>
    </li>
  );
};

export default Card;
