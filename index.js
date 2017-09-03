exports.results = function(result, message) {
  console.log('-------------------------');
  console.log('Print Result: ');
  console.log('-------------------------');
  console.log('Result: ', result);
  if (message !== undefined) {
    console.log('Message: ', message);
  }
  return { result, message };
};
