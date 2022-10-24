import _ from 'lodash';

export const inputOrgDataMock = [{
  organizationName: 'Mock org name',
  url: 'https://mock-org.com',
  email: 'hello@mock-org.com',
  contentCategory: 'CategoryTypeEnum.AD_SUPPORTED',
  organizationRoles: 'role',
  trendMdStaffOwner: 'test@owner.co',
  trendMdStaffFollower: 'test@follower.co',
}]

const contentCategories = _
  .chain(inputOrgDataMock)
  .map('contentCategory')
  .uniq()
  .value();

console.log('contentCategories', contentCategories);