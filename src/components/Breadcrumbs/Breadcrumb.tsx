import Link from "next/link";

interface BreadcrumbProps {
  pageName: string;
}

const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col justify-end gap-4 sm:flex-row sm:items-center ">
      <nav>
        <ol className="flex items-center gap-2">
        <li className="font-medium text-primary">{pageName} /</li>
          <li>
            <Link className="font-medium" href="/">
              لوحة التحكم 
            </Link>
          </li>
        </ol>
      </nav> 

      <h2 className="text-[26px] font-bold leading-[30px] text-dark dark:text-white">
        {pageName}
      </h2>

      
    </div>
  );
};

export default Breadcrumb;
