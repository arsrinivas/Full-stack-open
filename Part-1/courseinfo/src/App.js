const Topper = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Delta = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Soul = (props) => {
  return (
    <div>
      {props.parts.map(part => <Delta name={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Sum = (props) => {
  const sum = props.parts.reduce((acc, curr) => {
    return acc + curr.exercises
  }, 0)

  return (
    <p>Number of exercises {sum}</p>
  )
}

const App = () => {
  const chap = {
    name: 'Half Stack application development',
    parts: [
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
      <Topper name={chap.name} />
      <Soul parts={chap.parts}/>
      <Sum parts={chap.parts} />
    </div>
  )
}

export default App