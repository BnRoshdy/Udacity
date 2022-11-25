var education = "An Associate's degree";
var salary ;
 


switch (education) {
    case "no high school diploma":
        salary = 25636;
        break;

    case "a high school diploma":
        salary = 35256;
        break;

    case "An Associate's degree":
        salary = 41496;
        break;

    case "a Bachelor's degree":
        salary = 59124;
        break;
        
    case "a Master's degree":
        salary = 69732;
        break;

    case "a Professional degree":
        salary = 89960;
        break;
    
    case "a Doctoral degree":
        salary = 84396;
        break;
}
var output = "In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.";

console.log(output);