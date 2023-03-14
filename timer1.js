const args = process.argv.slice(2); //args ['arg1' 'arg2' ...]
//Implement an alarm clock / timer which will beep after a specified amount of time has passed
// The user can specify an unlimited number of alarms using command line arguments

//ignore cases where no arguments were typed
if (args.length !== 0) {
  //loop args, ignore negative numbers
  for (seconds of args) {
    //convert string elements to numbers
    seconds = Number(seconds);
    //ignore inputs that aren't a number, and are negative numbers
    if (seconds !== NaN && seconds > 0) {
      //after x seconds make beep noise; convert seconds into milliseconds
      setTimeout(() => {
        process.stdout.write('\x07');
      }, seconds * 1000);
    }
  }
}

