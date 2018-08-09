import React from "react";
import PropTypes from "prop-types";
import { FormGroup, FormControl, Glyphicon } from "react-bootstrap";

const InputForm = props => (
  <form onSubmit={props.handleSubmit}>
    <FormGroup bsClass="form-group has-feedback has-feedback-left">
      <FormControl
        type="text"
        placeholder="Search"
        value={props.value}
        onChange={props.handleChange}
      />
      <Glyphicon glyph="search" className="form-control-feedback" />
    </FormGroup>
  </form>
);

InputForm.PropTypes = {
  handleSubmit: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default InputForm;
