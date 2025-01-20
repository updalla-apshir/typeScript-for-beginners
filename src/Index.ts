let variable = "helllo";
variable = "hi";

let age = 18;

let ageWithType: string = "3";

ageWithType = "18";

let isAdult: boolean;

isAdult = true;

let tesStringornumber: string | number;

tesStringornumber = "hello";

tesStringornumber = 18;
// tesStringornumber = [];

// ARRAY

let names = ["abdi", "ali", "nuur"];

// names.push(3);
names.push("3");

let numbers = [12, 13, 14, 15];
// numbers.push(true)
numbers.push(16);

let testStringArray: string[];
// testStringArray = [5,6,7,99]
testStringArray = ["5", "6", "99"];

let testNumberArray: number[];

// testNumberArray = [true, "6", 99];

testNumberArray = [5, 6, 7, 99];

let testStringOrNumberArray: (string | number)[];

testStringOrNumberArray = ["hello", 5, 6, 7, 99];

//OBJECTS

let user = {
  userName: "Abdi",
  age: 25,
  isAdmin: true,
};

// user.userName = 18;
user.userName = "Ali";

user.age = 18;
// user.isAdmint = false;
user.isAdmin = true;

// user.phone ="+777272"

let userObj: {
  userName: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  userName: "Abdi",
  age: 25,
  isAdmin: true,
  //phone : "+1892911"
};
let userObj2: {
  userName: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  userName: "Abdi",
  age: 25,
  isAdmin: true,
};

//ANY

let testAny;
testAny = 28;
testAny = "testAny";
testAny = true;
testAny = {};
testAny = [true];

let testAnyArray: any[];

testAnyArray = [28, "testAny", true, {}, []];

//FUNCTIONS

let sayHi = () => {
  console.log("hi,Welcome!");
};

// sayHi("");
// sayHi = "hi";
sayHi();

let functionReturnString = (): string => {
  console.log("hello");
  return "hello";
};

let multiple = (num: number): number => {
  return num * 2;
};
// let multipl2 = (num: number) => {
//   return num * 2;
// };

multiple(5);

let sum = (num1: number, num2: number, anOther?: number) => {
  return num1 + num2;
};

sum(5, 3);

let func = (user: { username: string; password: string; age: number }) => {
  console.log(
    `username: ${user.username}, password: ${user.password}, age: ${user.age}`
  );
};

//TYPE ALLIES

type userType = {
  username: string;
  age: number;
  phone?: string;
};
let betterFunc = (user: userType) => {
  return user.username;
};

type myFunc = (a: number, b: string) => void;

let wrtie: myFunc = (num, str) => {
  console.log(num + "times" + str);
};

type userType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userTheme: userType2 = {
  username: "Abdi",
  age: 25,
  phone: "+123456789",
  theme: "dark",
};

interface Iuser {
  username: string;
  age: number;
  email: string;
}

interface Iemployee extends Iuser {
  EmployeeId: number;
  position: string;
  salary: number;
  department: string;
}

const emp: Iemployee = {
  username: "John Doe",
  age: 30,
  email: "johndoe@example.com",
  EmployeeId: 1234,
  position: "Software Engineer",
  salary: 50000,
  department: "IT",
};

const client: Iuser = {
  username: "Alice Johnson",
  age: 28,
  email: "alicejohnson@example.com",
};

//GENERICS

interface IAuther {
  id: number;
  name: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuther[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<string> = {
  id: 1,
  title: "Hello World",
  desc: "This is a test post",
  extra: ["Author 1", "Author 2"],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: IPostEvenBetter<{ id: number; userName: string }> = {
  id: 1,
  title: "Hello World",
  desc: "This is a test post",
  extra: [{ id: 1, userName: "user1" }],
};
const testMe3: IPostEvenBetter<IAuther> = {
  id: 1,
  title: "Hello World",
  desc: "This is a test post",
  extra: [{ id: 1, name: "author1" }],
};
const testMe4: IPostEvenBetter<ICategory> = {
  id: 1,
  title: "Hello World",
  desc: "This is a test post",
  extra: [{ id: 1, title: "categoruy1" }],
};
