const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}];

    const passed = students.filter(student => student['isPassed']);
    console.log(passed);

    passed.forEach(student => {
        console.log(`Congratulations ${student['name']}, you passed the ${student['course']} course!`);
    })