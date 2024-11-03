import React from 'react';
import Image from 'next/image';
import MissionImage from '../../assets/missionimage.jpg';
import vissionimage from '../../assets/vissionimage.jpg';
import mainimage from '../../assets/top-view-green-leaves-cup-tea.jpg';
import ProductDisplay from '@/components/ProductDIsplay';
import HorticultureProduct from '@/components/HorticultureProduct';


const Aboutus = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      {/* About Section */}
   {/* About Section */}
<div className="flex flex-col md:flex-row justify-center items-start mb-14 gap-8">
  <div className="md:w-1/2 flex justify-center md:justify-start">
    <Image
      src={mainimage}
      alt="Our Mission"
      width={500}
      height={500}
      className="vissionmission-image rounded-3xl shadow-lg bg-white border border-gray-300"
    />
  </div>
  <div className="md:w-1/2 text-center md:text-left flex flex-col justify-start">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
    <p className="text-base md:text-lg text-gray-700">
      We are dedicated to providing the global market with premium, eco-friendly agricultural and herbal products crafted in Sri Lanka. Our commitment lies in producing high-quality cocopeat and herbal goods that honor both nature and tradition. With a foundation rooted in sustainable practices, ancient Ayurvedic wisdom, and value-added manufacturing, we strive to deliver products that support health, wellness, and environmental stewardship. Join us as we bring the essence of Sri Lanka to the world, nurturing growth naturally.
    </p>
  </div>


      </div>


<section className="flex flex-col md:flex-row justify-center items-center text-center gap-8 py-10">
  <div className="p-8 flex-1 text-center">
    <img src="URL_TO_SINGHE_LOGO" alt="Cocopeat" className="mx-auto mb-5" style={{ width: '80px' }}/>
    <h3 className="text-2xl font-bold mb-2">Cocopeat</h3>
    <p className="text-base  text-gray-700 mb-5">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     </p>
    <div className="flex justify-center gap-4">
    <div className="flex justify-center gap-4">
  <a href="http://localhost:3000/cocopeat">
  <button className="flex rounded-full border border-customGreen mt-4 px-6 py-2 font-medium hover:bg-customBlue hover:text-white mx-auto md:mx-0">
  Cocopeat
    </button>
  </a>
</div>

    </div>
  </div>

  <div className="p-8 flex-1 text-center">
    <img src="URL_TO_WAVE_LOGO" alt="Horticulture" className="mx-auto mb-5" style={{ width: '80px' }}/>
    <h3 className="text-2xl font-bold mb-2">Horticulture</h3>
    <p className="text-base text-gray-700 mb-5">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    <div className="flex justify-center gap-4">
    <div className="flex justify-center gap-4">
  <a href="http://localhost:3000/horticulture">
  <button className="flex rounded-full border border-customGreen mt-4 px-6 py-2 font-medium hover:bg-customBlue hover:text-white mx-auto md:mx-0">
  Horticulture
    </button>
  </a>
</div>

    </div>
  </div>
</section>


     {/* Mission Statement */}
<section className="vissionmission-box rounded-3xl flex flex-col md:flex-row items-center text-center md:text-left mb-7  py-5   md:space-y-0 gap-5">
  <Image
    src={MissionImage}
    alt="Our Mission"
    width={384}
    height={384}
    className="vissionmission-image rounded-3xl shadow-lg bg-white border border-gray-300 order-1 md:order-2"
  />
  <div className="flex-1 bg-customDarkBlue text-white rounded-3xl py-5 px-7 h-90 md:h-96 flex items-center order-2 md:order-1 ">
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-yellow-300">Our Mission</h2>
      <p className="text-base md:text-lg text-white">
        Maxol (Private) Limited’s mission is to enter the global market by producing and exporting high-quality, non-traditional agricultural products and herbal products with added value, ensuring health benefits and eco-friendly practices.
      </p>
    </div>
  </div>
</section>


      {/* Vision Statement */}
      <section className="vissionmission-box rounded-3xl flex flex-col md:flex-row items-center text-center md:text-left  py-5 gap-5">
        <Image
          src={vissionimage}
          alt="Our Vision"
          width={384}
          height={384}
          className="vissionmission-image rounded-3xl shadow-lg bg-white border border-gray-300"
        />
        <div className="flex-1 bg-customDarkBlue text-white rounded-3xl py-5 px-7 h-90 md:h-96 flex items-center ">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-yellow-300">Our Vision</h2>
            <p className="text-base md:text-lg">
              Maxol (Private) Limited envisions supporting the global community by producing and exporting a variety of natural, eco-friendly products.
            </p>
          </div>
        </div>
      </section>
       {/* Product Display Sections */}
       <div className="w-full flex justify-center items-center mt-[50px] mb-[50px]">
        <ProductDisplay />
      </div>
      <div className="w-full flex justify-center items-center  mb-[50px]">
        <HorticultureProduct />
      </div>
    </div>
  );
};

export default Aboutus;