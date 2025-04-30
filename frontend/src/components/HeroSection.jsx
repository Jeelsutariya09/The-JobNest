import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [query, setquery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  }

  return (
    <div className='text-center'>
      <div className='flex flex-col gap-5 my-5'>
        <span className='mx-auto px-4 py-2 bg-gray-100 rounded-2xl text-[#6A38C2] font-medium'>No. 1 Job Hunt Website</span>
        <h1 className='text-5xl font-bold'> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
        <p>Search and apply and get your dream job with <span className='text-[#6A38C2] text-2xl font-bold'>The JobNest.</span></p>
        <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
          <input
            type="text"
            placeholder='Search for jobs, companies, and more'
            onChange={(e) => setquery(e.target.value)}
            className='outline-none border-none w-full'
          />
          <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2] text-white hover:bg-[#5b30a6]">
            <Search className='h-5 w-5' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
