class Department {
  //   private readonly id: string;
  //   private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Can");
accounting.addEmployee("Test");

// accounting.employees[2] = "Yüksel";

accounting.describe();
accounting.name = "NEW NAME";
accounting.printEmployeeInformation();
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
