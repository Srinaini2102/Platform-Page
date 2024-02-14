import { CarouselWithContent } from '../components/Home/CarouselWIthContent';
import Cards from '../components/Home/Cards';
import VId from '../components/Home/VId';
import Categ from '../components/Home/Categ';
import BelowCarousel from '../components/Home/BelowCarousel';
import Meghalaya from '../components/Home/Meghalaya';

import RuralGC from '../components/Home/RuralGC';
import Newsletter from '../components/Home/Newsletter';
export default function Home() {
  return (
    <>
      <CarouselWithContent />
      <BelowCarousel />
      <VId />
      <Categ />
      <Meghalaya/>
      <RuralGC />
      <Cards />
      <Newsletter />
    </>
  );
}
