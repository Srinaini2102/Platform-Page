import React from 'react'
import mapp from '../../assets/abouts_map.jpg'
import img1 from '../../assets/grid_img1.png'
import img2 from '../../assets/grid_img2.png'
import img3 from '../../assets/grid_img3.png'
import Boxes from './Boxes'
import Boxes2 from './Boxes2'
export default function VP() {
  
  return (
    <>
    <div className='back-img'>
       <h3 className='pageHeading'>About SVM Co Innovation Platform Solving Rural Challenges</h3>
    </div>  
  <section className='value-prop'>
    
    <div className='content'>
      
      <div className='text-center '>
        <h1 className='text-xl mt-7'><b>Delivering Sustainable Solutions For Rural Challenges</b></h1>
        <p className='m-100 pl-10 pr-10'>Smart Village Movement Platform is a dynamic digital space where experts from academia, government and corporations and SVM Team come together to co-innovate to solve grand challenges of rural emerging economies.</p>
      </div>
      <div className='ved'>
        
        <div className='ved1'>
        <h1 className='text-xl pb-5'><b>What is Open Innovation?</b></h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LbiJ_9W7UHM?si=pU69yDyVEwm5CZQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='ved1'>
          <h1 className='text-xl pb-5'><b>Platform Users across the world</b></h1>
          <img src={mapp} alt="" width={400} height={315}/>
        </div>
      </div>
      <div className='flex items-center justify-center pt-5 mb-5'><h1 className='text-xl pb-5'><b>From Data to Happiness</b></h1></div>
      <div className='flex items-center justify-center'>
      <div className='grids'>
        <div className='box'><img src={img1} alt=""/></div>
        <div className='box'>Data is useless unless it is converted into Information.</div>
        <div className='box'><img src={img2} alt="" /></div>
        <div className='box'>Information is useless unless it is converted to Knowledge.</div>
        <div className='box'><img src={img3} alt="" width={270}/></div>
        <div className='box'>Knowledge is useless unless it produces something useful.</div>
      </div>
      </div>
      
      <div className='text-center '>
        <h1 className='text-xl mt-7'><b>Benefits of Open-Innovation Platforms: Meeting the Requirements of a New World</b></h1>
        <p className='m-100'>The increased demands of digitization and organic economic development call for innovative methods for agile communities, corporations and government. The Smart Village Movement Platform develops new ideas, feedback, solutions to global rural challenges with Open-Innovation and collaboration at the heart of our model.</p>
      </div>
      <div><Boxes2/></div>
    </div>
    <div className='flex justify-center items-center pb-5'><h1 className='text-xl pb-5 pt-5'><b>What’s In It For Me? Value Propositions for Governments, Academia, Businesses or Volunteers Using SVM Platform</b></h1></div>
      <div><Boxes/></div>
      
  </section>
    </>
  )
}
