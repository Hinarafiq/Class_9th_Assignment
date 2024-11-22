import Image from 'next/image'
export default function HeroSection() {
  return (
  <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-white h-screen">
    {/* Left Side: Text Content */}
    <div className='h-screen flex flex-col lg:flex-row justify-between p-8 lg:pt-14'>
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Rotating Makeup Organizer
        </h1>
        <p className="text-lg text-gray-600">
        Rotating Makeup Organizer, 360 Degree Rotation, Minimalist Design, High-Gloss ABS Plastic, Perfect For Bedroom, Vanity.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
          Click Me
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="w-44 md:w-1/2 mt-8 ">
        <Image
          src="/temupic1.webp" 
          alt="Rotating Makeup Organizer"
          layout="responsive"
          width={500}
          height={500}
          className="rounded-lg"
        />
       </div>

      {/* 2nd DIV */}
      {/* Left Side : Text Content */}
       <div className="pl-6 md:w-1/2 space-y-6 ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Book Light
        </h1>
        <p className="text-lg text-gray-600">
        1pc Clip On Book Light, Battery Powered Flexible House Table Lamp, Desktop Small Reading Lamp, Portable Small Night Light For Room Decor
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
          Click Me
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="w-44 md:w-1/2 mt-8 ">
        <Image
          src="/temupic2.webp" 
          alt="Book Light"
          layout="responsive"
          width={500}
          height={500}
          className="rounded-lg"
        />
       </div>
    </div>
  </section>
  )
}