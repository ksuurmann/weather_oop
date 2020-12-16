class Weather {
  constructor(city) {
    this.city = city;
    this.key = 'ae73c8b87baaba4d6569980d095c1206'}

  // data from API
  async weatherData() {
    const resp = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q= ' +
        this.city +
        '&appid= ' +
        this.key
    );
    const data = await resp.json();
    return data;
  }
  //change city
  changeCityName(name){
    this.city = name;
  }
}