"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
}
//* ABSTRACT IMPLEMENTATION
//* GOOD Approach
class Manager extends Employee {
    calculateHoursBonus(hours) {
        return (this.basicSalary / 30 / 8) * hours * 3;
    }
}
class Regular extends Employee {
    calculateHoursBonus(hours) {
        return (this.basicSalary / 30 / 8) * hours;
    }
}
class Direct extends Employee {
    calculateHoursBonus(hours) {
        return (this.basicSalary / 30 / 8) * hours * 2;
    }
}
//* Interface implementation
//* GOOD Approach
class WithInterfaceManager {
    calculateHoursBonus(hours) {
        return (this.basicSalary / 30 / 8) * hours * 3;
    }
}
class WithInterfaceRegular {
    calculateHoursBonus(hours) {
        return (this.basicSalary / 30 / 8) * hours;
    }
}
class WithInterfaceDirect {
    calculateHoursBonus(hours) {
        return (this.basicSalary / 30 / 8) * hours * 2;
    }
}
exports.default = {
    Manager,
    Regular,
    Direct,
    WithInterfaceDirect,
    WithInterfaceManager,
    WithInterfaceRegular,
};
//# sourceMappingURL=Epmloyee.js.map