import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enterNameIsValid = enteredName.trim() !== "";
  const nameInputIsInValid = !enterNameIsValid && enteredNameTouched;

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const submissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enterNameIsValid) {
    
      return;
    }

    console.log(enteredName);
    setEnteredName("");
    setEnteredNameTouched(false)
  };

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={submissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>

        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputIsInValid && (
        <p className="error-text">name field should not be empty!</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
