
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
    style={{ background: isOn && "#EF476F" }}
    className="react-switch-label"
    htmlFor={`react-switch-new`}
  >
    <span className={`react-switch-button`} />
  </label>
</>
  // <label className="switch" htmlFor="toggler">
  //   <input
  //     id="toggler"
  //     type="checkbox"
  //     onClick={onChange}
  //     checked={value}
  //     readOnly
  //   />
  //   <span className="slider" />
  //   <span className="wave" />
  // </label>
)

export default Toggle