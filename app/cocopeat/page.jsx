"use client"
import React from 'react';
import Image from 'next/image';
import cocopeatlogo from '@/assets/coir.png';
import Gallery from '@/components/Gallery';

const Cocopeat = () => {
  return (
    <div className="container mx-auto px-5 py-10 md:px-12 mb-[50px]">
      <div className="flex flex-col md:flex-row items-start md:space-x-8 space-y-8 md:space-y-0">
        
        {/* Image Section - Positioned on the Left for Desktop */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <Image
            src={cocopeatlogo}
            alt="Agriculture and Organic Products"
            width={500}
            height={500}
            className="rounded-3xl object-cover"
          />
        </div>

        {/* Text Section - Aligned to Top and Left */}
        <div className="md:w-1/2 flex flex-col justify-start text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome to Cocopeat
          </h1>
          <p className="text-gray-700">
            Maxol (Private) Limited is a Sri Lankan pioneer in eco-friendly, sustainable manufacturing and export of high-quality, non-traditional agro and herbal products. Established in 2023, we set out to redefine the export landscape by introducing innovative, value-added products that reflect Sri Lanka’s rich heritage and commitment to the environment.
          </p>
        </div>
      </div>
      <div className="pt-12 text-center">
  <h1 className="text-2xl font-bold mb-4">Our Products</h1>
  <Gallery />
</div>


    </div>
    
  );
}

export default Cocopeat;


