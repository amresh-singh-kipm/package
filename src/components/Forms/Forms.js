import React from "react";
import "../../style.css";
export const Form = ({ heading, field, handleChange, submitForm }) => {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">{heading}</h3>
          {field?.map((field, id) => {
            return (
              <div className="form-group mt-3" key={id}>
                <label>{field.fieldName}</label>
                <input
                  type={field.type ?? "text"}
                  name={field.name}
                  className="form-control mt-2"
                  placeholder={field.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            );
          })}
          <div className="d-grid mt-4 submitbtn">
            <button className="btn" onClick={submitForm}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
