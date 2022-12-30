import type { NextPage } from "next";
import Card from "@components/Card";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="PixiBoom - AI tool for Creators"
        description="AI-powered tools for creators work smarter and faster. Unlock your creative potential today with PixiBoom's AI Tools"
      />

      <div className="">
        <div className="space-y-2 pt-2 md:pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Free Tools
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            List of free AI profile bio generator for all social media
            platforms.
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 py-0 gap-4">
          <Card
            toolPath="/tools/bio-generator/twitter"
            toolName="Twitter Bio"
            icon={<BsTwitter className="text-sky-500" fontSize={24} />}
          />
          <Card
            toolPath="/tools/bio-generator/instagram"
            toolName="Instagram Bio"
            icon={<BsInstagram className="text-pink-600" fontSize={24} />}
          />
          <Card
            toolPath="/tools/bio-generator/facebook"
            toolName="Facebook Bio"
            icon={<BsFacebook className="text-blue-600" fontSize={24} />}
          />
        </ul>
      </div>
    </>
  );
};

export default Home;
