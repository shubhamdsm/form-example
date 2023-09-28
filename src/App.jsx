import { useState } from "react";
import Input from "./components/Input";
import { validateForm } from "./utils/util";

function App() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [userName, setUserName] = useState("");
  const [formValue, setFormValue] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm(userName, emailValue, passwordValue);
    setErrors({ ...isValid });
    if (Object.keys(isValid).length === 0) {
      setFormValue({
        email: emailValue,
        password: passwordValue,
        userName: userName,
      });
    }
  };
  return (
    <div>
      {formValue && (
        <p>
          Email: {formValue.email} Password: {formValue.password} UserName:{" "}
          {formValue.userName}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="enter email"
          value={emailValue}
          required
          handler={(e) => setEmailValue(e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
        <Input
          type="text"
          placeholder="enter username"
          value={userName}
          required
          handler={(e) => setUserName(e.target.value)}
        />
        {errors.userName && <p>{errors.userName}</p>}
        <Input
          type="password"
          placeholder="enter password"
          value={passwordValue}
          required
          handler={(e) => setPasswordValue(e.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
