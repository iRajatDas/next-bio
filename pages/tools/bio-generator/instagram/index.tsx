import React, { useRef, useState } from "react";
import BioCard from "@components/BioCard";
import { BioData } from "types";
import { isEmptyString, capitalizeFirstLetter, request } from "utils/Utils";
import { NextSeo } from "next-seo";
import Link from "next/link";


const profileTypeList = [
  { name: "profile", entity: "person" },
  { name: "business", entity: "business" },
];

const emotionList = [
  { name: "None" },
  { name: "informative" },
  { name: "fun" },
  { name: "angry" },
  { name: "happy" },
  { name: "funny" },
  { name: "hungry" },
  { name: "love" },
  { name: "loving" },
  { name: "convincing" },
  { name: "convince" },
  { name: "cool" },
  { name: "controversial" },
  { name: "serious" },
  { name: "sad" },
  { name: "cry" },
  { name: "curious" },
  { name: "cute" },
  { name: "ecstatic" },
];

const defaultFormData = {
  prompt: "",
  length: "short",
  tone: "",
  type: "",
  hashtags: "0",
  entity: "person",
};


const Index = () => {
  const promptRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState(defaultFormData)
  const { prompt, tone, entity } = formData;

  const [bioList, setBioList] = useState<BioData | null>(null)

  const onPromptInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value.length >= 0 ? setError(false) : setError(true)
    setFormData(prevData => ({
      ...prevData,
      [e.target.id]: e.target.value
    }))
  }

  const onProfileTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prevData => ({
      ...prevData,
      [e.target.id]: e.target.value
    }))
  }
  const onTextToneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prevData => ({
      ...prevData,
      [e.target.id]: e.target.value
    }))
  }

  const fetchBioData = async () => {
    setLoading(true)
    try {
      await request<BioData>('/api/bio', {
        "method": "POST",
        "body": JSON.stringify(formData),
        "headers": {
          "accept": "application/json",
          "Access-Control-Allow-Headers": "*",
        },
        'mode': 'cors',
      }).then(data => setBioList(data));

    }
    catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false)
    }
  }


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEmptyString((promptRef.current as HTMLInputElement).value)) {
      setError(true)
      return
    }
    if (formData.entity === "profile") formData.entity = 'person';

    fetchBioData()
  };

  return (
    <>
      <NextSeo
        title="Instagram Bio Generator"
        description="Adopt the perfect Instagram bio for your profile with this AI-powered Instagram bio generator! Enhance your presence on the platform today with a few simple clicks."
      />

      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Instagram Bio Generator
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            With just a few clicks, you'll create the perfect bio to make your profile stand out. Take control of your online presence with this easy-to-use instagram bio generator tool!
          </p>
        </div>

        {/* Creator */}
        <div className="">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="w-full">
              {/* Text BOX */}
              <input
                type="text"
                name="prompt"
                onChange={onPromptInputChange}
                id="prompt"
                ref={promptRef}
                value={prompt}
                placeholder="Write about your profile"
                className="block py-4 w-full rounded-md border-gray-200 dark:border-gray-700
                dark:bg-gray-700 dark:placeholder:text-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-xl"
              />
              {error ? <p id="standard_error_help" className="mt-2 text-lg text-red-600 dark:text-red-400"><span className="font-medium">Oh, snapp!</span> Please type the field</p> : ""}
              {/* OPTIONS */}
              <div className="py-6 space-y-6 md:space-y-5 divide-y divide-gray-200 dark:divide-gray-700">
                <div className="options grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                  <div className="w-full col-span-1">
                    <label
                      htmlFor="entity"
                      className="block mb-2 text-sm md:text-base font-medium text-gray-700 dark:text-gray-200"
                    >
                      Select profile type
                    </label>
                    <select
                      value={entity}
                      onChange={onProfileTypeChange}
                      id="entity"
                      name="entity"
                      className="bg-gray-50 border border-gray-300 text-gray-900 md:text-lg rounded-lg focus:ring-blue-500
                      focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {profileTypeList.map((type) => (
                        <option value={type.name} id={type.entity} key={type.entity}>
                          {capitalizeFirstLetter(type.name)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full col-span-1">
                    <label
                      htmlFor="tone"
                      className="block mb-2 text-sm md:text-base font-medium text-gray-700 dark:text-gray-200"
                    >
                      Select text tone
                    </label>
                    <select
                      id="tone"
                      value={tone}
                      name="tone"
                      onChange={onTextToneChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 md:text-lg rounded-lg focus:ring-blue-500
                      focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {emotionList.map((emotion, index) => (
                        <option value={emotion.name} key={index}>
                          {capitalizeFirstLetter(emotion.name)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none
                  focus:ring-2 focus:ring-blue-300 font-medium rounded-full w-full col-span-2
                  md:text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                  transition-all duration-150 ease-in-out"
                  >
                    {loading ? <span>
                      <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                      </svg>
                      Loading...
                    </span> : "Generate Instagram Bio"
                    }
                  </button>
                </div>
                <div className="generation__bio--list md:col-span-4 space-y-4 py-6">
                  <div className="result space-y-4">
                    {bioList?.data.map((item, index) => <BioCard key={index} text={item.text} />)}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
        <p className="lead">#NoMoreStruggle - Tired of overthinking your Instagram profile or ig profile? Let our AI <Link href="/tools/bio-generator/instagram">Instagram Bio Generator</Link> do the heavy lifting with creative and cool bio options with relavant hashtags.</p>
        <p>You don't need to spend your time manually writing a bio for your Instagram space or profile any longer. Create a concise, eye-catching bio with our AI-powered bio generator tool for Instagram and make a great first impression.</p>
        <hr />
        <h2>What is a Instagram Bio</h2>
        <p>A Instagram bio: what are they? In Instagram , your bio is a brief description of yourself or your business located underneath your username.</p>
        <p>Instagram allows you to include a short description, contact information, emojis, and more in your profile or page bio.</p>
        <h3>Instagram Bio Checklist</h3>
        <p>Make sure your profile is totally on point! Follow this checklist to optimize your Instagram bio and enhance your online presence:</p>
        <ul>
          <li>Show your personality.</li>
          <li>Explain who you are and what you do.</li>
          <li>Target your niche audience with specific keywords.</li>
          <li>Share Your Contact Information.</li>
          <li>Add a Call to Action.</li>
        </ul>
        <p>Our tool uses a robust bio writing checklist for various social media platfrom to maximize visibility and make your profile stands out from the rest.</p>
        <h3>We still need to think about stacked headings though.</h3>
        <p>Phew, with any luck we have styled the headings above this text and they look pretty good.</p>
        <p>Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document.</p>
        <p>What I've written here is probably long enough, but adding this final sentence can't hurt.</p>
      </div>
      </div>
    </>
  );
};

export default Index;
