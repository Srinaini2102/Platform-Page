import Pic1 from '../../assets/Grand challenges/1.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import turmeric from '../../assets/turmeric.jpg'
import horticulture from '../../assets/horticulture.jpg'
import digital from '../../assets/digital.jpg'
export default function CardSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="RC">
        <h1 className="heading-community">Rural Grand Challenges</h1>

        <div className="w-3/4 m-auto">
          <div className="mt-20 ">
            <Slider {...settings}>
              {data.map( det => (
                <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-60">
                  <img
                    src={det.img}
                    alt="card-image"
                    width='400px'
                    
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {det.name}
                  </Typography>
                  <Typography>
                    {det.review}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button><a href={det.anchor}>Read More</a></Button>
                </CardFooter>
              </Card>
              ))}
            </Slider>
          </div>
        </div>
        <h1 className="heading-community">Pilot Projects</h1>
        <div className="w-3/4 m-auto">
          <div className="mt-20 ">
            <Slider {...settings}>
              {data2.map( det => (
                <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-60">
                  <img
                    src={det.img}
                    alt="card-image"
                    width='400px'
                    
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {det.name}
                  </Typography>
                  <Typography>
                    {det.review}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button><a href={det.anchor}>Read More</a></Button>
                </CardFooter>
              </Card>
              ))}
            </Slider>
          </div>
        </div>
        <h1 className="heading-community">Student Projects</h1>
        <div className="w-3/4 m-auto">
          <div className="mt-20 ">
            <Slider {...settings}>
              {data3.map( det => (
                <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-60">
                  <img
                    src={det.img}
                    alt="card-image"
                    width='400px'
                    
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {det.name}
                  </Typography>
                  <Typography>
                    {det.review}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button><a href={det.anchor}>Read More</a></Button>
                </CardFooter>
              </Card>
              ))}
            </Slider>
          </div>
        </div>
        <h1 className="heading-community">Corporate Partners</h1>
        <div className="w-3/4 m-auto">
          <div className="mt-20 ">
            <Slider {...settings}>
              {data4.map( det => (
                <Card className="mt-6 w-96">
                <CardHeader color="white" className="relative h-60">
                  <img
                    src={det.img}
                    alt="card-image"
                    width='400px'
                    
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {det.name}
                  </Typography>
                  
                </CardBody>
                <CardFooter className="pt-0">
                  <Button><a href={det.anchor}>Read More</a></Button>
                </CardFooter>
              </Card>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    name: 'Turmeric',
    img: '/src/assets/turmeric.jpg',
    review: 'How can Meghalaya market its spice treasure “turmeric” to global...',
    anchor:"/details/65ca13d77d462abcc25591ad",
  },
  {
    name: 'Horticulture',
    img: '/src/assets/horticulture.jpg',
    review: 'Horticulture: How can Meghalaya access global markets to distribute their..',
    anchor:"/details/65cc7bc5cbc1cfc501ba3f49",
  },
  {
    name: 'Digital Healthcare',
    img: '/src/assets/digital.jpg',
    review: 'Healthcare: How can high quality “AI-led healthcare services” be made...',
    anchor:"/details/65cc7cbfcbc1cfc501ba3f4a",
  },
];
const data2 = [
  {
    name: 'Waste Management',
    img: '/src/assets/waste.jpg',
    anchor:"/research-project/65cc8547cbc1cfc501ba3f55",
    review: 'ProjectType: Research',
  },
  {
    name: 'Access to Clean Cooking Fuel',
    img: '/src/assets/cleanFuel.jpg',
    anchor:"/research-project/65cc8547cbc1cfc501ba3f55",
    review: 'ProjectType: Research',
  },
  {
    name: 'Affordable Housing',
    img: '/src/assets/housing.jpg',
    anchor:"/research-project/65cc8547cbc1cfc501ba3f55",
    review: 'ProjectType: Research',
  },
];
const data3 = [
  {
    name: 'Salesforce Trailblazers Labs',
    img: '/src/assets/salesforce.jpg',
    anchor:"/village-projects",
    review: 'Salesforce, headquartered in San Francisco, California, is setting up two Trailblazer labs in two selected Smart Village Movement pilot villages in the East Khasi Hills District,..',
  },
  {
    name: 'Gramin Representative arrival for ground assessment',
    img: '/src/assets/gramin.avif',
    anchor:"/village-project/65cce272a3ff5a5d14a9ddb4",
    review: 'Activity Date: 19-Jan-2021',
    
  },
  {
    name: 'Hygge Energy Microgrid',
    img: '/src/assets/hygge.jpg',
    anchor:"/research-project/65cc8547cbc1cfc501ba3f55",
    review: 'ProjectType: Collaboration',
  },
];
const data4 = [
  {
    name: 'Tulaa',
    img: '/src/assets/tulaa.png',
    anchor:"/technologies/65cba5cd7d462abcc2146578 ",
    review: 'Salesforce, headquartered in San Francisco, California, is setting up two Trailblazer labs in two selected Smart Village Movement pilot villages in the East Khasi Hills District,..',
  },
  {
    name: 'Doctor on Demand',
    img: '/src/assets/dr.png',
    anchor:"/technologies/65cba5cd7d462abcc214657a",
    review: 'Activity Date: 19-Jan-2021',
  },
  {
    name: 'Waste Ventures India',
    img: '/src/assets/wasteventures.png',
    anchor:"/technologies/65cba5cd7d462abcc214657e ",
    review: 'ProjectType: Collaboration',
  },
];


