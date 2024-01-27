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
import { useInput } from "../../hooks/useInput";
import { useFormValidation } from "../../hooks/useFormValidation";

export function Form({ className, setEndScreen }) {
  // input values
  const nameInput = useInput("", "name", "Alexei Ward");
  const emailInput = useInput("", "email", "alexeiward@mail.com");
  const phoneInput = useInput("", "phone", "+1 202-555-0136", "tel");
  const addressInput = useInput("", "address", "1137 Williams Avenue");
  const zipcodeInput = useInput("", "zipcode", "10001");
  const cityInput = useInput("", "city", "New York");
  const countryInput = useInput("", "country", "United States");
  // validation for paymet segment
  const [paymentValidation, setPaymentValidation] = useState(false);
  // checks if form is submitted or not
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);


  // auto updates errors after submit if there is a error
  const nameErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkName(nameInput.value) : [];
  }, [isAfterFirstSubmit, nameInput.value]);

  const emailErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkEmail(emailInput.value) : [];
  }, [isAfterFirstSubmit, emailInput.value]);

  const phoneErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkPhone(phoneInput.value) : [];
  }, [isAfterFirstSubmit, phoneInput.value]);

  const addressErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkAddress(addressInput.value) : [];
  }, [isAfterFirstSubmit, addressInput.value]);

  const zipcodeErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkZipcode(zipcodeInput.value) : [];
  }, [isAfterFirstSubmit, zipcodeInput.value]);

  const cityErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkCity(cityInput.value) : [];
  }, [isAfterFirstSubmit, cityInput.value]);

  const countryErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkCountry(countryInput.value) : [];
  }, [isAfterFirstSubmit, countryInput.value]);

  // checks if all inputs are filled correct then goes to end screen
  function submit(e) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);

    const nameResults = checkName(nameInput.value);
    const emailResults = checkEmail(emailInput.value);
    const phoneResults = checkPhone(phoneInput.value);
    const addressResults = checkAddress(addressInput.value);
    const zipcodeResults = checkZipcode(zipcodeInput.value);
    const cityResults = checkCity(cityInput.value);
    const countryResults = checkCountry(countryInput.value);

    // if all true go to end screen
    if (
      nameResults.length === 0 &&
      emailResults.length === 0 &&
      phoneResults.length === 0 &&
      addressResults.length === 0 &&
      zipcodeResults.length === 0 &&
      cityResults.length === 0 &&
      countryResults.length === 0 &&
      paymentValidation
    ) {
      setEndScreen(true);
      window.scrollTo(0, 0);
    }
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
              className={useFormValidation(
                isAfterFirstSubmit,
                nameErrors,
                styles.error,
                styles.succes
              )}
              errorMessage={nameErrors.join(", ")}
            >
              <label htmlFor="name">Name</label>
              <input {...nameInput} />
            </FormGroup>
            {/* email */}
            <FormGroup
              className={useFormValidation(
                isAfterFirstSubmit,
                emailErrors,
                styles.error,
                styles.succes
              )}
              errorMessage={emailErrors.join(", ")}
            >
              <label htmlFor="email">Email Address</label>
              <input {...emailInput} />
            </FormGroup>
          </FormRow>
          <FormRow>
            {/* phone */}
            <FormGroup
              className={useFormValidation(
                isAfterFirstSubmit,
                phoneErrors,
                styles.error,
                styles.succes
              )}
              errorMessage={phoneErrors.join(", ")}
            >
              <label htmlFor="phone">Phone Number</label>
              <input {...phoneInput} />
            </FormGroup>
          </FormRow>
        </FormSection>

        {/* SHIPPING */}
        <FormSection Title="Shipping Info">
          <FormRow>
            {/* address */}
            <FormGroup
              fullLength
              className={useFormValidation(
                isAfterFirstSubmit,
                addressErrors,
                styles.error,
                styles.succes
              )}
              errorMessage={addressErrors.join(", ")}
            >
              <label htmlFor="address">Address</label>
              <input {...addressInput} />
            </FormGroup>
          </FormRow>
          <FormRow>
            {/* zipcode */}
            <FormGroup
              className={useFormValidation(
                isAfterFirstSubmit,
                zipcodeErrors,
                styles.error,
                styles.succes
              )}
              errorMessage={zipcodeErrors.join(", ")}
            >
              <label htmlFor="zipcode">Zip Code</label>
              <input {...zipcodeInput} maxLength={20} />
            </FormGroup>
            {/* city */}
            <FormGroup
              className={useFormValidation(
                isAfterFirstSubmit,
                cityErrors,
                styles.error,
                styles.succes
              )}
              errorMessage={cityErrors.join(", ")}
            >
              <label htmlFor="city">City</label>
              <input {...cityInput} />
            </FormGroup>
          </FormRow>
          <FormRow>
            {/* country */}
            <FormGroup
              className={useFormValidation(
                isAfterFirstSubmit,
                countryErrors,
                styles.error,
                styles.succes
              )}
              errorMessage={countryErrors.join(", ")}
            >
              <label htmlFor="country">Country</label>
              <input {...countryInput} />
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
