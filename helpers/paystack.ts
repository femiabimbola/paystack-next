import axios from "axios";

export interface IInitializeTransaction {
  amount:number;
  email:string;
  reference?:string;
  callback_url?:string
  metadata?: Record<string, any>
}


  export const InitializeTransaction = async(data: IInitializeTransaction) => {
    const API_URL = "https://api.paystack.co";
    const API_KEY = process.env.PAYSTACK_SECRET_KEY;

    const response = await axios.post(
      `${API_URL}/transaction/initialize`, data, {
        headers:{
           Authorization: `Bearer ${API_KEY}`,
           'Content-Type': 'application/json'
          }
      }
    )
    
    response.data;
  }
  