import { Carousel } from "react-bootstrap";
import img from "./../../../logo.svg";
import classes from "./SixthSlide.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
function SixthSlide() {
    const DUMMY_File=[{
        id:1,
        name:'Kassu Deriba',
        testimony: "The consultancy team at Exploree Consultancy provided exceptional guidance and support throughout the university application process for my daughter. Their deep expertise and personalized approach ensured she found the perfect program that aligned with her academic interests and career aspirations. I highly recommend their services to any family navigating the complex university admissions landscape."
    },{
        id:2,
        name:'Feyissa Lema',
        testimony:'Exploree Consultancy\'s consultants are true experts in university admissions. Their guidance was invaluable as I navigated the application process for my child. They provided insightful feedback on essay writing, helped strengthen my child\'s profile, and offered strategic advice that gave us a competitive edge. I couldn\'t have done it without this consultancy\'s exceptional service.'
    },{
        id:3,
        name:'Natnael Taye',
        testimony:"Working with the consultants at Exploree Consultancy was a game-changer for me. They really took the time to understand my academic interests and career goals, and helped me craft an application strategy that showcased my unique strengths. Thanks to their guidance, I was accepted to my dream university's highly competitive program."
    },{
        id:4,
        name:'Alazar Alemu',
        testimony:"The consultants at Exploree Consultancy were instrumental in helping me navigate the complex world of university admissions. They reviewed my profile, provided detailed feedback on my essays, and even conducted mock interviews to help me prepare. Their tailored approach and unwavering support are a big reason why I was accepted to multiple prestigious programs. I'm so grateful for their help!"
    }]
  return (
    <div className={classes.container}>
      <h>Client's Testimonial</h>
      <hr className={classes.horizontalLine} />
      <Carousel className={classes.Carousel}>
        {DUMMY_File.map((client)=>{
               return (
               <Carousel.Item key={client.id}>
               <div>
                 <p className={classes.clientTestimony}>
                  " {client.testimony} "
                 </p>
                 <div className={classes.clientContainer}>
                   <img src={img} className={classes.img} alt='Logo Icon' />
                   <div className={classes.clientInformation}>
                     <h>{client.name}</h>
                     <p>Client</p>
                   </div>
                 </div>
               </div>
             </Carousel.Item>
               )
        })}
        
        
      </Carousel>
    </div>
  );
}
export default SixthSlide;
