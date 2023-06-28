
// eslint-disable-next-line react/prop-types
const Toggle = ({ isOn, handleToggle, onChange }) => (
  <>
    <input
      checked={isOn}
      onChange={handleToggle}
      onClick={onChange}
      className="react-switch-checkbox"
      id={`react-switch-new`}
      type="checkbox"
    />
    <label
      style={{ background: isOn && "#0000ff" }}
      className="react-switch-label"
      htmlFor={`react-switch-new`}
    >
      <span className={`react-switch-button`} />
      {/* <span>&#9728;</span> */}
    </label>
  </>
)

export default Toggle