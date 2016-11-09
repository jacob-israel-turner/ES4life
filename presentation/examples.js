export default [
  {
    name: 'Arrow Functions',
    es6: '(name) => console.log("hello, " + name)',
    es5: 
`function(name) {
  console.log("hello, " + name)
}`
  },


  {
    name: 'Template Literals',
    es6: 'conosle.log(`Hello, ${name}!`)',
    es5: 'console.log("Hello, " + name + "!")'
  },


  {
    name: 'Const Declarations',
    es6: 
`const dontChangeMeBro = 'Come at me.'
dontChangeMeBro = false // TypeError: Assignment to constant variable 🎉🎉
`,
    es5: 
`var dontChangeMeBro = 'Come at me.'
dontChangeMeBro = false // ¯\\_(ツ)_/¯`
  },


  {
    name: 'Let/Block Scoping',
    es6: 
`var funcArray = []
for (let i = 0; i < 10; i++) {
  funcArray.push(function() {
    console.log(i)
  })
}

funcArray[1]() // 1
funcArray[3]() // 3  
funcArray[8]() // 8`,
    es5: 
`var funcArray = []
for (var i = 0; i < 10; i++) {
  funcArray.push(function() {
    console.log(i)
  })
}

funcArray[1]() // 10
funcArray[3]() // 10
funcArray[8]() // 10`
  },

  {
    name: 'JavaScript Modules',
    es6: 
`import $ from 'jquery'

export const getParent = function(element) {
  return $(element).parent();
}`,
    es5:
`// CommonJS
var $ = require('jquery') 

module.exports.getParent = function(element) {
  return $(element).parent();
}

// AMD
define('jqueryHelpers',
  ['jquery'],
  function (jquery) {
    return {
      getParent: function(element) {
        return $(element).parent();
      }
    }
  })
// And others...`
  },


  {
    name: 'Destructuring',
    es6:
`var meObject = {
  name: 'Jacob',
  hair: 'too long'
}
  
var { name, hair } = meObject
    
logHairColor(name, hair) // Jacob's hair is too long`,
    es5:
`var meObject = {
  name: 'Jacob',
  hair: 'brown'
}
  
var name = meObject.name
var hair = meObject.hair
    
logHairColor(name, hair) // Jacob's hair is brown`
  },


  {
    name: 'Default Function Parameters',
    es6:
`function joinArray (array = [], separator = ',') {
  return array.join(separator)
}`,
    es5:
`function joinArray (array, separator) {
  if (!array) array = []
  if (!separator) separator = []
  return array.join(separator)
}`,
  },


  {
    name: 'Array Spread',
    es6:
`var firstNumbers = [1, 2, 3]
var lastNumbers = [4, 5, 6]

var allNumbers = [...firstNumbers, ...lastNumbers, 7, 8, 9]

function logArgs (a, b) {
  console.log(a, b)
}

logArgs(...allNumbers) // 1 2`,
    es5:
`var firstNumbers = [1, 2, 3]
var lastNumbers = [4, 5, 6]

var allNumbers = firstNumbers.concat(lastNumbers, [7, 8, 9])

function logArgs (a, b) {
  console.log(a, b)
}

logArgs.apply(null, allNumbers) // 1 2`,
  },


  {
    name: 'Async/Await',
    subtitle: '(Not available in DomoWeb yet!)',
    es6:
`try {
  const response = await GET(url)
  console.log(response)
} catch(e) {
  console.error(e)
}

async function GET(url) {
  return $http(url) // Returns a promise
}`,
    es5:
`GET(url)
    .then(function(res) {
      console.log(res)
    })
    .catch(function(e) {
      console.error(e)
    })

function GET(url) {
  return $http(url) // Returns a promise
}`
  }
]
