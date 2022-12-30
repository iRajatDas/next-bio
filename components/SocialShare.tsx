import React from 'react'
import Link from 'next/link'
import { ImWhatsapp } from 'react-icons/im'

type IShare = {
    text: string;
}

const SocialShare = ({ text }: IShare) => {
    return (
        <Link href={`https://api.whatsapp.com/send/?text=${encodeURIComponent(text)}`} target="_blank">
            <button type="button"
                title='Share to WhatsApp'
                className="justify-center text-white bg-green-700 flex-1
                                  hover:green-800 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg w-full sm:w-auto
                                  text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:green-700 dark:focus:rigreen-800 transition-all duration-150 ease-in-out">

                <ImWhatsapp className='h-5 w-5' aria-label='Share to WhatsApp' />
            </button>
        </Link>
    )
}

export default SocialShare
