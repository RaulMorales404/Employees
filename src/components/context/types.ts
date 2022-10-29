export type Employees = {
    id: number,
    name: string,
    last_name: string,
    birthday: string
}

export type User = {
    active: boolean
};

export type EmployeesContextType = {
    employeesContext: Array<Employees>
    setEmployeesContext: (value: Array<Employees>) => void;
}

export type UserContextType = {
    userAuth: Array<User>
    setUserAuth: (value: Boolean) => void;
}
