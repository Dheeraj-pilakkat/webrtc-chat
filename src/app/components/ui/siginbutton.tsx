import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/app/api/auth/[...nextauth]/options';

interface siginbuttonProps {
  img: string;
  provider: string;
  providerId?: string;
  className?: string;
  callbackUrl?: string;
}
function SiginButton({
  img,
  provider,
  providerId,
  className,
  callbackUrl,
}: siginbuttonProps) {
  return (
    <div>
      <button
        className={`px-10 cursor-pointer py-2 flex gap-3 rounded ${className}`}
        onClick={() =>
          signIn(provider, { callbackUrl: callbackUrl || "/main" })
        }
      >
        <Image
          src={img}
          alt="Google"
          width={20}
          height={20}
          className="inline-block mr-2 mb-1"
        />
        {providerId}
      </button>
    </div>
  );
}

export default SiginButton;
