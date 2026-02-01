import { Component } from 'react';
import ReactDOM from 'react-dom/client';
class Header extends Component<object, { color: string }> {
  constructor(props: object) {
    super(props);
    this.state = { color: "red" };
    console.log("1️⃣constructor");
  }

  componentDidMount() {
    console.log("3️⃣componentDidMount - mount component vào DOM");
    setTimeout(() => this.setState({ color: "yellow" }), 1000);
  }

  render() {
    console.log("2️⃣render");
    return <h1>Favourite: {this.state.color}</h1>;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Header />);