//Helps with switching and toggling boolean state setter
const setBooleanTrue = (setState: setState<boolean>) => {
  setState(true);
};

const setBooleanFalse = (setState: setState<boolean>) => {
  setState(false);
};

const toggleBoolean = (setState: setState<boolean>) => {
  setState((currentValue) => !currentValue);
};

function isCallable(testerVariable:FuncString ) {
  return typeof testerVariable === 'function';
}

export { setBooleanTrue, setBooleanFalse, toggleBoolean,isCallable };



