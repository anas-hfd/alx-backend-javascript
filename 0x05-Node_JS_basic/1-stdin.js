process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for input from the user
process.stdin.on('readable', () => {
  // Read the input from the user
  const chunk = process.stdin.read();

  // Check if there is any input
  if (chunk) {
    // Print the user's name to the console
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Handle the end of input
process.stdin.on('end', () => {
  // Print a closing message to the console
  process.stdout.write('This important software is now closing\n');
});
