import Link from 'next/link'
import React from 'react'

const About = () => {
    const aboutImg="/image/about/1.-About-us-1 (1).jpg"
  return (
    <div>
      <div className="grid lg:grid-cols-2 py-10  lg:px-24 gap-8">
        <div>
          <img src={aboutImg} alt="" />
        </div>
        <div>
          <div>
            <h2 className="text-3xl text-gray-400">About</h2>
            <h1 className="text-5xl font-bold uppercase">Shining Education</h1>
          </div>
          <div>
            <p className="text-justify pt-5 text-gray-700">In this fast-moving world of competition, JAPAN is a dream destination for intellectual people who want to be successful in their life. Not only for attractive salary & other facilities, but also Japan became the first choice for students & job seekers pursuing independence and ambition. This situation makes language proficiency in Japanese and cultural openness prime criteria for the people trying to be there in the future. With those skills achieving a Japanese visa, clearance from professional institutions becomes easier.</p>
            <p className="text-justify pt-5 text-gray-700">With the vision to provide proper & complete consultancy on language efficiency to the interested students & job seekers, we commenced the ”SHINING EDUCATION”. You can contact us for Japanese Language learning, Student & Job Visa Processing, and job finding purposes. We can ensure the best possible services & it will be a life-changing journey between you and Shining Education. We will be there from the beginning to the end of your voyage.</p>
          </div>
          <div className="pt-4">
            <Link href={"/about-us"}>
            <button className="bg-blue-600 px-10 py-2 font-bold rounded-md">Discover More</button>
            </Link>
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
