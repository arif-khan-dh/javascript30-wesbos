const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

    // Array.prototype.some() // is at least one person 19 or older?
        const isAdult = people.some((person, index) => {
            const res = (new Date().getFullYear() - person.year) >= 9 
            console.log(index + ',' + person.name + ' ' + (new Date().getFullYear() - person.year))
            return res
            // console.log(new Date().getFullYear())
        })

        const isAdult_I = people.some(person => 
            new Date().getFullYear() - person.year >= 19)

        console.log(`Is atleast one person of the people adult? - ${isAdult_I}`)

    // Array.prototype.every() // is everyone 19 or older?
        const allAdult = people.every(person => 
            new Date().getFullYear - person.year >= 19)

        console.log(`Are all of the people adult? - ${allAdult}`)

    // Array.prototype.find()
        // find the comment with the ID of 823423
        const comment = comments.find((comment) => comment.id === 823423)
        console.log(comment.text)

    // Array.prototype.findIndex()
        // Find the comment with this ID
        const index = comments.findIndex(comment => comment.id === 823423)
        console.log(index)

        // delete the comment with the ID of 823423
        // console.log(comments)
        // comments.splice(index, 2)
        // console.log(comments)

        const newComments = [
            ...comments.slice(0, index),
            ...comments.slice(index+1)
        ]
        console.log(newComments)