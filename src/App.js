import logo from './img2.jpg';
import './App.css';
import { faker } from "@faker-js/faker";


const testdata = [
  "헌법재판소 재판관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다.",
"모든 국민은 법 앞에 평등하다. 누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다."
]

function App() {
  const h1Element = <h1>H1 제목 태그입니다.</h1>;
  return (
    <div className="App">
      <header className="App-header">
        { h1Element }
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. hsbin316 yas
        </p>
        <ul>
          {testdata.map((contents) =>li)}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
