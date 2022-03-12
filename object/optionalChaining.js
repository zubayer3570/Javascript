//purpose of optional chaining is to avoid getting error, rather it returns undefined 
//syntax explanation: in line 19 javascript ask if 'educationAvg' is defined of not, it yes then go forward, if not then return undefined
var object = {
    name: "zubayer",
    height: "5.8",
    age: 21,
    skinTone: 'dark',
    education: {
        jsc: 'AK school',
        ssc: 'Ak High School',
        hsc: 'eusc',
        result: {
            jscResult: 'golden',
            sscResult: 'A+',
            hscResult: 'golden'
        }
    }
}
const jscResult = object.educationAvg?.result.jscResult
console.log(jscResult)