"use client"
import AutoExpandTextarea from '@/components/AutoExpandTextarea'
import React from 'react'

export default function page() {
  return (
    <div className='h-lvh  bg-pink-200 grid place-items-center'>
        <div className='w-1/5 h-[300px]'>

        <AutoExpandTextarea/>
        </div>
    </div>
  )
}
