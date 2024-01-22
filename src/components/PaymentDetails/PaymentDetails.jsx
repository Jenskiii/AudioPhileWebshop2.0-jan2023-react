import { useMemo, useState } from "react";
import { FormGroup, FormRow, FormSection } from "../Form/Form";
import { checkEMoneyPin, checkEMoneyNumber } from "./validators";
import styles from "./PaymentDetails.module.css";

export function PaymentDetails({
  isAfterFirstSubmit,
  error,
  succes,
  paymentValidation,
}) {
  const [value, setValue] = useState("pin");
  const [eMoneyPin, setEMoneyPin] = useState("");
  const [eMoneyNumber, setEMoneyNumber] = useState("");

  const eMoneyNumberErrors = useMemo(() => {
    return isAfterFirstSubmit && value === "pin"
      ? checkEMoneyNumber(eMoneyNumber)
      : [];
  }, [isAfterFirstSubmit, eMoneyNumber]);

  const eMoneyPinErrors = useMemo(() => {
    return isAfterFirstSubmit && value === "pin"
      ? checkEMoneyPin(eMoneyPin)
      : [];
  }, [isAfterFirstSubmit, eMoneyPin]);

  function validatePin() {
    const eMoneyPinResults = checkEMoneyPin(eMoneyPin);
    const eMoneyNumberResults = checkEMoneyNumber(eMoneyNumber);

    paymentValidation(false);

    if (
      value === "pin" &&
      eMoneyPinResults === 0 &&
      eMoneyNumberResults === 0
    ) {
      paymentValidation(true);
    }
  }

  return (
    <>
      <FormSection Title="Payment Details">
        <FormGroup className={styles.group}>
          <label htmlFor="address">Payment Method</label>
          <div className={styles.radioContainer}>
            <div className={styles.radioButton}>
              <input
                type="radio"
                id="e-money"
                name="payment"
                checked={value === "pin"}
                value="pin"
                onClick={() => validatePin}
                onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="e-money">e-Money</label>
            </div>
            <div className={styles.radioButton}>
              <input
                type="radio"
                id="cash-on-delivery"
                name="payment"
                checked={value === "cash"}
                value="cash"
                onClick={() => paymentValidation(true)}
                onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="cash-on-delivery">Cash on Delivery</label>
            </div>
          </div>
        </FormGroup>

        {/* PAYMENT VALUES  */}
        {value === "pin" ? (
          <FormRow>
            <FormGroup
              className={`${eMoneyNumberErrors.length > 0 ? error : ""} ${
                eMoneyNumberErrors.length === 0 && isAfterFirstSubmit
                  ? succes
                  : ""
              }`}
              errorMessage={eMoneyNumberErrors.join(", ")}
            >
              <label htmlFor="e-money-number">e-Money Number</label>
              <input
                id="e-money-number"
                name="e-money-number"
                maxLength={9}
                type="text"
                value={eMoneyNumber}
                onChange={(e) => setEMoneyNumber(e.target.value)}
                placeholder="238521993"
              />
            </FormGroup>
            <FormGroup
              className={`${eMoneyPinErrors.length > 0 ? error : ""} ${
                eMoneyPinErrors.length === 0 && isAfterFirstSubmit ? succes : ""
              }`}
              errorMessage={eMoneyPinErrors.join(", ")}
            >
              <label htmlFor="e-money-pin">e-Money PIN</label>
              <input
                id="e-money-pin"
                name="e-money-pin"
                maxLength={4}
                type="text"
                value={eMoneyPin}
                onChange={(e) => setEMoneyPin(e.target.value)}
                placeholder="6891"
              />
            </FormGroup>
          </FormRow>
        ) : (
          <div
            className={`${styles.cashPayment} ${
              value === "cash" ? styles.active : ""
            }`}
          >
            <img
              src="/assets/checkout/icon-cash-on-delivery.svg"
              alt="icon cash-on-delivery"
            />
            <p>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </FormSection>
    </>
  );
}
