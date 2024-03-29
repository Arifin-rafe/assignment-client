
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React from "react";

const Faq = () => {
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className='grid grid-cols-1 md:flex gap-10 mt-10 justify-center'>
      <img className='w-96' src="../../../public/images/assi-mail.jpg" alt="" />
      <div className='w-auto'>
        <div className="mb-10 ">
          <h3 className='text-5xl font-bold text-center text-green-700'>FAQ</h3>
          <Accordion open={alwaysOpen}>
            <AccordionHeader onClick={handleAlwaysOpen}>What is This website for?</AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
              ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              How to submit assignment
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
              ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              Is this website made for beginners
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
              ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>

  );
}


export default Faq;