
export function checkIsRoom (chatId){
    
    console.log("Checking is Room -->", chatId);
    const prefixChatname = chatId.split("-");

    if(prefixChatname[0] === "Room")
    {
        console.log("truee")
        return true;
    }
    else{
        console.log("false")

        return false;
    }

}