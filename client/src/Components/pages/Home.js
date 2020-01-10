import React from "react";
import PropTypes from "prop-types";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";

const Home = props => {
  return (
    <div className="grid-2">
      <ContactForm />
      <div>
        {" "}
        <Contacts />
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
