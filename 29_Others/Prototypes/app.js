class Color {
  constructor(r, g, b, name) {//새로운 컬러가 만들어질때마다 즉시 실행된다.
    console.log('INSIDE CONTRUCTOR');

    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  innerRgb(){
    const {r, g, b} = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRgb()})`
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRgb()}, ${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return '#' + (( 1 << 24) + ( r << 16 ) + ( g << 8 ) + b).toString(16).slice(1);
  }
}
const red = new Color(255, 55, 100, "tomato");
const white = new Color(255, 255, 255, "white");
