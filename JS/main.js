/*
object function
*/

let students = [
    {
        name:'aa',
        score: 50,
        grade:'D'
    },{
        name:'bb',
        score: 80,
        grade:'A'

    }
]

let student =students.find((s) => {
    if (s.name == 'aa'){
        return true
    }
})

let double_score =students.map((s) => {
    s.score =s.score * 2
    return s
})

let highScore = students.filter((s) => {
    if(s.score >= 120){
        return true
    }
})

console.log(student)

console.log('double_score',double_score)
console.log('highScore',highScore)