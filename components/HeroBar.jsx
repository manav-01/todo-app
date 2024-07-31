import React from 'react'
import Image from 'next/image';
import HelpFeedbackImg from "/assert/dashboard/main/help_feddback.png";

function HeroBar({name = "Joe"}) {
  return (
    <div class="flex justify-between mb-4" id="title">
      <p class="text-4xl font-semibold font-barlow text-black">
        Good morning, {name}!
      </p>
      <p class="flex justify-between gap-2 items-center text-black">
        Help & feedback
        <Image
          src={HelpFeedbackImg}
          alt="Help & Feedback"
        />
      </p>
    </div>
  );
}

export default HeroBar