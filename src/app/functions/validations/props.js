export function validateProps(props, keys) {
  var error = 0;
  keys.forEach(key => {
    if (props[key] === undefined) error++;
  });
  return error > 0 ? false : true;
}
