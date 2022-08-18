$(function() {
    main()
  });

  const main = async() => {

    let tableData = {
      "title":"Nova Network",
      "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
      "rows": [
        ["QuasarSwap",           `<a href="quasar"         >Various</a>`,        "QSR",              "https://quasarswap.net"],
        ["Fusion",               `<a href="fusion"         >Various</a>`,        "???",              "https://fusion.novanetwork.io"]
      ]
    }

    let table = new AsciiTable().fromJSON(tableData);
    document.getElementById('log').innerHTML += table + '<br />';
    hideLoading();
  }
