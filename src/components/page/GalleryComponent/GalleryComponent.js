import Image from 'next/image';


const GalleryComponent = () => {
    const image1 = "/image/12345678.jpg";
    const image2 = "/image/12345678.jpg";
    const image3 = "/image/12345678.jpg";
    const image4 = "/image/12345678.jpg";
    const image5 = "/image/12345678.jpg";
    const image6 = "/image/12345678.jpg";
    const image7 = "/image/12345678.jpg";
    
  return (
    <div className=" flex flex-col items-center justify-between py-10  lg:px-24 gap-8">
    
      <div className=" flex flex-col  mx-auto ">
        <h5 className="text-md  lg:text-2xl  font-bold py-10 ">
          1st Gallery
        </h5>
        <div className="flex flex-col w-full justify-center items-center sm:flex-row">
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image1}
            />
          </div>
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image2}
            />
          </div>
  
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image3}
            />
          </div>
        </div>
      </div>
  
      <div className="container flex flex-col  mx-auto ">
        <h5 className="text-md  lg:text-2xl font-bold py-10">
          2nd Gallery
        </h5>
        <div className="flex flex-col w-full justify-center items-center sm:flex-row">
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image4}
            />
          </div>
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image2}
            />
          </div>
  
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image5}
            />
          </div>
        </div>
      </div>
  
      <div className="container flex flex-col  mx-auto ">
        <h5 className="text-md  lg:text-2xl font-bold py-10">
          3rd Gallery
        </h5>
        <div className="flex flex-col w-full justify-center items-center sm:flex-row">
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image6}
            />
          </div>
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image2}
            />
          </div>
  
          <div className="flex flex-col w-full justify-center items-center text-center">
            <Image
              className="py-5 hover:scale-105 transition duration-300"
              height={600}
              width={500}
              alt="Rectangle"
              src={image3}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryComponent
