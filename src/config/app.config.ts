interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Content Moderator', 'Fact Checker', 'Feedback Reviewer'],
  tenantName: 'Company',
  applicationName: 'Newssearch app',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage companies.', 'Invite Content Moderators, Fact Checkers, and Feedback Reviewers.'],
};
