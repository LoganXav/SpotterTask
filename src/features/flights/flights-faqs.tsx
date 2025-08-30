import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { faqs } from '@/constants/faqs';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FlightsFaqs() {
  return (
    <Box className="space-y-4">
      <Typography variant="h6">Frequently asked questions</Typography>

      <Box>
        {faqs.map((faq, index) => (
          <Accordion disableGutters key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="font-roboto text-text-primary/60 max-w-2xl whitespace-pre-line">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}

export default FlightsFaqs;
