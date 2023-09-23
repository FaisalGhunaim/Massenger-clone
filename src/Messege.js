import { Card, CardContent, Typography } from "@mui/material";
import { forwardRef } from "react";

import React from "react";
import "./Message.css";
const Messege = forwardRef(({ text, username, mainUsername }, ref) => {
  const isUser = username === mainUsername;
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={`${isUser ? "message__userCard" : "message__gestCard"}`}>
        <CardContent>
          <Typography color="black" variant="h5" component="h2">
            {!isUser && `${username || 'unKnown User'}:`} {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Messege;
