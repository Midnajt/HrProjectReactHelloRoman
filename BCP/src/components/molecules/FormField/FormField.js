import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Label } from '../../atoms/Label/Label.js';
import { Input } from '../../atoms/Input/Input.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 10px 0;
  }
`;

const FormField = ({ onChange, value, label, name, id, type = 'text', ...props }) => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <Input name={name} id={id} type={type} value={value} onChange={onChange}></Input>
  </Wrapper>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
