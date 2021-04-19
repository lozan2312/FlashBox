import React from 'react';
import AboutData from './aboutData';


class AboutInner extends React.Component{
  render(){
    return(
      <div className="col-12 col-md-7">
     {AboutData.map((item)=>{
       return(
         (("text8" in item)==1)?
         (<ul>
               <h3>{item.title}</h3>
               <li>{item.text1}</li>
               <li>{item.text2}</li>
               <li>{item.text3}</li>
               <li>{item.text4}</li>
               <li>{item.text5}</li>
               <li>{item.text6}</li>
               <li>{item.text7}</li>
               <li>{item.text8}</li>
         </ul>)
       :
       (("factor1" in item)==1)?
         <ul>
         <h3>{item.title}</h3>
           <li><span><b><u>{item.subtitle}</u></b></span>
             <ul>
               <li>{item.text1}</li>
               <li>{item.text2}</li>
               <li>{item.text3}</li>
               <li>{item.text4}</li>
             </ul>
           </li>
           <li><span><b><u>{item.subtitle2}</u></b></span>
             <ul>
               <li>{item.factor1}</li>
               <li>{item.factor2}</li>
               <li>{item.factor3}</li>
               <li>{item.factor4}</li>
             </ul>
           </li>
         </ul>
         :
         (("type1" in item)==1)?
           <ul className="mt-5">
           <h4>{item.title}</h4>
             <li><span><b><u>{item.type1}</u></b></span>
               <ul>
                 <li>{item.text1}</li>
                 <li>{item.text2}</li>
               </ul>
             </li>
             <li><span><b><u>{item.type2}</u></b></span>
                <ul>
                  <li>{item.text3}</li>
                   <li>{item.text4}</li>
                 </ul>
               </li>
             </ul>
           :
           (("txt1" in item)==1)?
           <ul>
             <h3>{item.title}</h3>
             <li>{item.txt1}</li>
             <li>{item.txt2}</li>
             <li>{item.txt3}</li>
             <li>{item.txt4}</li>
           </ul>
             :
               <ul>
                <h3>{item.title}</h3>
                 <li>{item.text1}</li>
                 <li>{item.text2}</li>
                 <li>{item.text3}</li>
               </ul>
             )})}
      </div>
    )
  }
}
export default AboutInner
