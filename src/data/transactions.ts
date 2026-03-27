export interface Transaction {
  title: string;
  path: string;
}

export interface TransactionGroup {
  category: string;
  items: Transaction[];
}

export const lguTransactions: TransactionGroup[] = [
  {
    category: 'Business',
    items: [
      { title: 'Business Online Billing and Payment', path: '#' },
      { title: 'New Business Application', path: '#' },
      { title: 'Renew Business Application', path: '#' },
    ],
  },
  {
    category: 'Real Property',
    items: [
      { title: 'Realty Tax Online Billing and Payment', path: '#' },
    ],
  },
  {
    category: 'Payment Order',
    items: [
      { title: 'Online Payment Order', path: '#' },
    ],
  },
  {
    category: 'Building and Construction',
    items: [
      { title: 'Building Permit Requirements', path: '#' },
      { title: 'Certificate of Occupancy Requirements', path: '#' },
      { title: 'Application Tracking', path: '#' },
      { title: 'Building Permit Application', path: '#' },
      { title: 'OSCP Online Billing and Payment', path: '#' },
      { title: 'Certificate of Occupancy Application', path: '#' },
      { title: 'Pay PTR (Professional Tax Receipt)', path: '#' },
      { title: 'Register Professional', path: '#' },
      { title: 'Update Professional', path: '#' },
    ],
  },
];
