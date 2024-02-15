import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from '@material-tailwind/react';

export default function ProfileCard() {
  const card = [
    {
      name:"Dr. Anil Shah",
      description:"Executive Chairman, Smart Village Movement ",
      image:"/src/assets/Home_community/Anil.jpg",
    },
    {
      name:"Dr. Deepu Raithi",
      description: "Advisor to startups and business development executive ",
      image:"/src/assets/Home_community/DeepuRathi.jpg",
    },
    {
      name:"Prof. Muralikrishna Iyyanki ",
      description: "Professor ",
      image:"/src/assets/Home_community/Murali.jpg",
    },
    {
      name:"Ms. Anna Fitter ",
      description: "Director of Communication, SVM ",
      image:"/src/assets/Home_community/Anna-Fitter.jpg",
    },
    {
      name:"Mr. Ritesh Tandon ",
      description: "Chief Liaision Officer ",
      image:"/src/assets/Home_community/Ritesh.jpg",
    },
    {
      name:"Mr. Tulenam Laloo",
      description: "State Lead, Meghalaya",
      image:"/src/assets/Home_community/Tulenam.jpeg",
    },
    {
      name:"Mr. Divine Dhakar ",
      description: "Education Lead, SVM Meghalaya ",
      image:"/src/assets/Home_community/Divine.jpg",
    },
    {
      name:"Miss. Regia Kom",
      description:"Social Media & Marketing Lead",
      image:"/src/assets/Home_community/Regia.jpg",
    },
    {
      name:"Ms. Alvareen Kharwalang ",
      description: "Healthcare Lead SVM Meghalaya ",
      image:"/src/assets/Home_community/Alvareen.jpg",
    },
    {
      name:"Balahunlang Rapsang ",
      description: " ",
      image:" ",
    },

  ];
  const listItems = card.map(det =>
    <div className='card'>
        <img className="cardImage" src={det.image} alt="" />
        <h1 className='cardTitle'><b>{det.name}</b></h1>
        <p>{det.description}</p>
      </div>
    );
  return (
    <>
      <div className='community'>
      <h1 className='heading-community'>Community</h1>
      <ul className='flex ml-60 mr-60 items-center justify-between gap-10 flex-wrap pb-10'>{listItems}</ul>
      </div>
      

    </>
  );
}
