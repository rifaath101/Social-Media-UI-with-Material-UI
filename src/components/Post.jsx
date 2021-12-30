import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
    [theme.breakpoints.down('sm')]: {
      height: 150,
    },
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}))

export default function Post() {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://images.unsplash.com/photo-1620358545167-089b238da7e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhpZ2glMjByZXNvbHV0aW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
          title='Fox'
        />
        <CardContent>
          <Typography gutterBottom variant='h5'>
            My First Post
          </Typography>
          <Typography variant='body2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut a ipsa
            beatae? Accusantium, ad voluptate repudiandae mollitia quasi totam
            magnam qui consequuntur labore est autem consequatur, ullam iste.
            Numquam, odit.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
