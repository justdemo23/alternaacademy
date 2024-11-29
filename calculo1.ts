console.clear();
const monthlySalary = 50000;
const annualSalary = monthlySalary * 12;
let monthlyRetention;
let excess;

if (annualSalary < 416220.00) {
    monthlyRetention = 0;
} else if (annualSalary < 624329) {
    excess = annualSalary - 416220;
    monthlyRetention = (excess * 0.15) / 12;
} else if (annualSalary < 867123) {
    excess = annualSalary - 624329.01;
    monthlyRetention = ((excess * 0.2) + 31216) / 12;
} else {
    excess = annualSalary - 867123.01;
    monthlyRetention = ((excess * 0.25) + 79776) / 12;
}

console.log(`Para un salario de ${monthlySalary}, la retención mensual es de ${monthlyRetention}`);
