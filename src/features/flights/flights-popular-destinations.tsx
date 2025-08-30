import Carousel from '@/components/carousel';
import { Box, Typography } from '@mui/material';

function FlightsPopularDestinations() {
  return (
    <Box className="space-y-4">
      <Typography variant="h6">
        Popular flight destinations from Ibadan
      </Typography>

      <Carousel slides={slides} />
    </Box>
  );
}

export default FlightsPopularDestinations;

const slides = [
  {
    title: 'Owerri',
    src: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTYvCPHW0oC7-U6p6cPCLsvXwVkCLBWp7HJFe8yv1FiVX7WXzBzZz9SMUqZo-LM84WN37DKmyKBC9ppkNuZLQDz6Bc-Qiq4voeeJqcBoUs',
  },
  {
    title: 'Abuja',
    src: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTYvCPHW0oC7-U6p6cPCLsvXwVkCLBWp7HJFe8yv1FiVX7WXzBzZz9SMUqZo-LM84WN37DKmyKBC9ppkNuZLQDz6Bc-Qiq4voeeJqcBoUs',
  },
  {
    title: 'Akure',
    src: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTYvCPHW0oC7-U6p6cPCLsvXwVkCLBWp7HJFe8yv1FiVX7WXzBzZz9SMUqZo-LM84WN37DKmyKBC9ppkNuZLQDz6Bc-Qiq4voeeJqcBoUs',
  },
  {
    title: 'Enugu',
    src: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTYvCPHW0oC7-U6p6cPCLsvXwVkCLBWp7HJFe8yv1FiVX7WXzBzZz9SMUqZo-LM84WN37DKmyKBC9ppkNuZLQDz6Bc-Qiq4voeeJqcBoUs',
  },
  {
    title: 'Calabar',
    src: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTYvCPHW0oC7-U6p6cPCLsvXwVkCLBWp7HJFe8yv1FiVX7WXzBzZz9SMUqZo-LM84WN37DKmyKBC9ppkNuZLQDz6Bc-Qiq4voeeJqcBoUs',
  },
];
