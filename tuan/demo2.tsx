import { Component } from 'react';
import ReactDOM from 'react-dom/client';
class Header extends Component<object, { color: string }> {
  constructor(props: object) {
    super(props);
    this.state = { color: "red" };
    console.log("1️⃣constructor");
  }
  componentDidMount() {
    console.log("3️⃣componentDidMount");
    setTimeout(() => {
      console.log("\n--- Gọi setState() ---");
      this.setState({ color: "yellow" });
    }, 1000);
  }
  componentDidUpdate() {
    console.log("5️⃣componentDidUpdate - Màu mới: " + this.state.color);
  }
  render() {
    console.log("2️⃣/4️⃣ render - color: " + this.state.color);
    return (
      <div>
        <h1>Màu: {this.state.color}</h1>
        <p>Mở Console (F12) để xem thứ tự lifecycle</p>
      </div>
    );
  }
}
ReactDOM.createRoot(document.getElementById('root')!).render(<Header />);