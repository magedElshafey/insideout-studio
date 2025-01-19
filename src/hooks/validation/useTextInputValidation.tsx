import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ValidationReturn } from "../../types/Validation";
const useTextInputValidation = (): ValidationReturn => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { t } = useTranslation();

  const validateInput = (inputValue: string): boolean => {
    const regex = /^[a-zA-Z\u0600-\u06FF\s]*$/;
    if (!regex.test(inputValue)) {
      setError(
        t(
          "Input must be text only. Numbers and special characters are not allowed."
        )
      );
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

export default useTextInputValidation;
