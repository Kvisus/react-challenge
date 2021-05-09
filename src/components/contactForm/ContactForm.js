import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        value={name} 
        onChange={(e)=> setName(e.target.value)}
        required
        placeholder="Contact Name" 
      />
      <input
        type = 'tel'
        value = {phone}
        onChange={(e)=> setPhone(e.target.value)}
        required
        placeholder = "Phone Number"
      />
      <input
        type = 'email'
        value = {email}
        onChange={(e)=>setEmail(e.target.value)}
        required
        placeholder = "Email"
      />
      <br />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
