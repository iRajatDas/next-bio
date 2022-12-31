import React from 'react'

const BioCardSkeleton = () => {
    return (
        <div role="status" className="animate-pulse border dark:border-gray-700 md:px-4 md:py-6 rounded-xl pointer-events-none">
            <div className="flex flex-row items-center gap-4">
                <div className="left flex-1 justify-start items-center">
                    <div className="h-2 md:h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 md:h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <div className="border dark:border-gray-700 rounded-xl min-h-[32px] min-w-[48px] md:min-w-[80px] md:min-h-[48px]"></div>
                    <div className="border dark:border-gray-700 rounded-xl min-h-[32px] min-w-[32px] md:min-w-[48px] md:min-h-[48px]"></div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default BioCardSkeleton
