import React, { useState } from 'react'
import Navbar from '../components/basic/Navbar'
import Footer from '../components/major/Footer'
import BlogCard from '../components/basic/BlogCard'
import { Pagination } from "flowbite-react";


const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  function paginate() {
    setCurrentPage(2);
  }

  function isOdd(number: any) {
    return number % 2 !== 0;
  }

  return (
    <section>
      <div className="h-[90vh] bg-primary">
        <Navbar />

        <div className="h-full w-full flex justify-center">
          <h2 className="text-light font-druk-wide mt-44 font-[700] leading-relaxed text-5xl text-center">
            Blog
          </h2>
        </div>

      </div>


      <section className='px-16 mt-20'>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-x-3 gap-y-10 justify-items-center">
          {["1", "1", "1", "1"].map((bloger, i) => (
            <>
              {isOdd(i) ? (
                <BlogCard extraClass='mt-10'  />
              ) : (
                <BlogCard key={i} />
              )}
            </>
          ))}


        </div>


      </section>

      <div className="flex justify-center mt-10">
        <Pagination
          currentPage={currentPage}
          onPageChange={paginate}
          showIcons
          totalPages={100}
        />
      </div>

      <div className='mt-10'>
        <Footer />
      </div>

    </section>
  )
}

export default Blog