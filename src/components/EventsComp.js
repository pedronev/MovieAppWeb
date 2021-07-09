import React,{Component} from 'react';
// import Enquiries from '../containers/Enquiries';

import Movie from './movie';
import MovieDetailNoBooking from './MovieDetailsNoBooking';
import { Navigation } from './navigation';



// class LatestComp extends Component{
//     render(){
//         // function bookNow(movie) {
//         //     alert(`This country name is: ${country.name}.
//         //           The currency is: ${country.currency}.
//         //           The native is: ${country.native}.
//         //           the languaje is: ${country.languages[0].name}
//         //     `
            
//         //     );
//         //   }

//         return(
//             <div>
//             <Navigation  />
//              <div className="container">
//             <h2>Latest Movies</h2>
//             <div className="row" style={{display:"flex" , justifyContent:"space-between"} }>
//             <Movie className={"col-xs-6 col-md-3"} title={"COCO"} img={"https://image.ibb.co/dQwWSx/coco.jpg"}/>
//             <Movie className={"col-xs-6 col-md-3"} title={"The Incredibles 2"} img={"https://lumiere-a.akamaihd.net/v1/images/image_8eba0e1a.jpeg?region=0%2C0%2C540%2C810"}/>
//             <Movie className={"col-xs-6 col-md-3"} title={"Avengers"} img={"https://images-na.ssl-images-amazon.com/images/I/81rypQUyjFL._AC_SX425_.jpg"}/>
//             </div>
//              </div>
//             </div>

 


//             // <Movie/>
//         )
//     }
// }

const showCourses=({eventsData})=>{


    if(eventsData['latest']){
        console.log('courseData===>',eventsData);
        const list=eventsData.latest.map((item)=><MovieDetailNoBooking className={"col-xs-6 col-md-3"}
        title={item.name} img={item.imageUrl} id={item._id} language={item.language} rate={item.rate} type={item.type}>
        </MovieDetailNoBooking>)
        return list
    }
}

const EventsComp=(props)=>{

    return(
        <div  className="home-latest">
            <Navigation  />
            <h2>Nearby Events</h2>
            <div className="row">
            {showCourses(props)}
            </div>
        </div>
    )   
}

export default EventsComp;