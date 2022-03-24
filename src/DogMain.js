import logo from './img2.jpg';
import { faker } from "@faker-js/faker";

const testdata = [
  {
    text: "헌법재판소 재판관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다.",
    imgUrl: "https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg"
  },{
  text:"모든 국민은 법 앞에 평등하다. 누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다.",
  imgUrl: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg"
}]

function DogMain(props) {
  const h1Element = <h1>{props.title}</h1>;
  const ImgElement = <img src={logo} className='App-logo' alt="logo" />;

  return (
    <>
        { h1Element }
        { ImgElement }
        <p>
          한글로 바꿔보세요. <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {testdata.map((contents) => {
            return <div>
              <img src={faker.image.avatar()} alt="강아지 사진" />
              {contents.text}
              <img src={faker.image.cats()} alt="강아지 사진" />
              </div>
          })}
        </ul>
    </>
  );
}

export default DogMain;
