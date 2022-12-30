import Card from '@components/Card'
import { NextSeo } from 'next-seo'
import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Index = () => {
  return (
    <>
      <NextSeo
        title="AI Bio Generators - Free Bio Generator Tools For Instagram & more"
        description="Unlock the power of #AI with best social media bio generators! Get instant, creative social media bios guaranteed to make your personal brand stand out."
      />
      <div className="space-y-2 pt-2 md:pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Free <span className='text-blue-700'>AI Bio Generator</span> Tools
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Get your creative juices flowing with our list of AI tools to generate compelling bios for your social media profile!
        </p>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Perfect for those looking to make a killer first impression.
        </p>
      </div>
      <section>
        <h2 className='text-2xl font-extrabold leading-7 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-8 md:text-4xl md:leading-12'>Bio Generators</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-6 gap-4">
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
      </section>
    </>
  )
}

export default Index