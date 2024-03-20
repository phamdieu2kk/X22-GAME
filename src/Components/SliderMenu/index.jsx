import { NavLink } from "react-router-dom";
import "./style.css";

const SliderMenu = () => {
  return (
    <div>
     
        <section className="section-about">
           <div className="section-img">
          <img src="https://trangnguyen.edu.vn/assets/images/bg-header.png" />
        </div>
        <div className="bodywrap">
        <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="thumb-content-left">
                  <h2 className="title-slider">
              <img src="https://st.gamevui.com/images/image/2020/05/14/giai-cau-do-640.jpg"/>
            </h2>
            <div className="about-link">
                    <NavLink
                      className="about-button"
                      title="Xem ngay"
                      to={"/products"}>
                      PLAY
                    </NavLink>
                  </div>
                </div>
              </div>
             
              </div> 
              </div> 
            </div>
          </section>


      
    </div>
  );
};

export default SliderMenu;
