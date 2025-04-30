import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
  const navigate = useNavigate();
  // const jobId = "sdvjsnbvrjidinij";

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDidfference = currentTime - createdAt;
    return Math.floor(timeDidfference / (1000 * 60 * 60 * 24));
  }

  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
        <Button variant="outline" className="rounded-full border border-gray-200" size="icon"><Bookmark /></Button>
      </div>

      <div className='flex items-center gap-2 my-2'>
        <Button className="p-6 border border-gray-200" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
          <p className='text-sm text-gray-500'>India</p>
        </div>
      </div>

      <div >
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600'>{job?.description}</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className="text-blue-700 font-bold rounded-md border border-gray-300" variant="ghost">{job?.position}Positions</Badge>
        <Badge className="text-[#F83002] font-bold  rounded-md border border-gray-300" variant="ghost">{job?.jobType}</Badge>
        <Badge className="text-[#0fa45f] font-bold  rounded-md border border-gray-300" variant="ghost">{job?.salary}LPA</Badge>
      </div>

      <div className='flex items-center gap-4 mt-4'>
        <Button onClick={() => navigate(`/description/${job?._id}`)} className="bg-[#6A38C2] text-white">Details</Button>
        <Button className="bg-[#6A38C2] text-white">Save For Latter</Button>
      </div>

    </div>
  )
}

export default Job
