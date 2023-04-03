autowatch = 1;

var myDict = new Dict("myWeatherData"); // dict 처리

// 함수를 제작해서 메시지로 호출한다

function parseDict() {
  var dataAsString = myDict.get("body");
  var parsedDict = new Dict("parsedDict");

  parsedDict.parse(dataAsString);
  outlet(0, parsedDict.name);
}
