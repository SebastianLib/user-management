export interface TableItem {
  label: string;
  key: 'name' | 'username' | 'email' | 'phone' | 'options';
}

export const tableHeaders: TableItem[] = [
  { label: 'Name', key: 'name' },
  { label: 'Username', key: 'username' },
  { label: 'Email', key: 'email' },
  { label: 'Phone', key: 'phone' },
  { label: 'Options', key: 'options' },
];