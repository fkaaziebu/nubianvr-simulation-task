"use client";
import { paginate } from "@/lib/action";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Prop = {
  maxPage: number;
};

const Pagination = ({ maxPage }: Prop) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") || "1";

  const handleTags = (filter?: string) => {
    router.push(`${pathName}?page=${filter}`);
  };

  const pages = paginate({
    current: Number(page),
    max: maxPage,
  });

  return (
    <div className="pagination-container">
      <div className="pagination-container_sm">
        <button
          type="button"
          className="pagination-left_sm"
          disabled={pages?.prev === null}
          onClick={() => handleTags(pages?.prev?.toString())}
        >
          Previous
        </button>
        <button
          type="button"
          className="pagination-right_sm"
          disabled={pages?.next === null}
          onClick={() => handleTags(pages?.next?.toString())}
        >
          Next
        </button>
      </div>
      <div className="pagination-container_lg">
        <div>
          <nav className="pagination-nav" aria-label="Pagination">
            <button
              type="button"
              disabled={pages?.prev === null}
              className="pagination-left"
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
                        ? "pagination-btn-active"
                        : "pagination-btn-inactive"
                    }
                    pagination-btn `}
                onClick={() => handleTags(val)}
              >
                {val}
              </button>
            ))}
            <button
              type="button"
              disabled={pages?.next === null}
              className="pagination-right"
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
