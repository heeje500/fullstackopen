const Header = (props) => {
  console.log(props)
  return(
      <h1> 
      {props.course}
      </h1>
  )
}

const Part = (props) => { //function Part returns Part name and number of exercises references parts object 
    console.log(props)
  return(
    <p> {props.part} {props.exercises} </p>
  )
}
const Content = (props) => { // references the function Part to get 
  console.log(props)

  return(
    <div> 
      <Part part = {props.parts[0].name} exercises = {props.parts[0].exercises}/>
      <Part part = {props.parts[1].name} exercises= {props.parts[1].exercises}/>
      <Part part = {props.parts[2].name} exercises = {props.parts[2].exercises}/>
    </div>
  )
}
const Total = (props) => {
  console.log(Total)

  return(
    <div>
      <p>
        Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>

    </div>
  )
}

const App = () => {
  const course = { //object called course
    name: 'Half Stack application development',
    parts: [ //array called parts
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
