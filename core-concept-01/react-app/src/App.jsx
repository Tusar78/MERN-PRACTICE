import "./App.css";

function App() {
  const personAopo = {
    name: "Aopo",
    age: 24,
    major: "web",
  };
  const personSalman = {
    name: "Salman",
    age: 24,
    major: "Graphics",
  };
  const personJannat = {
    name: "Jannat",
    age: 23,
    major: "UI/UX",
  };

  const personStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px'
  }

  return (    
    <>
      <div style={personStyle}>
        <Person personData={personAopo}></Person>
        <Person personData={personSalman}></Person>
        <Person personData={personJannat}></Person>
      </div>
    </>
  );
}

function Person({ personData: { name="Tusar", age="25", major="web" } }) {
  const styleObj = {
    border: "1px solid purple",
    borderRadius: "10px",
    padding: "12px 60px",
  };
  return (
    <>
      <div className="profile" style={styleObj}>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Major: {major}</p>
      </div>
    </>
  );
}

export default App;
