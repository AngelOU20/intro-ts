//* TEMPLATE UNION TYPES
type EmployeeId = `${string}-${string}-${string}-${string}-${string}`;

type Employee = {
  readonly id?: EmployeeId;
  name: string;
  age: number;
  isActive?: boolean;
};

let employee: Employee = {
  name: 'Juan',
  age: 30,
};

function createEmployee(employee: Employee): Employee {
  const { name, age } = employee;
  return {
    // id: '123-123', //! No pasa esa cadena de texto porque es diferente al tipo del EmployeeId
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

const newEmployee = createEmployee({ name: 'Mariano', age: 25 });

//* OTHER EXAMPLE
type HexadecimalColor = `#${string}`;

const color: HexadecimalColor = '#fff424';
// const color2: HexadecimalColor = 'fff424'; //! Se quejaria porque es diferente al tipo
