import { useMemo, useState } from "react";
import { PaymentDetails } from "../PaymentDetails/PaymentDetails";
import { Summary } from "../Summary/Summary";
import styles from "./Form.module.css";
import {
  checkAddress,
  checkCity,
  checkCountry,
  checkEmail,
  checkName,
  checkPhone,
  checkZipcode,
} from "./validators";

export function Form({ className, setEndScreen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [paymentValidation, setPaymentValidation] = useState(false);
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);

  // auto updates errors after submit if there is a error
  const nameErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkName(name) : [];
  }, [isAfterFirstSubmit, name]);

  const emailErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkEmail(email) : [];
  }, [isAfterFirstSubmit, email]);

  const phoneErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkPhone(phone) : [];
  }, [isAfterFirstSubmit, phone]);

  const addressErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkAddress(address) : [];
  }, [isAfterFirstSubmit, address]);

  const zipcodeErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkZipcode(zipcode) : [];
  }, [isAfterFirstSubmit, zipcode]);

  const cityErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkCity(city) : [];
  }, [isAfterFirstSubmit, city]);

  const countryErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkCountry(country) : [];
  }, [isAfterFirstSubmit, country]);

  function submit(e) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);
    setEndScreen(true);
    window.scrollTo(0, 0);

    const nameResults = checkName(name);
    const emailResults = checkEmail(email);
    const phoneResults = checkPhone(phone);
    const addressResults = checkAddress(address);
    const zipcodeResults = checkZipcode(zipcode);
    const cityResults = checkCity(city);
    const countryResults = checkCountry(country);

    // // if all true go to end screen
    // if (
    //   nameResults.length === 0 &&
    //   emailResults.length === 0 &&
    //   phoneResults.length === 0 &&
    //   addressResults.length === 0 &&
    //   zipcodeResults.length === 0 &&
    //   cityResults.length === 0 &&
    //   countryResults.length === 0 &&
    //   paymentValidation
    // ) {
    //   setEndScreen(true)
    //   window.scrollTo(0,0)
    // }
  }
  return (
    <form
      onSubmit={submit}
      className={`${styles.form} ${className}`}
      noValidate
    >
      <div className={styles.checkout}>
        <h1 className={styles.title}>Checkout</h1>

        {/* BILLING */}
        <FormSection Title="Billing Details">
          <FormRow>
            {/* name */}
            <FormGroup
              className={`${nameErrors.length > 0 ? styles.error : ""} ${
                nameErrors.length === 0 && isAfterFirstSubmit
                  ? styles.succes
                  : ""
              }`}
              errorMessage={nameErrors.join(", ")}
            >
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alexei Ward"
              />
            </FormGroup>
            {/* email */}
            <FormGroup
              className={`${emailErrors.length > 0 ? styles.error : ""} ${
                emailErrors.length === 0 && isAfterFirstSubmit
                  ? styles.succes
                  : ""
              }`}
              errorMessage={emailErrors.join(", ")}
            >
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alexeiward@mail.com"
              />
            </FormGroup>
          </FormRow>
          <FormRow>
            {/* phone */}
            <FormGroup
              className={`${phoneErrors.length > 0 ? styles.error : ""} ${
                phoneErrors.length === 0 && isAfterFirstSubmit
                  ? styles.succes
                  : ""
              }`}
              errorMessage={phoneErrors.join(", ")}
            >
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                maxLength={15}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 202-555-0136"
              />
            </FormGroup>
          </FormRow>
        </FormSection>

        {/* SHIPPING */}
        <FormSection Title="Shipping Info">
          <FormRow>
            {/* address */}
            <FormGroup
              fullLength
              className={`${addressErrors.length > 0 ? styles.error : ""} ${
                addressErrors.length === 0 && isAfterFirstSubmit
                  ? styles.succes
                  : ""
              }`}
              errorMessage={addressErrors.join(", ")}
            >
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="1137 Williams Avenue"
              />
            </FormGroup>
          </FormRow>
          <FormRow>
            {/* zipcode */}
            <FormGroup
              className={`${zipcodeErrors.length > 0 ? styles.error : ""} ${
                zipcodeErrors.length === 0 && isAfterFirstSubmit
                  ? styles.succes
                  : ""
              }`}
              errorMessage={zipcodeErrors.join(", ")}
            >
              <label htmlFor="zipcode">Zip Code</label>
              <input
                id="zipcode"
                name="zipcode"
                type="text"
                maxLength={20}
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                placeholder="10001"
              />
            </FormGroup>
            {/* city */}
            <FormGroup
              className={`${cityErrors.length > 0 ? styles.error : ""} ${
                cityErrors.length === 0 && isAfterFirstSubmit
                  ? styles.succes
                  : ""
              }`}
              errorMessage={cityErrors.join(", ")}
            >
              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="New York"
              />
            </FormGroup>
          </FormRow>
          <FormRow>
            {/* country */}
            <FormGroup
              className={`${countryErrors.length > 0 ? styles.error : ""} ${
                countryErrors.length === 0 && isAfterFirstSubmit
                  ? styles.succes
                  : ""
              }`}
              errorMessage={countryErrors.join(", ")}
            >
              <label htmlFor="country">Country</label>
              <input
                id="country"
                name="country"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="United States"
              />
            </FormGroup>
          </FormRow>
        </FormSection>

        {/* Payment details*/}
        <PaymentDetails
          isAfterFirstSubmit={isAfterFirstSubmit}
          error={styles.error}
          succes={styles.succes}
          paymentValidation={setPaymentValidation}
        />
      </div>

      {/* SUMMARY */}
      <Summary />
    </form>
  );
}

export function FormSection({ Title, children }) {
  return (
    <>
      <div className={styles.section}>
        <p className={styles.subTitle}>{Title}</p>
        {...children}
      </div>
    </>
  );
}
export function FormRow({ children, className }) {
  return (
    <>
      <div className={`${styles.row} ${className}`}>{children}</div>
    </>
  );
}
export function FormGroup({ children, fullLength, className, errorMessage }) {
  return (
    <>
      <div
        className={`${styles.group} ${
          fullLength && styles.fullLength
        } ${className}`}
      >
        <p className={styles.errorMessage}>{errorMessage}</p>
        {children}
      </div>
    </>
  );
}
