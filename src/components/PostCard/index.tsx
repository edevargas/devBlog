import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345
        },
        header: {
            fontSize: 16
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        avatar: {
            backgroundColor: theme.palette.primary.main,
        },
    }),
);

type PostCardProps = {
    id: number
    title: string
    image: string
    date: string
    name: string
    lastname: string
    email: string,
    profilePhoto: string
}

const PostCard: React.FC<PostCardProps> = ({
    id,
    title,
    image,
    date,
    name,
    lastname,
    email,
    profilePhoto
}) => {
    const classes = useStyles();
    const AvatarContainer = () => (
        <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={profilePhoto} alt="Profile photo" />
        </Avatar>
    )

    return (
        <Link to={`/post/${id}`}>
            <Card className={classes.root}>
                <CardHeader
                    color="secondary"
                    className={classes.header}
                    avatar={<AvatarContainer />}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={`${name} ${lastname}`}
                    subheader={email}
                />
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={`Photo of ${title} post`}
                />
                <CardContent>
                    <Typography color="primary" component="h4">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {date}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Link>
    );
}

export default PostCard