import React from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_c2jj3s6",
      "template_ymsy0wr",
      form.current,
      "tUfLcHURtAIXUh5ac"
    );

    e.target.reset();
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div>
            <MdOutlineEmail style={{ fontSize: 48 }} />
            <Typography variant="h5">Email</Typography>
            <Typography variant="body1">
              shokirovbotirjon2003@gmail.com
            </Typography>
            <a href="mailto:shokirovbotirjon2003@gmail.com">Send a message</a>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <RiMessengerLine style={{ fontSize: 48 }} />
            <Typography variant="h5">Telegram</Typography>
            <Typography variant="body1">
              https://t.me/shokirov_botirjon
            </Typography>
            <a href="https://t.me/Shokirov_Botirjon">Send a message</a>
          </div>
        </Grid>
      </Grid>

      <form ref={form} onSubmit={sendEmail}>
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Your Full Name"
          name="name"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Your Email"
          type="email"
          name="email"
          required
        />
        <TextField
          fullWidth
          multiline
          rows={7}
          margin="normal"
          variant="outlined"
          label="Your Message"
          name="message"
          required
        />

        <Button type="submit" variant="contained" color="primary">
          Send a message
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
