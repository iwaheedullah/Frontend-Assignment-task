/*import axios from "axios";

export function loadData(){
    return(dispatch)=>{
        return axios.get("https://disease.sh/v3/covid-19/all").then((response)=>{
            dispatch(getData(response.data.cases));
        })
    }
}

export function getData(content){
    return{
        type:"application/json",
        content:content
    }
}*/