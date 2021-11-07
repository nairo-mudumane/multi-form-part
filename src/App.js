import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [form, setForm] = React.useState({
    email: '',
    name: '',
    password: '',
  });
  const updateForm = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={updateForm}
            value={form.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={updateForm}
            value={form.name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={updateForm}
            value={form.password}
          />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
