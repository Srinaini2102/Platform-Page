import React from 'react'
import {
    Collapse,
    Button,
    Card,
    Typography,
    CardBody,
  } from "@material-tailwind/react";
export default function Boxes2() {
    const values = [
        {
            heading:'Efficient Co Invitation',
            desc:'Through crowd-sourcing ideas internally and externally, you can efficiently get more diverse contributions than you could ever get on your own.',
        },
        {
            heading:'Unbiased Inputs',
            desc:'Collaborators and participants don’t know what your organization knows and provide you with fresh, external, and unbiased opinions and ideas. Out-of-box thinking from various industries have often created spectacular results',
        },
        {
            heading:'Open Innovation',
            desc:'Collaborations show what existing projects with multiple parties have already been established within the Smart Village Movement and what impact was created. Moreover, it gives other participants an understanding of how their progress, learnings, and challenges have evolved and provides them the opportunity to plug in and collaborate to perfect the solution if necessary.',
        },
        {
            heading:'Global & Local Insights',
            desc:'The internationality of the community gives you many different perspectives on the same challenge. At the same time, local insights and real-time feedback provide understanding of what works and what doesn’t in the current and unique village ecosystem.',
        },
        {
            heading:'Cross Sector / Industry',
            desc:'The variety of rural grand challenges and projects on our platform activates people with interdisciplinary backgrounds and experience for creative results.',
        },
        {
            heading:'Focus and Abstraction',
            desc:'At SVM we utilize aspects of both types of thinking to come up with solutions. Why a task has to be performed is considered first, before we plan how it is to be done. Though our abstract reasoning and business model innovations from knowledge partners help thinking about ideas, principles, and objects in novel ways, our concrete reasoning and problem solving is tied to specific observations and experiences from the field.',
        },
    ];
    const [open, setOpen] = React.useState(false);
 
    const toggleOpen = () => setOpen((cur) => !cur);
    const listItems = values.map(value => 
        <li>
            <div >
            <Button onClick={toggleOpen}>{value.heading}</Button>
      <Collapse open={open}>
        <Card className="my-4 mx-auto w-120">
          <CardBody>
            <Typography>
              {value.desc}
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
            </div>
        </li>
        );
  return (
    <><ul className='hey'>{listItems}</ul></>
  )
}
