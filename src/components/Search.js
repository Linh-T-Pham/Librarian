import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    inputBox: {
      height: 30,
      width: 400,
      textAlign: 'center' 
    },

    searchBox: {
        paddingTop: 100,
        paddingLeft: 500
        
    }
  }));

export default function Search(props) {
    const classes = useStyles();
    const {onChange, onClick, input } = props;

    return(
        <div className={classes.searchBox}>
            <input
                className={classes.inputBox}
                placeholder="Enter an ISBN"
                value={input}
                onChange={(e) => onChange(e)}
            />
            <Link to={`/isbn/${input}`}>
                <Button  color="blue" onClick={onClick}>
                    Search
                </Button>
            </Link>
        </div>
    );
}