import { useMemo, useState } from "react";
import { FormGroup, FormRow, FormSection } from "../Form/Form";
import { checkEMoneyPin, checkEMoneyNumber } from "./validators";
import styles from "./PaymentDetails.module.css";
import { useFormValidation } from "../../hooks/useFormValidation";
import { useInput } from "../../hooks/useInput";

export function PaymentDetails({
  isAfterFirstSubmit,
  error,
  succes,
  paymentValidation,
}) {
  const [radioValue, setRadioValue] = useState("pin");
  const eMoneyNumber = useInput("", "e-money-number", "238521993");
  const eMoneyPin = useInput("", "e-money-pin", "6891");

  
  const eMoneyNumberErrors = useMemo(() => {
    return isAfterFirstSubmit &&  radioValue === "pin"
      ? checkEMoneyNumber(eMoneyNumber.value)
      : [];
  }, [isAfterFirstSubmit, eMoneyNumber.value]);

  const eMoneyPinErrors = useMemo(() => {
    return isAfterFirstSubmit &&  radioValue === "pin"
      ? checkEMoneyPin(eMoneyPin.value)
      : [];
  }, [isAfterFirstSubmit, eMoneyPin.value]);

  function validatePin() {
    const eMoneyPinResults = checkEMoneyPin(eMoneyPin.value);
    const eMoneyNumberResults = checkEMoneyNumber(eMoneyNumber.value);

    paymentValidation(false);

    if (
      radioValue === "pin" &&
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
                checked={radioValue === "pin"}
                value="pin"
                onClick={() => validatePin}
                onChange={(e) => setRadioValue(e.target.value)}
              />
              <label htmlFor="e-money">e-Money</label>
            </div>
            <div className={styles.radioButton}>
              <input
                type="radio"
                id="cash-on-delivery"
                name="payment"
                checked={radioValue === "cash"}
                value="cash"
                onClick={() => paymentValidation(true)}
                onChange={(e) => setRadioValue(e.target.value)}
              />
              <label htmlFor="cash-on-delivery">Cash on Delivery</label>
            </div>
          </div>
        </FormGroup>

        {/* PAYMENT VALUES  */}
        {radioValue === "pin" ? (
          <FormRow>
            <FormGroup
              className={useFormValidation(
                isAfterFirstSubmit,
                eMoneyNumberErrors,
                error,
                succes
              )}
              errorMessage={eMoneyNumberErrors.join(", ")}
            >
              <label htmlFor="e-money-number">e-Money Number</label>
              <input {...eMoneyNumber} maxLength={9} />
            </FormGroup>
            <FormGroup
              className={useFormValidation(
                isAfterFirstSubmit,
                eMoneyPinErrors,
                error,
                succes
              )}
              errorMessage={eMoneyPinErrors.join(", ")}
            >
              <label htmlFor="e-money-pin">e-Money PIN</label>
              <input {...eMoneyPin} maxLength={4} />
            </FormGroup>
          </FormRow>
        ) : (
          <div
            className={`${styles.cashPayment} ${
              radioValue === "cash" ? styles.active : ""
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
