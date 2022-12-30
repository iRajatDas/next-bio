import Link from "next/link";

const BreadcrumbItem = ({ children, href, ...props }: any) => {
    return (
        <li {...props}>
            <Link href={href} passHref className="text-gray-700 dark:text-gray-300 whitespace-pre">
                <span>{children}</span>
            </Link>
        </li>
    );
};

export default BreadcrumbItem;
