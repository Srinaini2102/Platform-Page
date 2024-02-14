import { Carousel, Typography, Button } from '@material-tailwind/react';
import slider from './slider-1.jpg';
import slider2 from './slider-2.jpg';
import slider3 from './slider-3.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
export function CarouselWithContent() {
  const navigate = useNavigate();
  const navigateToValue = () => {
        
    navigate('/value-proposition'); 
  };
  return (
    <Carousel className="xl">
      <div className="relative h-full w-full">
        <img
          src={slider}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <motion.div
            className={'w-3/4 text-center md:w-2/4'}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.7,
              },
            }}
          >
            <Typography
              variant="h1"
              color="white"
              className="mb-3 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome to Smart Village Movement
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-3 text-xl md:text-2xl lg:text-2xl"
            >
              Open-Innovation Platform
            </Typography>
            <Typography
              variant="h1"
              color="yellow"
              className="mb-20 text-xl md:text-2xl lg:text-2xl"
            >
              You Can Help Solve Global Rural Challenges
            </Typography>
            <div className="flex justify-center gap-10 mb-10">
              <Button size="rounded-lg" color="yellow" text-color="teal" >
                Collaborate
              </Button>
              <Button size="rounded-lg" color="yellow" onClick={navigateToValue}>
                Value proposition
              </Button>
              <Button size="rounded-lg" color="yellow">
                Donate
              </Button>
            </div>
            <Typography
              variant="h1"
              color="yellow"
              className="mb-20 text-xl md:text-2xl lg:text-2xl"
            >
              Be a Changemaker
            </Typography>
          </motion.div>
        </div>
      </div>
      
      <div className="relative h-full w-full">
        <img
          src={slider2}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <motion.div className={'w-3/4 text-center md:w-2/4'}>
            <Typography
              variant="h1"
              color="white"
              className="mb-3 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome to Smart Village Movement
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-3 text-xl md:text-2xl lg:text-2xl"
            >
              Open-Innovation Platform
            </Typography>
            <Typography
              variant="h1"
              color="yellow"
              className="mb-20 text-xl md:text-2xl lg:text-2xl"
            >
              You Can Help Solve Global Rural Challenges
            </Typography>
            <div className="flex justify-center gap-10 mb-10">
              <Button size="rounded-lg" color="yellow" text-color="teal">
                Collaborate
              </Button>
              <Button size="rounded-lg" color="yellow" onClick={navigateToValue}>
                Value proposition
              </Button>
              <Button size="rounded-lg" color="yellow">
                Donate
              </Button>
            </div>
            <Typography
              variant="h1"
              color="yellow"
              className="mb-20 text-xl md:text-2xl lg:text-2xl"
            >
              Be a Changemaker
            </Typography>
          </motion.div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={slider3}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <motion.div className={'w-3/4 text-center md:w-2/4'}>
            <Typography
              variant="h1"
              color="white"
              className="mb-3 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome to Smart Village Movement
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-3 text-xl md:text-2xl lg:text-2xl"
            >
              Open-Innovation Platform
            </Typography>
            <Typography
              variant="h1"
              color="yellow"
              className="mb-20 text-xl md:text-2xl lg:text-2xl"
            >
              You Can Help Solve Global Rural Challenges
            </Typography>
            <div className="flex justify-center gap-10 mb-10">
              <Button size="rounded-lg" color="yellow" text-color="teal">
                Collaborate
              </Button>
              <Button size="rounded-lg" color="yellow" onClick={navigateToValue}>
                Value proposition
              </Button>
              <Button size="rounded-lg" color="yellow">
                Donate
              </Button>
            </div>
            <Typography
              variant="h1"
              color="yellow"
              className="mb-20 text-xl md:text-2xl lg:text-2xl"
            >
              Be a Changemaker
            </Typography>
          </motion.div>
        </div>
      </div>
    </Carousel>
  );
}
