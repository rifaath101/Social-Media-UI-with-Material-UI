import {
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: 'sticky',
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: '#555',
  },
}))

export default function Rightbar() {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Typography gutterBottom className={classes.title}>
        Online Friends
      </Typography>
      <AvatarGroup max={4}>
        <Avatar
          alt='Remy Sharp'
          src='https://v4.mui.com/static/images/avatar/1.jpg'
        />
        <Avatar
          alt='Travis Howard'
          src='https://v4.mui.com/static/images/avatar/2.jpg'
        />
        <Avatar
          alt='Cindy Baker'
          src='https://v4.mui.com/static/images/avatar/3.jpg'
        />
        <Avatar
          alt='Agnes Walker'
          src='https://v4.mui.com/static/images/avatar/4.jpg'
        />
        <Avatar
          alt='Trevor Henderson'
          src='https://v4.mui.com/static/images/avatar/5.jpg'
        />
      </AvatarGroup>
      <Typography
        gutterBottom
        className={classes.title}
        style={{ marginTop: 20 }}
      >
        Gallery
      </Typography>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        <ImageListItem>
          <img
            src='https://v4.mui.com/static/images/image-list/burgers.jpg'
            alt='burger'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://v4.mui.com/static/images/image-list/breakfast.jpg'
            alt='breakfast'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://v4.mui.com/static/images/image-list/hats.jpg'
            alt='hat'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://v4.mui.com/static/images/image-list/vegetables.jpg'
            alt='veggies'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://www.iata.org/contentassets/d7c512eb9a704ba2a8056e3186a31921/cargo_live_animals_parrot.jpg'
            alt='parrot'
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg'
            alt='lion'
          />
        </ImageListItem>
      </ImageList>
    </Container>
  )
}
