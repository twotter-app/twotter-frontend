import React, { useRef, useEffect } from "react";
import gsap from "gsap";

type HeartProps = {
  isLiked: boolean;
  onClick: () => void;
};

const Heart: React.FC<HeartProps> = ({ isLiked, onClick }) => {
  // Ref for the element you want to animate
  const heartRef = useRef(null);

  useEffect(() => {
    if (isLiked) {
      // Start the 'liked' animation
      gsap.to(heartRef.current, {
        scale: 1.25,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
        repeat: 2, // To make it infinite like your CSS animation
      });
    } else {
      // Reverse the animation when unliked
      gsap.to(heartRef.current, { scale: 1, duration: 0.2, ease: "none" });
    }
  }, [isLiked]); // Dependency array includes isLiked to react to its changes

  return (
    <svg
      onClick={onClick}
      ref={heartRef}
      className={`lucide lucide-heart cursor-pointer hover:stroke-destructive w-5 h-5 ${
        isLiked ? "fill-destructive stroke-destructive" : "fill-none"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
};

export default Heart;
