import styles from "../pages/Profile.module.css";
import Button from "./Button";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";

export function NamesForm({
  setFullName,
  selectedImage,
  mainImage,
  setMainImage,
  setSelectedImage,

}) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [notSaved, setNotSaved] = useState(false);

  const handlePersonalInfoSave = (e) => {
    e.preventDefault();
    if (!fName || !lName || !phoneNumber) {
      setNotSaved(true);
      return;
    }
    setFullName(() => `${fName} ${lName}`);
    setMainImage(selectedImage);
    setNotSaved(false);
    console.log("Personal info saved successfully!");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFName("");
    setLName("");
    setSelectedImage(mainImage);
    setPhoneNumber(undefined);
    setNotSaved(false);
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handlePersonalInfoSave}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            placeholder="Ali"
            required
          />
        </div>
        <div>
          <label htmlFor="secondName">Second Name:</label>
          <input
            type="text"
            id="secondName"
            name="secondName"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            placeholder="Amin"
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <PhoneInput
            international
            defaultCountry="EG"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
        </div>
        <div className={styles.buttons}>
          <Button type="overview" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="continue" onClick={handlePersonalInfoSave}>
            Save
          </Button>
        </div>
      </form>
      {notSaved && (
        <div
          style={{
            color: "red",
            marginTop: "10px",
            fontSize: "1.5rem",
          }}
        >
          Please complete your personal info.
        </div>
      )}
      {!notSaved && fName && lName && phoneNumber && (
        <div
          style={{
            color: "green",
            marginTop: "10px",
            fontSize: "2rem",
          }}
        >
          ✔.
        </div>
      )}
    </div>
  );
}
