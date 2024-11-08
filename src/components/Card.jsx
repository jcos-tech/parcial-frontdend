import { useState, useEffect } from "react";

function Card({ formData }) {
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');

  const validateName = (value) => {
    const regex = /^\S{4,}$/;
    return regex.test(value);
  };

  const validatePassword = (value) => {
    return value.trim().length >= 6;
  };

  useEffect(() => {
    if (validateName(formData.name) && validatePassword(formData.password)) {
      setIsValid(true);
      setError('');
    } else {
      setIsValid(false);
      setError("Por favor chequea que la información sea correcta");
    }
  }, [formData]);

  return (
    <div>
      {/* Renderiza el componente o mensaje si `isValid` es true */}
      {isValid ? (
        <div>¡Información válida! Bienvenido.</div>
      ) : (
        <div>{error}</div>
      )}
    </div>
  );
}

export default Card;