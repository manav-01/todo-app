import React from 'react'
import FeaturedCard from '@/components/FeaturedCard'
import HeroBar from '@/components/HeroBar'
import FunctionCard from '@/components/FunctionCard'
import TodoSection from '@/components/TodoSection'


function Dashboard() {
  return (
     <main className="bg-active-bg ml-[260px] p-4 ">
      
      {/* Hero Bar  */}
      <HeroBar/>

      {/* Fetured Card  */}
      <FeaturedCard/>

      {/* Fionality Section  */}
        <FunctionCard/>

      {/* <!-- ToDo Component  --> */}
      <TodoSection/>
     
    </main>
  )
}

export default Dashboard;