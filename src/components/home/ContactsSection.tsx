import React from "react";
import Map from "./Map";
import { coordinatesMapsDnipro } from "../../constants";
import { useJsApiLoader } from "@react-google-maps/api";
import Contacts from "./Contacts";

interface ContactsSectionProps {}

const API_KEY = import.meta.env.VITE_API_KEY_GOOGLE_MAPS;
// const API_KEY = "AIzaSyDUXjYOTcrOosnFUeLJjyZhs8kqhGTyxKg";

const ContactsSection: React.FC<ContactsSectionProps> = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries: ["places"],
  });

  return (
    <section className="contacts-section">
      <div className="container">
        <h2>Contacts</h2>
      </div>
      {isLoaded ? <Map center={coordinatesMapsDnipro} /> : <h2>loading...</h2>}
      <div className="container">
        <Contacts />
      </div>
    </section>
  );
};

export default ContactsSection;
