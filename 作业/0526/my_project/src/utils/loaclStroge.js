export default{
  get (name) {
    return JSON.parse(localStorage.getItem(name))
  },
  set (name, str) {
    localStorage.setItem(name, JSON.stringify(str))
  }
}
