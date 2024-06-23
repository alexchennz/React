import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstNameValue,
    hasError: enteredFirstNameHasError,
    isValid: enteredFirstNameValueIsValid,
    valueChangeHandler: enteredFirstNameChangeHandler,
    blurHandler: enteredFirstNameBlurHandler,
    reset: resetEntereFirstName
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredLastNameValue,
    hasError: enteredLastNameHasError,
    isValid: enteredLastNameValueIsValid,
    valueChangeHandler: enteredLastNameChangeHandler,
    blurHandler: enteredLastNameBlurHandler,
    reset: resetEntereLastName
  } = useInput(value => value.trim() !== "");
  
  const {
    value: enteredEmailValue,
    hasError: enteredEmailHasError,
    isValid: enteredEmailValueIsValid,
    valueChangeHandler: enteredEmailChangeHandler,
    blurHandler: enteredEmailBlurHandler,
    reset: resetEntereEmail
  } = useInput(value => value.trim().includes("@"));

  let formIsValid = false;
  

  const nameClass = enteredFirstNameHasError ? "form-control invalid": "form-control";
  const lnameClass = enteredLastNameHasError ? "form-control invalid": "form-control";
  const emailClass = enteredEmailHasError ? "form-control invalid": "form-control";

  const submitHandler = (event) =>{
    event.preventDefault();
    if(enteredFirstNameHasError || enteredLastNameHasError || enteredEmailHasError){
      return;
    }

    resetEntereFirstName();
    resetEntereLastName();
    resetEntereEmail();
  }

  if(enteredFirstNameValueIsValid && enteredLastNameValueIsValid && enteredEmailValueIsValid){
    formIsValid = true;
  }


  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={nameClass}>
          <label htmlFor='fname'>First Name</label>
          <input type='text' id='fname' value={enteredFirstNameValue} onChange={enteredFirstNameChangeHandler} onBlur={enteredFirstNameBlurHandler} />
          {enteredFirstNameHasError && <p className="error-text">Please enter your first name.</p>}
        </div>
        <div className={lnameClass}>
          <label htmlFor='lname'>Last Name</label>
          <input type='text' id='lname' value={enteredLastNameValue} onChange={enteredLastNameChangeHandler} onBlur={enteredLastNameBlurHandler} />
          {enteredLastNameHasError && <p className="error-text">Please enter your last name.</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' value={enteredEmailValue} onChange={enteredEmailChangeHandler} onBlur={enteredEmailBlurHandler} />
          {enteredEmailHasError && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
