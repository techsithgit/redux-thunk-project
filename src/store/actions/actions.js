export const loading = () => {
  return {
    type: "LOADING"
  };
};

export const ageUpAsnc = val => {
  return { type: "AGE_UP", value: val };
};

export const ageUp = val => {
  return dispach => {
    dispach(loading());
    setTimeout(() => {
      dispach(ageUpAsnc(val));
    }, 5000);
  };
};

export const ageDown = val => {
  return { type: "AGE_DOWN", value: val };
};
