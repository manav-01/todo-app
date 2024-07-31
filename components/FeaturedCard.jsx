import React from 'react'
import Image from 'next/image';
import IntroducImg from "@/assert/dashboard/main/introductingtag.png";
import ShareNoteImg from "@/assert/dashboard/main/share-notes.png";
import AccessPointImg from "@/assert/dashboard/main/access-point.png";
function FeaturedCard() {
  return (
    <div class="grid grid-flow-row grid-cols-3 gap-2 mb-4">
      <div class="flex items-center gap-2 card py-2 px-2 rounded-md">
        <Image
          src={IntroducImg}
          class="align-middle object-contain object-center w-1/5"
          alt="Introducting tag"
        />
        <div class="flex flex-col text-justify">
          <p class="font-semibold">Introducing tags</p>
          <p class="tracking-tight text-justify">
            Easily categorize and find your notes by adding tags. Keep your
            workspace clutter-free and efficient.
          </p>
        </div>
      </div>

      <div class="flex items-center gap-2 card py-2 px-2 rounded-md">
        <Image
          src={ShareNoteImg}
          class="align-middle object-contain object-center w-1/5"
          alt="share-notes tag"
        />
        <div class="flex flex-col text-justify">
          <p class="font-semibold">Share Notes Instantly</p>
          <p class="tracking-tight text-justify">
            Effortlessly share your notes with others via email or link. Enhance
            collaboration with quick sharing options.
          </p>
        </div>
      </div>

      <div class="flex items-center gap-2 card py-2 px-2 rounded-md">
        <Image
          src={AccessPointImg}
          class="my-2 align-middle object-contain object-center w-1/5"
          alt="access-point tag"
        />
        <div class="flex flex-col text-justify">
          <p class="font-semibold">Access Anywhere</p>
          <p class="tracking-tight text-left">
            Sync your notes across all devices. Stay productive whether you're
            on your phone, tablet, or computer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard