import { useEffect, useState } from 'react';  
import axios from 'axios';  

const useGetData = (endpoint: string) => {  
    const baseUrl = process.env.REACT_APP_API;  
    const [data, setData] = useState<any>(null);  
    const [loading, setLoading] = useState<boolean>(true); 
    const [error, setError] = useState<any>(null);  

    const getData = async () => {  
        try {  
            const config = {  
                url: `${baseUrl}/${endpoint}`,  
                method: 'GET'  
            };  
            const response = await axios(config);  
            console.log(response.data)
            return response.data; 
        } catch (error) {  
            console.error(error);  
            setError(error); 
        }  
    };  

    useEffect(() => {  
        const fetchData = async () => {  
            setLoading(true); 
            const data = await getData(); 
            setData(data); 
            setLoading(false); 
        };  

        fetchData(); 
    }, [endpoint]); 

    return { data, loading, error };   
};  

export default useGetData;