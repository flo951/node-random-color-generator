import randomColor from 'randomcolor'; // import the script
import chalk from 'chalk';
const color = randomColor().toUpperCase(); // a hex code for an attractive color: ;

const colorInput = process.argv[2]; // stores the command line input in a variable
const lumInput = process.argv[3]; // stores the command line input in a variable

if (!process.argv[2]) {
  console.log(
    chalk.hex(color)(
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
  const userHueLum = randomColor({
    luminosity: lumInput,
    hue: colorInput,
  });

  console.log(
    chalk.hex(userHueLum)(`###############################
###############################
###############################
####                       ####
####        ${userHueLum}        ####
####                       ####
###############################
###############################
###############################`),
  );
} else if (process.argv[2] === 'ask') {
  console.log(chalk.red('Type in a color and luminosity'.toUpperCase()));
} else if (process.argv[2] !== 'ask') {
  const userColor = randomColor({
    hue: colorInput,
  });

  console.log(
    chalk.hex(userColor)(`###############################
###############################
###############################
####                       ####
####        ${userColor}        ####
####                       ####
###############################
###############################
###############################`),
  );
}

/*



*/
