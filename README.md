Backend :
        Step 1 -> Creating Server using Express.js
        Step 2 -> Creating application model, company model, job model, and use model Schema for DB
        step 3 -> Creating authntication middleware with JWT Authentication
        step 4 -> Creating controller
                        -- user controller,Middleware and API Route to check proper register, login with JWT Authentication , logout, Update profile
                        -- company controller and API route
                        -- job controller with post job, get job with filtring, get admins job etc and API route
                        -- application controller with applying job, checked applied job  means whaen user apply for job they can see their pase applied jobs, Get Applicants for admin to check how many student applied for job, Update status (accepted, pending, rejected) 
        step 5 -> Creating Routes
                        -- user route -> Register, login, logout, update peofile
                        -- company eoute -> register company, get company, get company by id, update company
                        -- job route -> post job, get all job, get admins job, get job by id
                        -- application route -> apply job, get applied jobs, get applicants, update status


Frontend :
         Step 1 -> setUp shadcd ui with vite.
         step 2 -> Create Navbar Component.
         step 3 -> Creating Login and Signup Component with multer for  
         file uploading.
         step 4 -> Creating Home Page with Herosection, CategoryCarousel Section, LatestJobs Section, and Footer Section.
         step 5 -> Creating Jobs Page with FilterCard and Job Component.
         step 6 -> Creating Browse Page.
         step 7 -> Creating View Profile Page.
         step 8 -> Creating Job Description Page.
         step 9 -> Creating profile edit dailouge page/popup.
         step 10 -> Connecting Cloudinary to store resume and opening resume and also for profile photo.
         step 11 -> Implenemting Logout functionality.
         step 11 -> Get All Jobs Using Custom hook.
         step 12 -> Implement Apply job feature.
         step 13 -> Persist store
         step 14 -> Building Admin Home Page.
         step 15 -> Implement Filter Company Logic
         step 16 -> Building Admin Job Page
         step 17 -> Implement Applicant Page
         step 18 -> Implement Browse Search Job Logic
         step 19 -> Implement fIlter logic in job page
         step 20 -> Protectiing Route