import React, { useState } from "react";
import { Modal, Box, Button, TextField, Grid, Typography } from "@mui/material";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CreateUserModal({ open, handleClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/v2/users",
        formData,
      );

      console.log("User created successfully:", response.data);
      // Handle success, e.g., show success message, clear form, etc.
      window.location.reload();
    } catch (error) {
      console.error(
        "Failed to create user:",
        error.response?.data || error.message,
      );
      // Handle errors, e.g., show error message
    }

    handleClose(); // Close the modal or form
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="create-user-modal-title"
      aria-describedby="create-user-modal-description"
    >
      <Box sx={style}>
        <Typography id="create-user-modal-title" variant="h6" component="h2">
          Create User
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
}
