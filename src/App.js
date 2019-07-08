import React, { Component } from "react"
import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:8010/api"
})

class App extends Component {
  state = {
    users: []
  }

  async componentDidMount() {
    const { data: users } = await api.get("/users")
    this.setState({ users })
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
