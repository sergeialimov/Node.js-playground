import _ from 'lodash';

const arr = [
  'Organization ID',
  'Organization name',
  'URL',
  'Email',
  'Content category',
  'Organization roles',
];

const res = arr.map((column) => _.camelCase(column))

console.log('res', res);