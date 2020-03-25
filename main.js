const companies= [
    {name: "company one", category: "Finance", start: 1981, end: 2003 },
    {name: "company two", category: "Retail", start: 1992, end: 2008 },
    {name: "company three", category: "Auto", start: 1999, end: 2007 },
    {name: "company four", category: "Retail", start: 1989, end: 2010 },
    {name: "company five", category: "Technology", start: 2009, end: 2014 },
    {name: "company six", category: "Finance", start: 1987, end: 2010 },
    {name: "company seven", category: "Auto", start: 1986, end: 1996 },
    {name: "company eight", category: "Technology", start: 2011, end: 2016 },
    {name: "company nine", category: "Retail", start: 1981, end: 1989 },
    {name: "company ten", category: "Auto", start: 1972, end: 2019 },   
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

//for (let i= 0; i < companies.length; i++){
//    console.log(companies[i]);
//}

// for each

//companies.forEach(function(company){
//    console.log(company);
//});


// filter

//let canDrink = [];
//for(let i =0; i < ages.length; i++) {
//    if(ages[i] >= 21){
//        canDrink.push(ages[i]);
//    }
//};
//console.log(canDrink);

//const canDrink =ages.filter(function(age){
//    if(age >= 21){
//        return true;
//    }
//})

const canDrink = ages.filter(age => age >= 21 );

//console.log(canDrink);

// filter the retail companies

//const retailCompanies = companies.filter(function(company){
//    if(company.category === "Retail")
//    return true;
//})

//const retailCompanies = companies.filter(compagny => compagny.category === "Retail");
//console.log(retailCompanies)

//const financeCompanies = companies.filter(company => company.category === "Finance");
//console.log(financeCompanies)

//const autoCompanies = companies.filter(company => company.category === "Auto");
//console.log(autoCompanies)

// Get 80s companies

//const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
//console.log(eightiesCompanies)

//const ninetiesCompanies = companies.filter(company => (company.start >= 1990 && company.start < 2000));
//console.log(ninetiesCompanies)

//const tenYears = companies.filter (company => (company.end - company.start >= 10))
//console.log(tenYears)

// map

// create Array of company names


// sort
// reduce