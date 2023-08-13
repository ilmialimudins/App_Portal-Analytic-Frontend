import { useCallback, useEffect, useState } from "react";

export default function SliderComponent(props: any): JSX.Element {
  const [isdisableArrowLeft, setIsDisableArrowLeft] = useState(true);
  const [isdisableArrowRight, setIsDisableArrowRight] = useState(true);
  
  let element: any;
  useEffect(() => {
    element = document.getElementById("slider-wrap");
    if (element?.scrollWidth && element?.scrollWidth > window.innerWidth) {
      setIsDisableArrowLeft(false);
      setIsDisableArrowRight(false);
      if (element?.scrollLeft === 0) setIsDisableArrowLeft(true);
    }
    const handleScroll = () => {
      if (element?.scrollLeft === 0) return setIsDisableArrowLeft(true);
      if (
        element &&
        element?.scrollLeft === element?.scrollWidth - element?.clientWidth
      )
        return setIsDisableArrowRight(true);
      setIsDisableArrowLeft(false);
      setIsDisableArrowRight(false);
    };
    element?.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = useCallback((e: string) => {
    element = document.getElementById("slider-wrap");
    if (element && e === "left") {
      element.scrollLeft -= 200;
    } else if (element) {
      element.scrollLeft += 200;
    }
  },[isdisableArrowLeft, isdisableArrowRight]);

  return (
    <div className="relative box-border">
      <div
        id="slider-wrap"
        className="no-scrollbar flex flex-nowrap overflow-x-scroll scroll-smooth"
      >
        <div className="flex flex-shrink-0 box-border">
          {/* arrow */}

          {!isdisableArrowLeft && (
            <div
              className="arrow-icon absolute h-9 w-9 flex rotate-180 items-center justify-center self-center rounded-full border border-gray-400 bg-white box-border"
              onClick={() => handleScroll("left")}
            >
              <svg
                className="mx-1 h-3 w-3 text-blue-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </div>
          )}
          {props.children}
          {!isdisableArrowRight && (
            <div
              className="arrow-icon absolute right-0 z-10 flex h-9 w-9 items-center justify-center self-center rounded-full border border-gray-400 bg-white"
              onClick={() => handleScroll("right")}
            >
              <svg
                className="mx-1 h-3 w-3 text-blue-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
