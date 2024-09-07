export interface SearchField {
  placeholder: string;
  key: 'name' | 'username' | 'email' | 'phone';
}

export const searchFields: SearchField[] = [
  { placeholder: 'Search by Name', key: 'name' },
  { placeholder: 'Search by Username', key: 'username' },
  { placeholder: 'Search by Email', key: 'email' },
  { placeholder: 'Search by Phone', key: 'phone' },
];