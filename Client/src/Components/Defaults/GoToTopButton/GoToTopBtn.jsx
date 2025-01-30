import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const GoToTopBtn = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);

  const handleVisibleButton = () => {
    const scrollPosition = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    setShowGoToTop(scrollPosition > scrollHeight * 0.8);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);

    return () => window.removeEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    showGoToTop && (
      <div>
        <button
          className="fixed bottom-7 right-5 sm:right-10 xl:right-20 size-10 bg-green flex justify-center items-center rounded-full yoyo-animation"
          type="button"
          onClick={handleScrollUp}
        >
          <ChevronUp />
        </button>
      </div>
    )
  );
};

export default GoToTopBtn;
