import React, { useState } from 'react'
import { ClipboardIcon as ClipboardIconFilled } from '@heroicons/react/24/solid'
import { ClipboardIcon } from '@heroicons/react/24/outline/'
import SocialShare from '@components/SocialShare';

type Bio = {
    text: string;
}

const BioCard = ({ text }: Bio) => {
    const origin = typeof window !== 'undefined'
        && window.location.origin
        ? window.location.origin
        : '';
    const [isCopied, setCopied] = useState(false)
    const shareText = `${text}\n Created with: ${origin}`

    const copyToClipboard = async (str: string) => {
        const copyableStr = `${str.trim()}\n Created with: ${origin}`;
        if ('clipboard' in navigator) {
            await navigator.clipboard
                .writeText(copyableStr)
                .then(() => setCopied(true))
                .catch((error) => console.log(error))
                .finally(() => {
                    setTimeout(() => {
                        setCopied(false);
                    }, 5000);
                })
        } else {
            setTimeout(() => {
                setCopied(false);
            }, 3000);
            return document.execCommand('copy', true, copyableStr);
        }
    }
    return (
        <div className="select-none border dark:border-gray-700 px-4 py-5 text-lg rounded-xl hover:bg-blue-100/10 transition-all duration-150 ease-in-out">
            <div className="flex items-center gap-2 flex-col sm:flex-row">
                <p className="text flex-1" dangerouslySetInnerHTML={{ __html: text }}></p>
                <div className="flex flex-row items-center w-full md:w-auto">
                    <button type="button"
                        onClick={() => copyToClipboard(text)}
                        className="justify-center text-white bg-blue-700
                                  hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto
                                  text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-150 ease-in-out">
                        {isCopied ?
                            <ClipboardIconFilled className="h-5 w-5" /> :
                            <ClipboardIcon className="h-5 w-5" />}
                        <span className="pl-2">{isCopied ? "Copied!" : "Copy"}</span>
                    </button>
                    <SocialShare text={shareText} />
                </div>
            </div>
        </div>
    )
}

export default BioCard
