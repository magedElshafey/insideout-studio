import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ValidationReturn } from "../../types/Validation";
const usePasswordValidation = (): ValidationReturn => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { t } = useTranslation();
  const validateInput = (inputValue: string): boolean => {
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const isValidPassword =
      upperCaseRegex.test(inputValue) &&
      lowerCaseRegex.test(inputValue) &&
      numberRegex.test(inputValue) &&
      specialCharRegex.test(inputValue);
    if (!isValidPassword) {
      setError(t("invalidPasswordLength"));
      return false;
    }
    setError("");
    return true;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
    setError("");
  };

  const validate = (): boolean => {
    if (value === "") {
      setError(t("This field is required."));
      return false;
    }
    return validateInput(value);
  };
  return { value, error, handleChange, validate, setValue, setError };
};
export default usePasswordValidation;
