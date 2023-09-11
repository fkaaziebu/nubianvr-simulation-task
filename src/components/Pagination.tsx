"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Prop = {
  count: number;
};

function paginate({ current, max }: { current: number; max: number }) {
  if (!current || !max) return null;

  let prev = current === 1 ? null : current - 1,
    next = current === max ? null : current + 1,
    items: any = [1];

  if (current === 1 && max === 1) return { current, prev, next, items };
  if (current > 4) items.push("...");

  let r = 2,
    r1 = current - r,
    r2 = current + r;

  for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i);

  if (r2 + 1 < max) items.push("...");
  if (r2 < max) items.push(max);

  return { current, prev, next, items };
}

const Pagination = ({ count }: Prop) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") || "1";

  const handleTags = (filter?: string) => {
    router.push(`${pathName}?page=${filter}`);
  };

  const pages = paginate({
    current: Number(page),
    max: count,
  });

  console.log(pages);

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          type="button"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => handleTags(pages?.prev?.toString())}
        >
          Previous
        </button>
        <button
          type="button"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => handleTags(pages?.next?.toString())}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              type="button"
              disabled={pages?.prev === null}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={() => handleTags(pages?.prev?.toString())}
            >
              <span className="sr-only">Previous</span>
              {/* <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> */}
              {`<`}
            </button>
            {pages?.items.map((val: any) => (
              <button
                type="button"
                disabled={val === "..."}
                aria-current="page"
                className={`
                    ${
                      pages.current === val
                        ? "bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    }
                    relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold `}
                onClick={() => handleTags(val)}
              >
                {val}
              </button>
            ))}
            <button
              type="button"
              disabled={pages?.next === null}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={() => handleTags(pages?.next?.toString())}
            >
              <span className="sr-only">Next</span>
              {/* <ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> */}
              {`>`}
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
