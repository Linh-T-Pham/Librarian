import React from 'react';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    mainCard: {
      paddingTop: 40,
      paddingLeft: 300
    },
    card: {
      border: "2px solid gray",
      borderRadius: "10px",
      width: "800px",
      display: "flex",
      paddingLeft: 40,
      justifyContent: "space-between",
      fontSize: 30,
      fontFamily: "monospace"
    },
    image: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight: 40
    },
    wrapper: {
      paddingTop: 40,
      paddingBottom: 40
    },
    title: {
      fontSize: 40,
      paddingBottom: 20,
      textTransform: "uppercase",
      fontFamily: "monospace"
    }
  }));
  
  function BookCard(props) {
    const classes = useStyles();
    const { bookData } = props;
    console.log(bookData)
  
    return (
      <div className={classes.mainCard}>
        {Object.keys(bookData).map((isbn, idx) => {
          return (
            <div className={classes.card}>
              <div className={classes.wrapper}>
                <div className={classes.title}>{bookData[isbn].title}</div>
                <div>{isbn}</div>
                <div>
                  Author: {bookData[isbn].authors.map((author, i) => author.name)}
                </div>
                <div>Published: {bookData[isbn].publish_date}</div>
                <div>Pages: {bookData[isbn].number_of_pages}</div>
                <div>
                  Publisher:{" "}
                  {bookData[isbn].publishers.map((company) => company.name)}
                </div>
              </div>
              <div className={classes.image}>
                <img src={bookData[isbn].cover.medium} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default BookCard;
  