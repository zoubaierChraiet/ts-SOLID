import IEmployee from "./IEmployee";

abstract class Employee {
  public id: string;

  public name: string;

  public basicSalary: number;

  public employeeType: string;

  public abstract calculateHoursBonus(hours: number);

  //! Bad code
  //! Class is open for modification
  //   calculateHoursBonus(hours: number) {
  //     if (this.employeeType === "manager") {
  //       return (this.basicSalary / 30 / 8) * hours * 3;
  //     }

  //     if (this.employeeType === "direct") {
  //       return (this.basicSalary / 30 / 8) * hours * 2;
  //     }

  //     return (this.basicSalary / 30 / 8) * hours;
  //   }
}

//* ABSTRACT IMPLEMENTATION
//* GOOD Approach

class Manager extends Employee {
  public calculateHoursBonus(hours: number) {
    return (this.basicSalary / 30 / 8) * hours * 3;
  }
}

class Regular extends Employee {
  public calculateHoursBonus(hours: number) {
    return (this.basicSalary / 30 / 8) * hours;
  }
}

class Direct extends Employee {
  public calculateHoursBonus(hours: number) {
    return (this.basicSalary / 30 / 8) * hours * 2;
  }
}

//* Interface implementation
//* GOOD Approach

class WithInterfaceManager implements IEmployee {
  id: string;
  name: string;
  basicSalary: number;
  public calculateHoursBonus(hours: number) {
    return (this.basicSalary / 30 / 8) * hours * 3;
  }
}

class WithInterfaceRegular implements IEmployee {
  id: string;
  name: string;
  basicSalary: number;
  public calculateHoursBonus(hours: number) {
    return (this.basicSalary / 30 / 8) * hours;
  }
}

class WithInterfaceDirect implements IEmployee {
  id: string;
  name: string;
  basicSalary: number;
  public calculateHoursBonus(hours: number) {
    return (this.basicSalary / 30 / 8) * hours * 2;
  }
}

export default {
  Manager,
  Regular,
  Direct,
  WithInterfaceDirect,
  WithInterfaceManager,
  WithInterfaceRegular,
};
