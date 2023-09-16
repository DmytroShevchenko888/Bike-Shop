import * as React from "react";
import { getImageUrl } from "../../helpers/getImageUrl";

interface ContactsProps {}

const Contacts: React.FC<ContactsProps> = () => {
  return (
    <div className="contacts">
      <div className="contacts__item">
        <img src={getImageUrl("home", "phone.svg")} alt="phone" />
        <div className="contacts__item-text">
          <p>+38 (097) 42-119-29</p>
          <p>+38 (063) 79-183-39</p>
        </div>
      </div>
      <div className="contacts__item">
        <img src={getImageUrl("home", "location.svg")} alt="location" />
        <div className="contacts__item-text">
          <p>city Dnipro</p>
          <p>Glinka street, 2</p>
        </div>
      </div>
      <div className="contacts__item">
        <img src={getImageUrl("home", "mail.svg")} alt="mail" />
        <div className="contacts__item-text">
          <p>alexseva94@gmail.com</p>
          <p>dmytro.shevchenko08@gmail.com</p>
        </div>
      </div>
      <div className="contacts__item">
        <img src={getImageUrl("home", "calendar.svg")} alt="v" />
        <div className="contacts__item-text">
          <p>Seven days a week</p>
          <p>10:00-20:00</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
