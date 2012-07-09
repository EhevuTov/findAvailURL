var dns = require ( 'dns' )

// feel free to modify these 2 integers
// be careful though as this grows like 36^n
var domainLenMin = 3
var domainLenMax = 3

var charFirst = 48 // '0'
var charLast  = 90 // 'Z'
var codes     = [ 'com', 'ly'] // domain names to check for (currently not implemented)

// checks a url string for availability and errors on 'err'
function checkAvailable( url ) {
  dns.resolve4( url, function (err, addresses) {
    if (err) console.log (url + " : " + err)
  })
}

// permutes through domain prefixes
function permuteURL( domain ) {
//  console.log( domain )
  if (domainLenMin >= domain.length) { checkAvailable( domain + '.com') }
  if ( domain.length === domainLenMax ) { 
    checkAvailable( domain + '.com')
  }
  else { 
    for( var i = charFirst; i <= charLast; i++) {
      // this could be optimised to not check each time
      if (i == 58) { i = 65 }
      permuteURL( domain + String.fromCharCode(i) ) 
    }
  }
}

// main() starting function
permuteURL( String.fromCharCode() )
