export const errors = [
  {
    id: 1,
    text: "El componente no esta bien configurado."
  }
];

export const searchError = id => {
  return errors.find(error => error.id === id);
};
