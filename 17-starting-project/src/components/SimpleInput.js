import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: enteredNameHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: enteredNameChangeHandler,
    blurHandler: enteredNameBlugHandler,
    reset: resetName
  } = useInput(value => value.trim() !== "");
  const {
    value: enteredEmail,
    hasError: enteredEmailHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: enteredEmailChangeHandler,
    blurHandler: enteredEmailBlugHandler,
    reset: resetEmail
  } = useInput(value => value.trim().includes("@"));

  const nameClass = !enteredNameHasError ? 'form-control' : 'form-control invalid';
  const emailClass = !enteredEmailHasError ? 'form-control' : 'form-control invalid';
  let formIsValid = false;

  const submitHandler = (event) =>{
    event.preventDefault();
    if(!enteredNameIsValid || !enteredEmailIsValid){
      return;
    }
    resetName();
    resetEmail();
  }

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={enteredNameChangeHandler} onBlur={enteredNameBlugHandler} value={enteredName} />
        {enteredNameHasError && <p>Please enter your name.</p>}
      </div>
      <div className={emailClass}>
        <label htmlFor='email'>Your Email</label>
        <input type='text' id='email' onChange={enteredEmailChangeHandler} onBlur={enteredEmailBlugHandler} value={enteredEmail} />
        {enteredEmailHasError && <p>Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
