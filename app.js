// MILK PRODUCED PER SHADE PER DAY

let oneShadeMilk = (cows, volume)=>{

    this.volume = volume;
    this.cows = cows;
    
    return this.volume * this.cows;
};

// TOTAL AMOUNT OF MILK FOR ALL SHADES PER DAY

let allShadeMilk = (oneShadeMilk, shades)=>{
   
    this.shades = shades;

    return oneShadeMilk * this.shades;
};

// INCOME PER DAY
const price = 45;
let incomePerDay = (allShadeMilk, price)=>{
    
    return allShadeMilk * price;
}

// INCOME PER WEEK

function incomePerWeek(incomePerDay){
    
    return incomePerDay * 7;
}

// INCOME PER MONTH

function incomePerMonth(incomePerDay,month.days){
    return incomePerDay * numberOfDays;
}

// INCOME PER YEAR

function incomePerYear(incomePerMonth,numberOfMonths){
    return incomePerMonth * numberOfMonths;
}