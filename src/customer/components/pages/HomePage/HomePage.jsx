import React from 'react'
import MainCrosel from '../../HomeCarousel/MainCrosel'
import HomeSectionCarousel from '../../HomeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
  return (
  <div>
    <MainCrosel/>
    <div className='py-20 space-y-10 flex-col justify-center px-5 lg:px-10'>
       <HomeSectionCarousel/>
       <HomeSectionCarousel/>
       <HomeSectionCarousel/>
       <HomeSectionCarousel/>
    </div>
  </div>
  )
}

export default HomePage

