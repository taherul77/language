import Apply from '@/components/page/Apply/Apply';
import Banner from '@/components/ui/Banner/Banner'
import React from 'react'

const page = () => {
  const images = "/image/banner3.jpg";
  return (
    <div>
       <Banner img={images} heading={"apply now "}></Banner>
      <Apply></Apply>
    </div>
  )
}

export default page
