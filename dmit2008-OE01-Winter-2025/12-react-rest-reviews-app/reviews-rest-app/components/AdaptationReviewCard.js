import Avatar from '@mui/material/Avatar';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

// api functions
import { deleteReview } from '@/utils/api/reviews'


export default function AdaptationReviewCard({id, rating, title, comment}) {

  const deleteButtonClickHandler = () => {
    return deleteReview(id)
  }

  return (
    <Card
      sx={{marginTop: 6}}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
            {rating}
          </Avatar>
        }
        action={
          <IconButton
            onClick={deleteButtonClickHandler}
          >
            <DeleteIcon />
          </IconButton>
        }
        title={
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        }

      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {comment}
        </Typography>
      </CardContent>
    </Card>
  );
}