import React from "react";
import {Article} from "../types/News";
import {
  Card, CardActions,
  CardContent,
  CardMedia,
  createStyles,
  Grid, Link,
  makeStyles,
  Typography
} from "@material-ui/core";
import {AccessTime, Person} from "@material-ui/icons";

interface ArticleProps {
  data: Article;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: 15,
      height: '100%'
    },
    media: {
      maxWidth: '100%',
      height: 200,
      objectFit: 'contain',
      resizeMode: 'contain',
      objectPosition: 'center'
    },
    container: {
      padding: 15
    },
    link: {
      textEmphasis: undefined,
      textDecoration: 'none',
      "&:hover": {
        textDecoration: 'underline'
      },
      color: 'inherit',
      marginLeft: 'auto'
    },
    justifyText: {
      textAlign: 'justify'
    }
  }));

const ArticleComponent: React.FC<ArticleProps> = ({data}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Card variant="outlined" className={classes.root} elevation={3}>
        <div className={classes.container}>
          <CardMedia
            className={classes.media}
            image={data.urlToImage}
            title={data.title}
          />
        </div>
        <CardContent>
          <Link href={data.url} target={'_blank'}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.justifyText}>
            {data.title}
            </Typography>
          </Link>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.justifyText}>
            {data.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container alignItems={'flex-end'} className={classes.root}>
            <Grid item xs>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <Person color={'secondary'}/>
                <Typography variant={"caption"} color={'textSecondary'}>{data.author}</Typography>
              </div>
            </Grid>
            <Grid item xs>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <AccessTime color={'secondary'}/>
                <Typography variant={"caption"} color={'textSecondary'}>{data.publishedAt}</Typography>
              </div>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ArticleComponent;
