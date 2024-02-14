import React from 'react'

export default function Boxes() {
    const detailing = [
        {
          title:'Governments',
          list1:'1) Research insights to help formulate policies',
          list2:'2) Access to real-time field data and impact',
          list3:'3) Meeting needs of constituents',
          list4:'4) Access to innovative solutions and proposals presented by universities and corporates',
          list5:'5) Choosing relevant innovation and digital technologies for the state and encouraging companies to invest in rural areas & contribute to the economy with taxes',
        },
        {
          title:'Academia',
          list1:'1) Access database of community pain points',
          list2:'2) Embark on problem-driven, pragmatic research',
          list3:'3) Provide students with education and resources for targeted research',
          list4:'4) Access to Berkeley-SVM Open-Innovation platform and corporate partners',
          list5:'5) Access to support and feedback from the SVM team and Berkeley mentors', 
        },
        {
          title:'Businesses',
          list1:'1) Tap into the pain points of rural demographic',
          list2:'2) Embark on problem-driven, pragmatic research',
          list3:'3) Resolve relevant customer needs and gain first-mover advantage',
          list4:'4) Access an efficient structure to test the market and your own offerings and solutions',
          list5:'5) Develop innovative new Open-Innovation business models based on data and feedback',  
        },
        {
          title:'Volunteers',
          list1:'1) Understand the Smart Village Movement ecosystem',
          list2:'2) Tap into the pain points of rural demographic',
          list3:'3) Research insights to help find innovative solutions',
          list4:'4) Match your skills, knowledge and expertise with current human challenges and find projects that interest you',
          list5:'5) Donate time and money to causes you care most about', 
        },
      ];
      const listItems = detailing.map(detail => 
        <li>
        <div className='bex'>
            <div className='flex items-center justify-center text-white text-xl'>{detail.title}</div>
            <div>
              <ol type='1'>
                <li>{detail.list1}</li>
                <li>{detail.list2}</li>
                <li>{detail.list3}</li>
                <li>{detail.list4}</li>
                <li>{detail.list5}</li>
              </ol>
            </div>
          </div>
        </li>
        );
  return (
    <>
    <ul className='boxing'>{listItems}</ul>
      
    </>
  )
}
