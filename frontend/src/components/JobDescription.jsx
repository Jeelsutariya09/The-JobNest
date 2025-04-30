import React, { useState, useEffect } from 'react'
import { Badge } from './ui/badge'
import { useParams } from "react-router-dom";
import { Button } from './ui/button';
import axios from 'axios';
import { setSingleJob } from '@/redux/jobSlice';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';


const JobDescription = () => {
  const { singleJob } = useSelector(store => store.job);
  const { user } = useSelector(store => store.auth);
  const isIntiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false; // to see if you are applied before than you can not appliy again
  const [isApplied, setIsAppled] = useState(isIntiallyApplied);
  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
      console.log(res.data);
      if (res.data.success) {
        setIsAppled(true); // update local state 
        const updatedSingleJob = {...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] };
        dispatch(setSingleJob(updatedSingleJob)); // real time ui update
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsAppled(res.data.job.applications.some(application => application.applicant === user?._id)); // Ensure the state is in sync with the fetched job data
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className='max-w-7xl mx-auto mt-10'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
          <div className='flex items-center gap-2 mt-4'>
            <Badge className="text-blue-700 font-bold rounded-md border border-gray-300" variant="ghost">{singleJob?.position}Positions</Badge>
            <Badge className="text-[#F83002] font-bold  rounded-md border border-gray-300" variant="ghost">{singleJob?.jobType}</Badge>
            <Badge className="text-[#0fa45f] font-bold  rounded-md border border-gray-300" variant="ghost">{singleJob?.salary}LPA</Badge>
          </div>
        </div>
        <Button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#6A38C2] hover:bg-[#5b30a6]'}  text-white`}>{isApplied ? 'Already Applied' : 'Apply Now'}</Button>
      </div>
      
      <h1 className='border-b-2 border-b-gray-300 font-md py-4'>Job Description</h1>
      <div className='my-4'>
        <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
        <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
        <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
        <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience} yrs</span></h1>
        <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary}LPA</span></h1>
        <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications?.length}</span></h1>
        <h1 className='font-bold my-1'>Posted date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span></h1>
      </div>
    </div>
  )
}

export default JobDescription
