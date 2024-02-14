import { motion } from 'framer-motion';
export default function Categ() {
  return (
    <>
      <h1 className="heading-community">Sectors</h1>
      <section className="Categs">
        <motion.section
          id="card1"
          className={'Category'}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.4,
            },
          }}
        >
          <svg width="170" height="170" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g data-name="47-Online Education"><path d="M43 48h-5v-2h5a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v38a3 3 0 0 0 3 3h5v2H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h38a5.006 5.006 0 0 1 5 5v38a5.006 5.006 0 0 1-5 5z"/><path d="M4 8h40v2H4zM5 4h2v2H5zM9 4h2v2H9zM41 4h2v2h-2zM23 29h2v7h-2z"/><path d="M24 30a1 1 0 0 1-.388-.078l-19-8a1 1 0 0 1 0-1.844l19-8a1.013 1.013 0 0 1 .776 0l19 8a1 1 0 0 1 0 1.844l-19 8A1 1 0 0 1 24 30zM7.577 21 24 27.915 40.423 21 24 14.085z"/><path d="M24 46a.99.99 0 0 1-.419-.092l-13-6A1 1 0 0 1 10 39V23h2v15.36l12 5.54 12-5.54V23h2v16a1 1 0 0 1-.581.908l-13 6A.99.99 0 0 1 24 46zM42 35h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2v-6h2v12a1 1 0 0 1-.293.707l-1 1A1 1 0 0 1 42 35zm-1-2h.586l.414-.414V29h-1zM22 20h4v2h-4z"/></g>
            
          </svg>
          <div className="card__content">
            <p className="card__title">Education</p>
            <p className="card__description">
              The Grand Challenges Present in the Education Sector
            </p>
          </div>
        </motion.section>
        
        <motion.section
          id="card1"
          className={'Category'}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.6,
            },
          }}
        >
          <svg width="170" height="170" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="cls-1" d="M6.27 22.5h7.57a4.77 4.77 0 0 0 3.38-1.4l4.71-4.71a2 2 0 0 0-2.86-2.87l-5.16 5.16H13a1.91 1.91 0 0 0 1.88-2.23 2 2 0 0 0-2-1.59H9.14l-.93-.46a4.66 4.66 0 0 0-5 .55 4.57 4.57 0 0 0-1.71 3.62v.11M12.96 18.68H8.18M5.32 1.5h1.91A4.77 4.77 0 0 1 12 6.27h-1.91A4.77 4.77 0 0 1 5.32 1.5z"/><path class="cls-1" d="M16.77 2.45h1.91a4.77 4.77 0 0 1-4.77 4.77H12a4.77 4.77 0 0 1 4.77-4.77z" transform="rotate(-180 15.34 4.84)"/><path class="cls-1" d="M12 10.09V6.27M7.3 14.06a4.77 4.77 0 0 1 9.47.8 4.21 4.21 0 0 1-.12 1.08"/></svg>
          <div className="card__content">
            <p className="card__title">Agriculture</p>
            <p className="card__description">
              The Grand Challenges present in the Agriculture Sector.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="card1"
          className={'Category'}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.8,
            },
          }}
        >
          <svg width="170" height="180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 11V22M4 22V11M14 22V17C14 16.4477 13.5523 16 13 16H11C10.4477 16 10 16.4477 10 17V22M9 4.5V2.1C9 2.04477 8.95523 2 8.9 2H6.1C6.04477 2 6 2.04477 6 2.1V7M1 22H23M2.2606 11H21.7394C21.8311 11 21.8744 10.887 21.8063 10.8257L12.669 2.60207C12.2887 2.25979 11.7113 2.25979 11.331 2.60207L2.1937 10.8257C2.12558 10.887 2.16895 11 2.2606 11Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</svg>

          <div className="card__content">
            <p className="card__title">Household</p>
            <p className="card__description">
              The Grand Challenges present in the Household Sector.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="card1"
          className={'Category'}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 1,
            },
          }}
        >
          <svg width="170" height="170" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 22L1.25192 18.6279C1.08766 18.3815 1 18.092 1 17.7958V13.25C1 12.5596 1.55964 12 2.25 12C2.94036 12 3.5 12.5596 3.5 13.25V16.0211C3.5 16.1162 3.52712 16.2093 3.57817 16.2895L3.79872 16.6361M5.44444 19.2222L3.79872 16.6361M8.22222 21.9999V19.4235C8.22222 18.93 8.07612 18.4474 7.80234 18.0368L6.79337 16.5233C6.34922 15.8571 5.46013 15.6572 4.77355 16.0691L3.79872 16.6361M20.7223 22L22.782 18.6088C22.9246 18.3741 23 18.1048 23 17.8301V13.2499C23 12.5596 22.4404 12 21.7501 12C21.0598 12 20.5001 12.5596 20.5001 13.2499V16.0211C20.5001 16.1162 20.473 16.2093 20.422 16.2895L20.4166 16.298M18.5557 19.2222L20.4166 16.298M16 22V19.0903C16 18.5967 16.1461 18.1142 16.4199 17.7035L17.4289 16.1901C17.873 15.5238 18.7621 15.3239 19.4487 15.7359L20.4166 16.298M12.9999 2C13.5521 2 13.9999 2.44772 13.9999 3V5.90014C13.9999 5.95536 14.0446 6.00013 14.0999 6.00013L17 6.00014C17.5523 6.00014 18 6.44785 18 7.00014V9.00013C18 9.55242 17.5523 10.0001 17 10.0001H14.0999C14.0446 10.0001 13.9999 10.0449 13.9999 10.1001V13C13.9999 13.5523 13.5521 14 12.9999 14H10.9999C10.4476 14 9.99985 13.5523 9.99985 13V10.1001C9.99985 10.0449 9.95508 10.0001 9.89985 10.0001H7.00005C6.44776 10.0001 6.00005 9.55242 6.00005 9.00013V7.00013C6.00005 6.44785 6.44776 6.00013 7.00005 6.00013L9.89985 6.00013C9.95508 6.00013 9.99985 5.95536 9.99985 5.90014V3C9.99985 2.44771 10.4476 2 10.9999 2H12.9999Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</svg>

          <div className="card__content">
            <p className="card__title">Healthcare</p>
            <p className="card__description">
              The Grand Challenges present in the Healthcare Sector.
            </p>
          </div>
        </motion.section>
      </section>
    </>
  );
}
