console.log("*****     SINGLE LINE     *****")
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        let product = (i * j).toString()
        process.stdout.write(j.toString() + " * " + i.toString() + " = " + product + "  ")
    }
}

console.log("\n\n*****     MULTIPLE LINE BREAKS AFTER 9     *****")
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        let product = (i * j).toString()
        process.stdout.write(j.toString() + " * " + i.toString() + " = " + product.padStart(2, 0) + "  ")
    }
    process.stdout.write('\n')
}

