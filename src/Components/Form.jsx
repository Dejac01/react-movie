
import React from 'react'
import {useState, useEffect} from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to moviesearch prop, which is apps getMovie function
    props.moviesearch(formData.searchterm);
  };

  return (
    <div>
<Form>
<input type="text" />
<input type="submit" 
value="submit"/>

        </Form>


      </div>
  )
}

export default Form