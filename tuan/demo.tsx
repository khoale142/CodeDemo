import { Component, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';

// Props và State types
interface CounterProps {
  title: string;
}

interface CounterState {
  count: number;
}


class Counter extends Component<CounterProps, CounterState> {
  private timerId: number | null = null;

  constructor(props: CounterProps) {
    super(props);
    this.state = { count: 0 };
    console.log('🔵 [CONSTRUCTOR] Component được tạo');
  }

  render(): ReactNode {
    console.log('🟡 [RENDER] Component đang render');
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Tăng</button>
        <button onClick={this.decrement}>Giảm</button>
      </div>
    );
  }

  // ============================================
  // 1️⃣ componentDidMount
  // - Chạy SAU khi component được thêm vào DOM
  // - Dùng để: Fetch API, setup timer, subscriptions
  // - Chỉ chạy 1 lần
  // ============================================
  componentDidMount(): void {
    console.log('🟢 [componentDidMount] Component đã mount vào DOM!');
    console.log('   → Đây là nơi fetch API, setup timer...');
  }

  // ============================================
  // 2️⃣ componentDidUpdate
  // - Chạy SAU mỗi lần re-render (trừ lần đầu)
  // - Dùng để: So sánh prev/current, fetch data mới
  // - ⚠️ Phải có điều kiện khi gọi setState!
  // ============================================
  componentDidUpdate(prevProps: CounterProps, prevState: CounterState): void {
    console.log('🟠 [componentDidUpdate] Component vừa update!');
    
    if (prevState.count !== this.state.count) {
      console.log(`   → Count thay đổi: ${prevState.count} → ${this.state.count}`);
    }
    
    if (prevProps.title !== this.props.title) {
      console.log(`   → Title thay đổi: "${prevProps.title}" → "${this.props.title}"`);
    }
  }

  // ============================================
  // 3️⃣ componentWillUnmount
  // - Chạy TRƯỚC khi component bị xóa khỏi DOM
  // - Dùng để: CLEANUP - clear timer, hủy subscriptions
  // - ⚠️ Không cleanup = MEMORY LEAK!
  // ============================================
  componentWillUnmount(): void {
    console.log('🔴 [componentWillUnmount] Component sắp bị unmount!');
    console.log('   → Đang cleanup timer...');
    
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
      console.log('   ✅ Timer đã được clear!');
    }
  }

  // Event handlers
  private increment = (): void => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  private decrement = (): void => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };
}


interface AppState {
  showCounter: boolean;
  title: string;
}

class LifecycleDemo extends Component<object, AppState> {
  state: AppState = {
    showCounter: true,
    title: 'My Counter',
  };

  private toggleCounter = (): void => {
    console.log('═'.repeat(40));
    console.log(this.state.showCounter ? '🗑️ UNMOUNTING...' : '📦 MOUNTING...');
    console.log('═'.repeat(40));
    this.setState((prev) => ({ showCounter: !prev.showCounter }));
  };

  private changeTitle = (): void => {
    const titles = ['My Counter', 'Bộ Đếm', 'Counter App'];
    const currentIndex = titles.indexOf(this.state.title);
    const nextIndex = (currentIndex + 1) % titles.length;
    console.log('═'.repeat(40));
    console.log('📝 CHANGING PROPS (title)...');
    console.log('═'.repeat(40));
    this.setState({ title: titles[nextIndex] });
  };

  render(): ReactNode {
    return (
      <div>
        <h1>React Lifecycle Demo</h1>
        <p>👀 Mở Console (F12) để xem logs!</p>
        
        <div>
          <button onClick={this.toggleCounter}>
            {this.state.showCounter ? 'Unmount Counter' : 'Mount Counter'}
          </button>
          <button onClick={this.changeTitle} disabled={!this.state.showCounter}>
            Change Title (Props)
          </button>
        </div>

        <hr />

        {this.state.showCounter ? (
          <Counter title={this.state.title} />
        ) : (
          <p>Counter đã bị unmount. Click "Mount Counter" để hiển thị lại.</p>
        )}

        <hr />
        <h3>Lifecycle Methods:</h3>
        <ul>
          <li>🟢 <b>componentDidMount</b> - Sau khi mount (1 lần)</li>
          <li>🟠 <b>componentDidUpdate</b> - Sau mỗi update</li>
          <li>🔴 <b>componentWillUnmount</b> - Trước khi unmount</li>
        </ul>
      </div>
    );
  }
}

// Render app
ReactDOM.createRoot(document.getElementById('root')!).render(<LifecycleDemo />);

export default LifecycleDemo;
