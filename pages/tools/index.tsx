import Card from '@components/Card'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Index = () => {
  return (
    <>
      <NextSeo
        title="Free AI tools for Creators: Boost Your Social Presence"
        description="AI-powered tools for creators work smarter and faster. Unlock your creative potential today with PixiBoom's AI Tools"
      />
      <div className="space-y-2 pt-2 md:pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Free Tools <small className='text-blue-700'>for Creators</small>
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          List of free AI-powered tools for creators, work smarter and faster. Unlock your creative potential and boost your social presense with our on click social media AI tools.
        </p>
      </div>
      <section>
        <h2 className='text-2xl font-extrabold leading-7 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-8 md:text-4xl md:leading-12'>Bio Generators</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 py-6 gap-4">
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

          <li className="border-2 border-dashed dark:border-gray-700 flex focus:text-blue-600 items-center justify-center px-4 py-6 rounded-xl text-left">
            <Link className="" href="/tools/bio-generator">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl text-gray-700 dark:text-gray-400 transition-all duration-300 ease-in-out hover:text-blue-600 hover:dark:text-blue-600">More tools →</h3>
              </div>
            </Link>
          </li>

        </ul>
      </section>
    </>
  )
}

export default Index