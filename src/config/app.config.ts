interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'HR Manager', 'Payroll Administrator', 'Employee', 'Accountant'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View company information',
    'View employee information',
    'View payroll information',
    'View vacation information',
  ],
  ownerAbilities: [
    'Manage company information',
    'Manage employee data',
    'Manage vacation requests',
    'Manage payroll information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/57e951ae-8ed7-4128-9dbe-3109c84bde4b',
};
