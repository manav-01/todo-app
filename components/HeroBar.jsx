import React from 'react'
import Image from 'next/image';
import HelpFeedbackImg from "/assert/dashboard/main/help_feddback.png";
import { useSelector } from 'react-redux';

function HeroBar() {
  
  const name = useSelector(state => state.auth.userData?.fullName || "Joe") 

  function capitalizeFirstWord(name) {
  const firstWord = name.split(" ")[0];
  return firstWord.charAt(0).toUpperCase() + firstWord.slice(1).toLowerCase();
  }

  function getGreeting() {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
      // You can add more greetings for other time ranges
    }
  }

  return (
    <div class="flex justify-between mb-4" id="title">
      <p class="text-4xl font-semibold font-barlow text-black">
        {getGreeting()}, {capitalizeFirstWord(name)}!
      </p>
      <p class="flex justify-between gap-2 items-center text-black">
        Help & feedback
        <Image src={HelpFeedbackImg} alt="Help & Feedback" />
      </p>
    </div>
  );
}

export default HeroBar