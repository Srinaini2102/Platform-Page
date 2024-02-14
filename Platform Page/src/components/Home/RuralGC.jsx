import Pic1 from '../../assets/Grand challenges/1.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
              {data.map((d, i) => (
                <div
                  className="bg-yellow h-[450px] text-black rounded-xl"
                  key={i}
                >
                  <div className="h-56 rounded-t-xl flex justify-center items-center">
                    <img src={d.img} alt="" className="h-44 w-44" />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-xl font-semibold">{d.name}</p>
                    <p>{d.review}</p>
                    <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <h1 className="heading-community">Pilot Projects</h1>
        <div className="w-3/4 m-auto">
          <div className="mt-20 ">
            <Slider {...settings}>
              {data.map((d, i) => (
                <div
                  className="bg-yellow h-[450px] text-black rounded-xl"
                  key={i}
                >
                  <div className="h-56 rounded-t-xl flex justify-center items-center">
                    <img src={d.img} alt="" className="h-44 w-44" />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-xl font-semibold">{d.name}</p>
                    <p>{d.review}</p>
                    <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <h1 className="heading-community">Student Projects</h1>
        <div className="w-3/4 m-auto">
          <div className="mt-20 ">
            <Slider {...settings}>
              {data.map((d, i) => (
                <div
                  className="bg-yellow h-[450px] text-black rounded-xl"
                  key={i}
                >
                  <div className="h-56 rounded-t-xl flex justify-center items-center">
                    <img src={d.img} alt="" className="h-44 w-44" />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-xl font-semibold">{d.name}</p>
                    <p>{d.review}</p>
                    <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <h1 className="heading-community">Corporate Partners</h1>
        <div className="w-3/4 mr-auto ml-auto">
          <div className="mt-20 mb-0">
            <Slider {...settings}>
              {data.map((d, i) => (
                <div
                  className="bg-yellow h-[450px] text-black rounded-xl"
                  key={i}
                >
                  <div className="h-56 rounded-t-xl flex justify-center items-center">
                    <img src={d.img} alt="" className="h-44 w-44" />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-xl font-semibold">{d.name}</p>
                    <p>{d.review}</p>
                    <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                      Read More
                    </button>
                  </div>
                </div>
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
    name: 'Srinaini',
    img: "https://res.cloudinary.com/duad230uy/image/upload/v1707885862/Technologies/hukpbliiqbbsz4ez5is7.png",
    review: 'Lorem ipsum dolor',
  },
  {
    name: 'Srinaini',
    img: "https://res.cloudinary.com/duad230uy/image/upload/v1707885862/Technologies/hukpbliiqbbsz4ez5is7.png",
    review: 'Lorem ipsum dolor',
  },
  {
    name: 'Srinaini',
    img: "https://res.cloudinary.com/duad230uy/image/upload/v1707885862/Technologies/hukpbliiqbbsz4ez5is7.png",
    review: 'Lorem ipsum dolor',
  },
];
