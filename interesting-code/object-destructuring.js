// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
// https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8

const {
  reports: {
    datepicker: {
      startDate,
      endDate,
    },
    autosuggest: { filters },
  },
} = getState();


// Debugger in Chrome
_getState = getState(),
_getState$reports = _getState.reports,
_getState$reports$dat = _getState$reports.datepicker,
startDate = _getState$reports$dat.startDate,
endDate = _getState$reports$dat.endDate,
filters = _getState$reports.autosuggest.filters;






const user = {
  id: 339,
  name: 'Fred',
  age: 42,
  education: {
    degree: 'Masters'
  }
};
const {education: {degree}} = user;
console.log(degree); //prints: Masters
