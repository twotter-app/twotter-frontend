import React, { useRef, useEffect } from "react";
import gsap from "gsap";

type RepostProps = {
  isReposted: boolean;
  onClick: () => void;
};

const Repost2: React.FC<RepostProps> = ({ isReposted, onClick }) => {
  const repostRef = useRef(null);

  useEffect(() => {
    if (isReposted) {
      // Start the 'Reposted' animation
      gsap.to(repostRef.current, {
        scale: 1.25,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
        repeat: 1,
      });
    } else {
      // Reverse the animation when cliked to un-repost
      gsap.to(repostRef.current, { scale: 1, duration: 0.2, ease: "none" });
    }
  }, [isReposted]);

  return (
    <svg
      onClick={onClick}
      ref={repostRef}
      className={`lucide lucide-repeat-2 cursor-pointer hover:stroke-successful w-5 h-5 ${
        isReposted
          ? "fill-none stroke-successful"
          : "fill-none stroke-foreground"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 9 3-3 3 3" />
      <path d="M13 18H7a2 2 0 0 1-2-2V6" />
      <path d="m22 15-3 3-3-3" />
      <path d="M11 6h6a2 2 0 0 1 2 2v10" />
    </svg>
  );
};

export default Repost2;
