
import "./style.css"


const Slider = ({title}) => {
  return (
    <div>
      <section className="section-slider">
        <div className="section-img">
          <img src="https://trangnguyen.edu.vn/assets/images/bg-header.png"/>
          
        </div>
       
           <div className="title-bread-crumb">{title}</div>
             
           
        
      </section>
      
    </div>
  );
};

export default Slider;
