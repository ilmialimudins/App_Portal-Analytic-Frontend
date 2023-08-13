export default function Breadcrumb(): JSX.Element {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li>
          <div className="flex items-center">
            <a
              href="#"
              className="ml-1 text-sm font-medium text-blue-600 hover:text-blue-600"
            >
              ESS
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="mx-1 h-3 w-3 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ml-2">
              Prediction Dashboard
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
