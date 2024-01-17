import styled from "styled-components";
import TealButton from "../../components/TealButton/TealButton";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 100%;
  max-width: 36rem;
  margin: 0 auto;
  padding: 1.25rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
  border-radius: 0.625rem;
`;

export const LabelText = styled.label`
  color: slategray;
  font-size: 1.25rem;
  font-weight: semi-bold;
  margin-bottom: 0.625rem;
`;

export const TextInput = styled.input`
  border-radius: 0.25rem;
  width: 100%;
  padding: 0.625rem;
  margin-bottom: 0.625rem;
  font-size: 1rem;
`;

export const Select = styled.select`
  border-radius: 0.25rem;
  width: 12rem;
  padding: 0.625rem;
  margin-left: 0.5rem;
  margin-bottom: 0.625rem;
  font-size: 1rem;
`;

export const SubmitButton = styled(TealButton)`
  font-size: 1.25rem;
  font-weight: semi-bold;
`;
