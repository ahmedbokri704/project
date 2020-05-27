import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Home() {
  const classes = useStyles();
  const [email, setEmail] = useState("");

  useEffect(() => {
    var token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    setEmail(decoded.email);
  }, [email]);


  return (
    <div>
      {/* <AppBar position="static" >
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
          </Toolbar>
            </AppBar> */}
   <div>
          <h1>My profile</h1>
          <h2>Hello {email}</h2>
          </div>
          </div>
          
  );
}

export default Home;
