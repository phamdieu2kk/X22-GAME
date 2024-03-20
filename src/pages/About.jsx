
import Slider from "../Components/Slider";
import FooterList from "../Components/FooterList";
import { Breadcrumb } from "antd";
const About = () => {
  return (
    <>
       <div>
        <Slider />
      </div>
      <div className="content">
      <div className="title-home">
          {/* <NavLink to={"/"} title="Trang chủ">
            Trang chủ
          </NavLink>
          <span>{">"}</span>
          <label>Hướng Dẫn & Điều Khoản </label> */}
         <Breadcrumb items={[{ title: 'Trang chủ' },{ title: 'Hướng dẫn' }]} /> 
        </div>

        <h2> Hướng Dẫn Trò Chơi</h2>
        <h2> Điều Khoản</h2>
        </div>
      <FooterList/>
    </>
  );
};

export default About;
