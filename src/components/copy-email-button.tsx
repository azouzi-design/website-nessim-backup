"use client";

import { useState } from "react";
import Image from "next/image";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex gap-2 h-10 items-center justify-center px-3 rounded-xl bg-stroke w-[200px] max-mobile:w-[144px] cursor-pointer transition-opacity duration-150 hover:opacity-90 active:opacity-70"
    >
      <Image src="/contact/icon-email.svg" alt="" width={16} height={16} />
      <span
        key={copied ? "copied" : "default"}
        className="text-button text-foreground whitespace-nowrap [animation:spring-pop-soft_0.35s_ease-out_both]"
      >
        {copied ? "Copied!" : "Copy Email"}
      </span>
    </button>
  );
}
