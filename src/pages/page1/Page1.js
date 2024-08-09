import classes from './Page1.module.css'
import ThirdSlide from './ThirdSlide/ThirdSlide'
import FirstSlide from './firstSlide/firstSlide'
import SecondSlide from './secondSlide/SecondSlide'
import FourthSlide from './FourthSlide/fourthSlide'
import FifthSlide from './fifthSlide/fifthSlide'
import SixthSlide from './sixthSlide/SixthSlide'
import SeventhSlide from './SeventhSlide/SeventhSlide'
import EighthSlide from './EighthSlide/EighthSLide'
import { Helmet } from 'react-helmet'


function Page1(){
    
    return <div>
        <Helmet>
            <meta  charSet='UTF-8' name='Exploree Consultancy'/>
            <title>Exploree Educational Consultancy</title>
        </Helmet>
       <FirstSlide/>
       <SecondSlide/>
       <ThirdSlide/>
       <FourthSlide/>
       <FifthSlide/>
       <SixthSlide/>
       <div id="contact">
       <SeventhSlide  />
       </div>
       
       <EighthSlide/>
       
    </div>
}
export default Page1