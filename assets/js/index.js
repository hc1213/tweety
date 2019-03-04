require.ensure(['./a'], function (require) {
    var content = require('./a');
    console.log('a========>')
})
require('../css/style.css')
console.log('i`m working too')
var img2 = document.createElement("img");
img2.src = require("../images/3.jpg");
img2.style.width = "100%"
if (__DEV__) {
    console.log(new Date());
}
document.body.appendChild(img2);



