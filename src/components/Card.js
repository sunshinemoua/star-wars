import React from "react";
import classes from "./Card.module.css";

const Card = ({ children, ...props }) => {
  return (
    <div className={classes["flip-card"]}>
      <div className={classes["flip-card-inner"]}>
        <div className={classes["flip-card-front"]}>
          <div className={classes.card} {...props}>
            <div className={classes["flip-card-back"]}></div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
