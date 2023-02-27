import logo from './logo.svg';
import './App.css';

// import {Greet} from './components/Greet'; for name import

import Greet from './components/Greet'; // You can give any name here then Gree
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Eventhandle from './components/Eventhandle';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/appStyle.css';
import styles from './components/appStyles.module.css'
import Form from './components/Form';
import LifecycleP from './components/LifecycleP';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
function App() {
  return (
    <div className="App">

      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleP /> */}
      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />  */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}

      {/* <ParentComponent /> */}
      {/* <Eventhandle /> */}
      {/* <ClassClick />
      <FunctionClick /> */}

      {/* <Counter />

      <Greet name="Rahul" lastname="K L" />
      
      <Greet name="Rohit" lastname="Sharma">
        <button>hitman</button>
      </Greet>
      <Greet name="Virat" lastname="Kohli"/>

      <Welcome name="Rahul" lastname="K L"/>
      <Welcome name="Rohit" lastname="Sharma"/>
      <Welcome name="Virat" lastname="Kohli"/> */}

    </div>
  );
}

export default App;
