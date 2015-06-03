var hexTo64 = function hexTo64(hexStr) {
  hexStr = hexStr.toUpperCase()
  var hexTableStr = "0123456789ABCDEF";
  var sfTableStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  
  var bitVals = 0;
  var len = hexStr.length;
  result = "";
  var i = 0;
  while ( i < len ) {
    if ( (i) % 3 === 0) {
      bitVals = hexTableStr.indexOf(hexStr[i]);
      bitVals <<= 2
      if (i + 1 < len) {
        bitVals += hexTableStr.indexOf(hexStr[i + 1]) >> 2;
      }
      i += 2;
    } else {
      bitVals = hexTableStr.indexOf(hexStr[i-1]) % 4
      bitVals <<= 4;
      bitVals += hexTableStr.indexOf(hexStr[i])
      i += 1;
    }
    result += sfTableStr[bitVals];
  }

  // left over bits
  if ( len % 3 === 1) {
    bitVals = hexTableStr.indexOf(hexStr[len - 1]);
    bitVals <<= 2 ;
    result += sfTableStr[bitVals]
  } else if ( len % 3 === 2) {
    bitVals = hexTableStr.indexOf(hexStr[len - 1]) % 4;
    bitVals <<= 4;
    result += sfTableStr[bitVals]
  }
  
  return result;
};
