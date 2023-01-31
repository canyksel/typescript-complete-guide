class Department {
  //   private readonly id: string;
  //   private name: string;
  protected employees: string[] = [];

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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string): void {
    if (name === "Can") return;
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new ITDepartment("d1",['Can']);

// accounting.addEmployee("Can");
// accounting.addEmployee("Test");

// accounting.describe();
// accounting.name = "NEW NAME";
// accounting.printEmployeeInformation();

// accounting.employees[2] = "Yüksel";

const it = new ITDepartment("d1", ["Can"]);

it.addEmployee("Can");
it.addEmployee("Test");

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.addEmployee('Can');
accounting.addEmployee('Test');


accounting.addReport("Something went wrong...");
accounting.printReports();
accounting.printEmployeeInformation();
// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
