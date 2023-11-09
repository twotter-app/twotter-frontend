import React, { useRef, useEffect } from "react";
import gsap from "gsap";

type RepostProps = {
  isReposted: boolean;
  onClick: () => void;
};

const Repost2: React.FC<RepostProps> = ({ isReposted, onClick }) => {
  // Ref for the element you want to animate
  const repostRef = useRef(null);

  useEffect(() => {
    if (isReposted) {
      // Start the 'Reposted' animation
      gsap.to(repostRef.current, {
        scale: 1.25,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
        repeat: 1, // To make it infinite like your CSS animation
      });
    } else {
      // Reverse the animation when unliked
      gsap.to(repostRef.current, { scale: 1, duration: 0.2, ease: "none" });
    }
  }, [isReposted]); // Dependency array includes isLiked to react to its changes

  return (
    <svg
      onClick={onClick}
      ref={repostRef}
      className={`lucide lucide-repeat-2 cursor-pointer hover:stroke-green-600 w-5 h-5 ${
        isReposted ? "stroke-green-600" : "fill-none"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m2 9 3-3 3 3" />
      <path d="M13 18H7a2 2 0 0 1-2-2V6" />
      <path d="m22 15-3 3-3-3" />
      <path d="M11 6h6a2 2 0 0 1 2 2v10" />
    </svg>
  );
};

export default Repost2;
