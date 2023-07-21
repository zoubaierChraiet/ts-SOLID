interface IEmployee {
  id: string;
  name: string;
  basicSalary: number;
  calculateHoursBonus(hours: number): number;
}

export default IEmployee;
