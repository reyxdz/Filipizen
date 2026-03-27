export interface Transaction {
  title: string;
  slug: string;
}

export interface TransactionGroup {
  category: string;
  items: Transaction[];
}

export const lguTransactions: TransactionGroup[] = [
  {
    category: 'Business',
    items: [
      { title: 'Business Online Billing and Payment', slug: 'bpls-billing' },
      { title: 'New Business Application', slug: 'new-business' },
      { title: 'Renew Business Application', slug: 'renew-business' },
    ],
  },
  {
    category: 'Real Property',
    items: [
      { title: 'Realty Tax Online Billing and Payment', slug: 'rpt-billing' },
    ],
  },
  {
    category: 'Payment Order',
    items: [
      { title: 'Online Payment Order', slug: 'online-payment-order' },
    ],
  },
  {
    category: 'Building and Construction',
    items: [
      { title: 'Building Permit Requirements', slug: 'bp-requirements' },
      { title: 'Certificate of Occupancy Requirements', slug: 'co-requirements' },
      { title: 'Application Tracking', slug: 'app-tracking' },
      { title: 'Building Permit Application', slug: 'bp-application' },
      { title: 'OSCP Online Billing and Payment', slug: 'oscp-billing' },
      { title: 'Certificate of Occupancy Application', slug: 'co-application' },
      { title: 'Pay PTR (Professional Tax Receipt)', slug: 'pay-ptr' },
      { title: 'Register Professional', slug: 'register-professional' },
      { title: 'Update Professional', slug: 'update-professional' },
    ],
  },
];
