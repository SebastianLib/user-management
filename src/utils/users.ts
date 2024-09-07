export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export interface UsersState {
    users: User[];
    filteredUsers: User[];
    filter: {
        name: string;
        username: string;
        email: string;
        phone: string;
    };
    loading: boolean;
    error: string | null;
}
