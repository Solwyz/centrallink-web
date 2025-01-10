import React, { useEffect, useState } from 'react'
import arrowLeft from "../../../Assets/Admin/leftArrow.svg"
import arrowRight from "../../../Assets/Admin/rightArrow.svg"

function AdminEnquiry() {
  const [enquiries, setEnquiries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const enquiriesPerPage = 5;

  const enquiriesData = [
  {
      "date": "07-June-2024",
      "company": "Sam Consultancy",
      "email": "sam@gmail.com",
      "service": "Exporting service",
      "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      "date": "08-June-2024",
      "company": "XYZ Corporation",
      "email": "xyz@example.com",
      "service": "Consulting",
      "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      "date": "09-June-2024",
      "company": "ABC Corporation",
      "email": "abc@example.com",
      "service": "Consulting",
      "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      "date": "07-June-2024",
      "company": "Sam Consultancy",
      "email": "sam@gmail.com",
      "service": "Exporting service",
      "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      "date": "08-June-2024",
      "company": "XYZ Corporation",
      "email": "xyz@example.com",
      "service": "Consulting",
      "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      "date": "09-June-2024",
      "company": "ABC Corporation",
      "email": "abc@example.com",
      "service": "Consulting",
      "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      "date": "07-June-2024",
      "company": "Sam Consultancy",
      "email": "sam@gmail.com",
      "service": "Exporting service",
      "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      "date": "08-June-2024",
      "company": "XYZ Corporation",
      "email": "xyz@example.com",
      "service": "Consulting",
      "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      "date": "09-June-2024",
      "company": "ABC Corporation",
      "email": "abc@example.com",
      "service": "Consulting",
      "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      "date": "07-June-2024",
      "company": "Sam Consultancy",
      "email": "sam@gmail.com",
      "service": "Exporting service",
      "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      "date": "08-June-2024",
      "company": "XYZ Corporation",
      "email": "xyz@example.com",
      "service": "Consulting",
      "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      "date": "09-June-2024",
      "company": "ABC Corporation",
      "email": "abc@example.com",
      "service": "Consulting",
      "details": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ]


  useEffect(() => {
    setEnquiries(enquiriesData);
  }, []);

  const totalPages = Math.ceil(enquiries.length / enquiriesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastEnquiry = currentPage * enquiriesPerPage;
  const indexOfFirstEnquiry = indexOfLastEnquiry - enquiriesPerPage;
  const currentEnquiries = enquiries.slice(indexOfFirstEnquiry, indexOfLastEnquiry);

  return (
    <div className='mt-8 pr-[6px]'>
      <div className='text-[16px] font-normal'>Enquiries</div>

      <div className='mt-12'>
        {currentEnquiries.map((enquiry, index) => (
          <div key={index} className='bg-white border rounded-lg border-[#D6D6D6] mt-2'>
            <div className='bg-[#B5A268] w-fit text-[12px] items-center font-normal text-center py-[7px] text-[#FFFFFF] px-12 h-8'>
              {enquiry.date}
            </div>
            <div className='pl-6 pr-10 pb-6'>
              <div className='flex items-center justify-between mt-[10px]'>
                <div className='text-[18px] font-normal text-[#555555]'>{enquiry.company}</div>
                <div className='text-[14px] font-light text-[#2A2E35]'>Email: {enquiry.email}</div>
              </div>
              <div className='flex gap-4 text-[#2A2E35] text-[14px] mt-4'>
                <div className='font-normal'>Service:</div>
                <div className='font-light'>{enquiry.service}</div>
              </div>
              <div className='flex gap-4 text-[#2A2E35] text-[14px] mt-4'>
                <div className='font-normal'>Details:</div>
                <div className='font-light'>{enquiry.details}</div>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="flex justify-end align-middle mt-32">
        <button onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
          className={`p-2 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={currentPage === 1}>
          <img src={arrowLeft} alt="Previous" />
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button key={i} onClick={() => paginate(i + 1)}
            className={`px-3 py-1 rounded-md text-sm font-normal ${currentPage === i + 1 ? ' text-[#C8C8C8]' : 'text-[#373737]'}`}>
            {i + 1}
          </button>
        ))}

        <button onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
          className={`p-2 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
          disabled={currentPage === totalPages}>
          <img src={arrowRight} alt="Next" />
        </button>
      </div>


    </div>
  );
}

export default AdminEnquiry
