const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiply) {
  return function (value) {
    return multiply * value;
  };
};

const fareDoubler = function (2) {
  return createFareMultiplier;
}

fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
 Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.
