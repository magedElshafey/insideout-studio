import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ValidationReturn } from "../../types/Validation";
const useEmailValidation = (): ValidationReturn => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { t } = useTranslation();
  const validateInput = (inputValue: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(inputValue)) {
      setError(t("Invalid email address"));
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

  return { value, error, handleChange, validate, setValue };
};
export default useEmailValidation;
