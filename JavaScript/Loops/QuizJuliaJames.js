var x = 1;

while (x <= 20) {
    if ((x % 3 === 0) && (x % 5 === 0)) {
        console.log("JuliaJames");
        x += 1;

    } else if (x % 3 === 0) {
        console.log("Julia");
        x += 1;

    } else if (x % 5 === 0) {
        console.log("James");
        x += 1;

    } else {
        console.log(x);
        x += 1;
    }


}