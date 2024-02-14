import { motion } from 'framer-motion';
import Picture from '../../assets/Picture1.png';
export default function BelowCarousel() {
  return (
    <>
      <section className="sec">
        <motion.div
          className={'divone'}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.5,
            },
          }}
        >
          <img src={Picture} alt="" />
        </motion.div>
        <div className="divtwo">
          <motion.div
            className={'text1'}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
          >
            <h3>
              Experts From Government, Corporates, Academia and Rural
              Communities Collaborate to Solve Rural Grand Challenges With an
              Aim to Develop the Underprivileged Rural Communities of the World
            </h3>
          </motion.div>
          <div className="text2">
            <p>
              Join us to create opportunities and solutions for sustainable
              rural socio-economic development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
