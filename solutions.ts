function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

function reverseString(input: string): string {
  return input.split("").reverse().join("");
}

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

function getIntersection(arr1: number[], arr2: number[]): number[] {
  const set2 = new Set(arr2);
  return arr1.filter((num) => set2.has(num));
}
