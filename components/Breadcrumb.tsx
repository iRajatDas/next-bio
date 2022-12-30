import { Children, Fragment } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Breadcrumb = ({ children }: any) => {
    const childrenArray = Children.toArray(children);

    const childrenWtihSeperator = childrenArray.map((child, index) => {
        if (index !== childrenArray.length - 1) {
            return (
                <Fragment key={index}>
                    {child}
                    <ChevronRightIcon className="h-5 w-5"/>
                </Fragment>
            );
        }
        return child
    });

    return (
        <nav className="overflow-x-scroll md:overflow-x-hidden scrollbar-none">
            <ol className="flex items-center space-x-4">{childrenWtihSeperator}</ol>
        </nav>
    );
};

export default Breadcrumb;
