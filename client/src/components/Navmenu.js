import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    media: {
        height: 500,
        width: 650,

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


function NavbarM(props) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static" >
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Recipes And Stories
          </Typography>
                        <Typography variant="h6" className={classes.title}>
                            "People who like to eat ... are always the best."
          </Typography>
                        <div>
                            {localStorage.getItem("token") !== null ? (
                                <Button onClick={() => { localStorage.removeItem("token"); props.history.push("/signin"); }} variant="contained" color="primary">Logout</Button>
                            ) : (
                                    <div>
                                        <Link to="/signin">
                                            <Button variant="contained" color="primary">
                                                Sign_In</Button>
                                        </Link>
                                        <Link to="/signup">
                                            <Button variant="contained" color="primary">
                                                Sign_Up</Button>
                                        </Link>
                                    </div>
                                )}
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
            <div style={{ display: "flex", margin:"20px", padding:"10px" }}>
                <div>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://storenotrefamilleprod.blob.core.windows.net/images/cms/recette/12592/12592_large.jpg"
                                title="Vegetarian spinach lasagna" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Recipe 1
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A vegetarian lasagna that will please everyone. 4.5/5 (39 votes)
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to="/signup">
                                <Button size="small" color="primary">
                                    See More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://timeincsecure-a.akamaihd.net/rtmp_uds/429048911/201903/2985/429048911_6016160459001_6016109288001-vs.jpg?pubId=429048911&videoId=6016109288001"
                                title="Thai soup" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Recipe 2
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                            The real recipe for Thai soup, like at a restaurant. You will find all the Asian ingredients
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to="/signup">
                                <Button size="small" color="primary">
                                    See More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://i2.wp.com/www.sugarspunrun.com/wp-content/uploads/2019/01/Best-Cream-Puff-Recipe-1-of-1-4-500x454.jpg"
                                title=" Cream puff" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Recipe 3
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    These cream puffs are the ultimate pastry-case dessert to make at home.
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to="/signup">
                                <Button size="small" color="primary">
                                    See More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Chocolate-Pudding-CMS.jpg"
                                title=" Creamy chocolate pudding " />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Recipe 4
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    With the addition of banana, avocado and yogurt, this delicious pudding is creamy and nutritious.
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to="/signup">
                                <Button size="small" color="primary">
                                    See More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://img-3.journaldesfemmes.fr/92LdnZIiYo61kzKD7p8A3mApTZQ=/800x600/smart/d306e20680124dd5a6caef6045182436/recipe-jdf/10021897.jpg"
                                title=" Tiramisu " />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Recipe 5
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Discover the essential recipe for tiramisu, a creamy and creamy Italian dessert
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to="/signup">
                                <Button size="small" color="primary">
                                    See More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://img.cuisineaz.com/400x320/2016-06-07/i91997-milkshake-a-la-grenadine.jpg"
                                title="Grenadine Milkshake " />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Recipe 6
          </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    There is no disguising it. This is the perfect milkshake
          </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to="/signup">
                                <Button size="small" color="primary">
                                    See More</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <Tooltip style={{ textAlign: "center" }}>
                <Typography variant="body2" color="textSecondary" component="p" >
                    Recipes And Stories.  Copyright ©  2020
          </Typography>
            </Tooltip>
        </div>
    );
}
export default withRouter(NavbarM);
