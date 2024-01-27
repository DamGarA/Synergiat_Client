import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Informacion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <h2>API</h2>
        </AccordionSummary>
        <AccordionDetails>
            <strong>Deploy:</strong> Cyclic <br />
            <strong>DB:</strong> MongoDB Atlas <br />
            <strong>Github repositorio:</strong> <a target='blank' href="https://github.com/DamGarA/Synergiat_API">https://github.com/DamGarA/Synergiat_API</a>
        </AccordionDetails>

      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <h2>CLIENTE</h2>
        </AccordionSummary>
        <AccordionDetails>
            <strong>Deploy:</strong> Vercel <br />
            <strong>Github repositorio:</strong> <a target='blank' href="https://github.com/DamGarA/Synergiat_Client">https://github.com/DamGarA/Synergiat_Client</a>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <h2>ACERCA DE MI</h2>
        </AccordionSummary>
        <AccordionDetails>
            <strong>Email:</strong> damiangarciaabreu@gmail.com <br />
            <strong>Telefono:</strong> (+54) 221-525-1857 <br />
            <a target='blank' href="https://www.linkedin.com/in/dami%C3%A1n-garc%C3%ADa-abreu-381236255/">Linkedin</a> <br />
            <a target='blank' href="https://damiangarciaabreu.vercel.app/">Portfolio</a> <br />
            La Plata, Buenos Aires, Argentina
        </AccordionDetails>
      </Accordion>
    </div>
  );
}