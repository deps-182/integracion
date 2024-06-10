export const userList: user [] = [
    {id: 1, nombre: 'joao' , email: 'joaoa@gmail.com', origen: 'chrono'},
    {id: 2, nombre: 'joasso' , email: 'jossdadao@gmail.com', origen: 'chrono'},
    {id: 3, nombre: 'joaasso' , email: 'joaasdo@gmail.com', origen: 'chrono'},
    {id: 4, nombre: 'joaofasd' , email: 'joaoaff@gmail.com', origen: 'chrono'},
]

export interface user {
    id: number;
    nombre: string;
    email: string;
    origen: string;
}