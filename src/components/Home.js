import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
    const [ messages, setMessages] = useState([]);
    useEffect(() => {
        axios.get('https://dev-kuza-backend.herokuapp.com').then(res => {console.log(res)
    setMessages(res.data)})
    }
    )

    return (
        <div>
            {/* {messages.map(message=> (<h1>{message.message}</h1>))} */}
            { 
    Object.keys(messages).map((message, index)=> (<h1 key={index}>{message.message}</h1>))
}  
        </div>
    )
}

export default Home
