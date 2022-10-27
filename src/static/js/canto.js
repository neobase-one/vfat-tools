$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"CANTO Network",
    "heading":["Pool Provider","MCN","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["Encanto       ","", `<a href='encanto'       >Various</a>`,"ENCANTO          ","https://encantowetrust.com"],
      ["Canto         ","", `<a href='canto'         >Various</a>`,"CANTO            ","                          "]
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
