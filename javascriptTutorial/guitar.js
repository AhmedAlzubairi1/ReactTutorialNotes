//This means if you import guitar.js you will get access to playGuitar since it is default. Can't do arrow notation for default

export default function playGuitar() {
  return "Playing Guitar!";
}
//This means the user has the option to export it
export const shredding = () => {
  return "shredding some licks!";
};

// can do somethign like this instead: export default playGuitar or something like: export {shredding}
