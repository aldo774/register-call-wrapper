function registerRout() {
  return this.request(`${this.apiURL}/register/?format=json`);
}

export default function register() {
  return {
    registers: registerRout.bind(this),
  };
}
