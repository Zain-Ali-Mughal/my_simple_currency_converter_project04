#! /usr/bin/env node
// Making Simple Currency Converter
import inquirer from "inquirer";
import chalk from "chalk";
// Making Function to convert currency
async function convertCurrency() {
    console.log(chalk.green("=========================================="));
    console.log(chalk.bgBlue.bold("\tCurrency Converter"));
    console.log(chalk.green("=========================================="));
    // Asking the user for the amount
    let amountAnswer = await inquirer.prompt([
        {
            type: "number",
            name: "amount",
            message: chalk.green("Enter the amount to be converted:"),
        },
    ]);
    console.log(chalk.blue("------------------------------------------"));
    console.log(chalk.yellow(`\tAmount entered: ${amountAnswer.amount}`));
    console.log(chalk.blue("------------------------------------------"));
    // Asking the user for the source currency
    let fromCurrencyAnswer = await inquirer.prompt([
        {
            type: "list",
            name: "fromCurrency",
            message: chalk.green("Select the source currency:"),
            choices: ["PKR", "USD", "GBP", "AED", "SAR"],
        },
    ]);
    console.log(chalk.blue("------------------------------------------"));
    console.log(chalk.yellow(`\tSource currency: ${fromCurrencyAnswer.fromCurrency}`));
    console.log(chalk.blue("------------------------------------------"));
    // Asking the user for the target currency
    let toCurrencyAnswer = await inquirer.prompt([
        {
            type: "list",
            name: "toCurrency",
            message: chalk.green("Select the target currency:"),
            choices: ["PKR", "USD", "GBP", "AED", "SAR"],
        },
    ]);
    console.log(chalk.blue("------------------------------------------"));
    console.log(chalk.yellow(`\tTarget currency: ${toCurrencyAnswer.toCurrency}`));
    console.log(chalk.blue("------------------------------------------"));
    // Making object of exchange rates (as of 2024)
    const exchangeRates = {
        PKR: { PKR: 1, USD: 0.0035, GBP: 0.0028, AED: 0.013, SAR: 0.013 },
        USD: { PKR: 285, USD: 1, GBP: 0.8, AED: 3.67, SAR: 3.75 },
        GBP: { PKR: 360, USD: 1.25, GBP: 1, AED: 4.59, SAR: 4.69 },
        AED: { PKR: 78, USD: 0.27, GBP: 0.22, AED: 1, SAR: 1.02 },
        SAR: { PKR: 76.5, USD: 0.27, GBP: 0.21, AED: 0.98, SAR: 1 },
    };
    const amount = amountAnswer.amount;
    const fromCurrency = fromCurrencyAnswer.fromCurrency;
    const toCurrency = toCurrencyAnswer.toCurrency;
    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    // Printing the conversion result
    console.log(chalk.green("=========================================="));
    console.log(chalk.bgGreen.bold(`\n${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}\n`));
    console.log(chalk.green("=========================================="));
}
// Calling the currency converter function.
convertCurrency();
