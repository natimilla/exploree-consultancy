import classes from './CountriesList.module.css';
import canada from './Images/canada-flag-large.jpg';
import USA from './Images/united-states-of-america-flag-large.jpg';
import Poland from './Images/poland-flag-large.jpg';
import Italy from './Images/italy-flag-large.jpg';
import Turkey from './Images/turkey-flag-large.jpg';
import China from './Images/china-flag-large.jpg';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from 'aos';
function CountriesList(){
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    const DUMMY_FILE=[{
        id:1,
        title:'Canada',
         img:canada,
         explanation:'Canada consistently ranks as one of the best countries in the word and is currently the number one best country for quality of life.\
Study in Canada you will receive an internationally recognized education from some of the educators and academic in the word. ',
    },{
        id:2,
        title:'USA',
        img:USA,
        explanation:'USA has emerged as a leading country known for its quality education. Exploree has links with more than 60+ universities almost all over the states.'
    },{
         id:3,
         title:'Poland',
         img:Poland,
         explanation:'Poland is country in the heart of Europe with very quality education and Top ranked universities globally. We assist you to get Schengen visa which will allow you to to travel 26 European countries legally.'
    },{
        id:4,
        title:'Italy',
        img:Italy,
        explanation:'Italy is Excellent in research, science and creativity.EEC assists students to get full scholarship. Students will get Schengen visa that will allow the to travel all over Europe legally.'
    },{
        id:5,
        title:'Turkey',
        img:Turkey,
        explanation:'Turkey has traditionally been study abroad destinations with many prestigious universities and courses to choose from.'
    },{
        id:6,
        title:'China',
        img:China,
        explanation:'China is one of the countries with best economy and business in the world we have link with more than 80 universities all over china'
    }]
    return <div className={classes.container}>
           {DUMMY_FILE.map((country)=>{
            return <div className={classes.subContainer}>
            <div><img src={country.img} className={classes.img} alt={`${country.title} image`}/></div>
            <div><h className={classes.title} data-aos="zoom-in-up">{country.title}</h></div>
            <p className={classes.description} data-aos="zoom-in-up">{country.explanation}</p>
           </div>
           })}
    </div>
}
export default CountriesList;