import React from 'react'
import Image from 'next/image';
import IntroducImg from "@/assert/dashboard/main/introductingtag.png";
import ShareNoteImg from "@/assert/dashboard/main/share-notes.png";
import AccessPointImg from "@/assert/dashboard/main/access-point.png";
function FeaturedCard() {
  return (
    <div className="grid grid-flow-row grid-cols-3 gap-2 mb-4">
      <div className="flex items-center gap-2 card py-2 px-2 rounded-md">
        <Image
          src={IntroducImg}
          className="align-middle object-contain object-center w-1/5"
          alt="Introducting tag"
        />
        <div className="flex flex-col text-justify">
          <p className="font-semibold">Introducing tags</p>
          <p className="tracking-tight text-justify">
            Easily categorize and find your notes by adding tags. Keep your
            workspace clutter-free and efficient.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 card py-2 px-2 rounded-md">
        <Image
          src={ShareNoteImg}
          className="align-middle object-contain object-center w-1/5"
          alt="share-notes tag"
        />
        <div className="flex flex-col text-justify">
          <p className="font-semibold">Share Notes Instantly</p>
          <p className="tracking-tight text-justify">
            Effortlessly share your notes with others via email or link. Enhance
            collaboration with quick sharing options.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 card py-2 px-2 rounded-md">
        <Image
          src={AccessPointImg}
          className="my-2 align-middle object-contain object-center w-1/5"
          alt="access-point tag"
        />
        <div className="flex flex-col text-justify">
          <p className="font-semibold">Access Anywhere</p>
          <p className="tracking-tight text-left">
            Sync your notes across all devices. Stay productive whether
            you&lsquo;re on your phone, tablet, or computer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard