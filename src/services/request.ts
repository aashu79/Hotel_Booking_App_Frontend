import { AxiosHeaders } from "axios";
import axiosInstance from "./axios"

interface headersType{
    Authorization?: string;
}


class HttpRequest{
     token = localStorage.getItem("AccessToken");
  
    getRequest = async(url: string)=>{
        const token = localStorage.getItem("AccessToken");
        const headers: headersType = {};
        if(token){
            headers["Authorization"] = "Bearer " + token;
        }
       try{
        const response = await axiosInstance.get(url, {headers: headers as AxiosHeaders});
        return response;
       } catch(err){
        throw err;
       }

    }

    postRequest = async(url: string, data: any, file: boolean)=>{
        var headers = {}
        if(file){
            headers = { 'Content-Type': 'multipart/form-data'};
        }
        try{
            const response = await axiosInstance.post(url, data, {headers: headers, withCredentials: true});
            return response;
        }catch(err){
            throw err;
        }
    }

    putRequest = async(url: string, data: any, file: boolean)=>{
        var headers = {}
        if(file){
            headers = { 'Content-Type': 'multipart/form-data'};
        }
        try{
            const response = await axiosInstance.put(url, data, {headers: headers, withCredentials: true});
            return response;
        }catch(err){
            throw err;
        }
    }

    deleteRequest = async(url: string)=>{
        try{
            const response = await axiosInstance.delete(url, {withCredentials: true});
            return response
        }
        catch(err) {
            throw err;
        }
    }
}

export default HttpRequest;