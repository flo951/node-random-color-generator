import randomColor from 'randomcolor'; // import the script
import chalk from 'chalk';
const color = randomColor().toUpperCase(); // a hex code for an attractive color: ;

const colorInput = process.argv[2];
const lumInput = process.argv[3];

if (!process.argv[2]) {
  console.log(
    chalk.hex(`${randomColor()}`)(
      `###############################
###############################
###############################
####                       ####
####        ${color}        ####
####                       ####
###############################
###############################
###############################`,
    ),
  );
} else if (process.argv[2] && process.argv[3]) {
  console.log(
    chalk.hex(
      `${randomColor({
        luminosity: lumInput,
        hue: colorInput,
      })}`,
    )(`###############################
###############################
###############################
####                       ####
####        ${color}        ####
####                       ####
###############################
###############################
###############################`),
  );
} else if (process.argv[2] === 'ask') {
  console.log(chalk.red('Type in a color and luminosity'.toUpperCase()));
}
