import { useEffect } from "react"
import { useSocketContext } from "../Context/SocketContext"
import useConverstaion from "../zustand/useConversation"
import notificationSound from '../Assets/Sounds/Notification.mp3'

function useListenMessage() {
const {socket} = useSocketContext()
const {messages,setMessages} = useConverstaion()

useEffect(()=>{
    socket?.on("newMessage",(newMessage) => {
        const sound = new Audio(notificationSound)
        sound.play()
        setMessages([...messages,newMessage])
    })

    return () => socket.off("newMessage")
},[socket,setMessages,messages])
}

export default useListenMessage