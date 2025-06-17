import styled from "styled-components";

const InputComponent = styled.input`
  color: white;
  padding: 10px;
  outline: none;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 4px;
  font-size: 20px;
`;

export function Input({ value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor="name">Namn:</label>
      <InputComponent
        id="name"
        value={value}
        onChange={handleChange}
        autoComplete="off"
      />
    </>
  );
}
