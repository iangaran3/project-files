import axios from "axios";
 
const URL='https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'


  
 export const getDetails = async (sw , ne)=>{
    try{
const {data : {data}}=await axios.get(URL,{
  params : {
    bl_latitude: sw.lat,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng,
    tr_latitude: ne.lat,
  },
  headers :  {
    'X-RapidAPI-Key': '4b96938647mshd866b09f142e6e0p1ba0adjsndcfd58c620a1',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
})
    
return data
}
    catch(error){
        console.log(error)

    }
}