var t = require('tap')

var PSDocumentHTML = require('../lib/components/PSDocumentHTML')

t.test("PSDocumentHTML should be a thing", function(t){
  
  var readStream = PSDocumentHTML({
    psd: __dirname + '/stuff/some stuff.psd'
  })
  
  readStream.pipe(process.stdout)
  
})