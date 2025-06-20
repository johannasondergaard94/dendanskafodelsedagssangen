export function Dropdown({ value, onChange }) {
  return (
    <>
      <label htmlFor="sex">Kön:</label>
      <select style={{marginBottom: '5px'}} id="sex" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="Hon">Hon</option>
        <option value="Han">Han</option>
      </select>
    </>
  );
}

