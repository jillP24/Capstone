import React, { useState, useEffect, useCallback } from 'react'
import { ChatAvatar } from 'app/components'
import { IconButton, Icon, Divider, TextField, Avatar } from '@material-ui/core'
import ScrollBar from 'react-perfect-scrollbar'
// import { getChatRoomByContactId } from "app/views/chat-box/ChatService";
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

// THIS IS THE MESSAGING FILE

var year = 0
var firstname = ''
var username = ''

const useStyles = makeStyles(({ palette, ...theme }) => ({
    lightBG: {
        background: 'rgba(var(--body), 0.03)',
    },
    dividerBG: {
        background: 'rgba(var(--body), 0.15)',
    },
   
}))
// for previewing bot message
const globalMessageList = []


const Chatbox = (props) => {
    const [isAlive, setIsAlive] = useState(true)
    const [message, setMessage] = useState('')
    const [messageList, setMessageList] = useState([])
    // want to get username from db
    const currentUserId = '7863a6802ez0e277a0f98534'
    const chatBottomRef = document.querySelector('#chat-scroll')

    const classes = useStyles()





//=======================================

    const [msg, setMsg] = useState([]);
    const [msg_len, setMsg_len] = useState([]);
   
    const headers = {
        'Content-Type' : 'application/graphq',
        'x-api-key' : 'da2-kkfmpdswindbrmmvcfmcimxlqa'
      }

      year = props.class
      firstname = props.username
      username = firstname.concat(' ', props.last)
      

      
     
    const fetchUser =
    JSON.stringify({ "query": `query listChatPlatforms { listChatPlatforms(filter: {grad_class: {eq: \"${year}\" }})
    { items {
        grad_class
        message_number
        message
        username
      }}   }`}) ;

      const fetchAllMsg =
    JSON.stringify({ "query": `query listChatPlatforms { listChatPlatforms
    { items {
        grad_class
        message_number
        message
        username
      }}   }`}) ;



    useEffect( () => {
        const fetchData = async () => {
            const q_result = await axios.post('https://ibzxw22rhvdhvgqu7n7v6yrlcq.appsync-api.us-west-2.amazonaws.com/graphql', fetchUser, {
                headers: headers
        }
    );
    
    const all_q_result = await axios.post('https://ibzxw22rhvdhvgqu7n7v6yrlcq.appsync-api.us-west-2.amazonaws.com/graphql', fetchAllMsg, {
                headers: headers
        }
    );
    //update state component
    try
{    const result = q_result.data.data.listChatPlatforms.items;
    const all_result = all_q_result.data.data.listChatPlatforms.items;
    //listChatPlatforms
    
    setMsg_len(all_result.length);
    result.sort((a,b) => (a.message_number > b.message_number) ? 1 : -1); 
    setMsg(result);
} catch (err){
    console.log(q_result.data.data.listChatPlatforms)
    console.log(all_q_result.data.data.listChatPlatforms)
    console.log(err)
}

    };
    fetchData();
});


//=======================================




    // ================================
    const sendMessageOnEnter = (event) => {
        if (event.key === 'Enter' && !event.shiftKey || event.key === event.IconButton) {
            
            let tempMessage = message.trim()
            
            if (tempMessage !== '') {
    
                console.log(year)
                const header = {
                    'Content-Type' : 'application/graphq',
                    'x-api-key' : 'da2-kkfmpdswindbrmmvcfmcimxlqa'
                  }
                 var msg_id = msg_len +1;
                 console.log(msg_id);
                 const fetchUsers =
                JSON.stringify({ "query": `mutation myMutation { createChatPlatform(input: {grad_class: \"${year}\", message: \"${tempMessage}\", message_number: ${msg_id}, username: \"${username}\"}     )
                {
                    grad_class
                    message_number
                    message
                    username
                  }   }`}) ;
            
            const result = axios.post('https://ibzxw22rhvdhvgqu7n7v6yrlcq.appsync-api.us-west-2.amazonaws.com/graphql', fetchUsers, {
                            headers: header
                    }
                );
               
                
                let tempList = [...messageList]
                //console.log(tempList);
                
                let messageObject = {
                    text: tempMessage,
                    contactId: currentUserId,
                }

                
                tempList.push(messageObject)
                globalMessageList.push(messageObject)
                if (isAlive) setMessageList(tempList)
                dummyReply()
            }
            setMessage('')
        }
    }

     // ================================

    const dummyReply = async () => {
        setTimeout(() => {
            let tempList = [...messageList]
            let messageObject = {
                text: 'Good to hear from you. enjoy!!!',
                contactId: 'opponents contact id',
                avatar: '/assets/images/faces/13.jpg',
                name: 'Frank Powell',
            }

            tempList.push(messageObject)
            globalMessageList.push(messageObject)
            if (isAlive) setMessageList(globalMessageList)
        }, 2000)
    }

    const scrollToBottom = useCallback(() => {
        if (chatBottomRef) {
            chatBottomRef.scrollTo({
                top: chatBottomRef.scrollHeight,
                behavior: 'smooth',
            })
        }
    }, [chatBottomRef])

    useEffect(() => {
        scrollToBottom()
        return () => setIsAlive(false)
    }, [messageList, scrollToBottom])

    return (
        <div className="flex-column h-full">
            <div
                className={clsx(
                    'flex justify-between items-center pl-5 py-3 pr-3',
                    classes.lightBG
                )}
            >
                <div className="flex items-center">
                    {/* <ChatAvatar
                        src="/assets/images/face-2.jpg"
                        status="online"
                    /> */}
                    {/* STATUS ONLINE */}
                    {/* <div className="ml-3">
                        <h5 className="mt-0 mb-3px text-14"> Grou2022p Chat</h5>
                      
                    </div> */}
                </div>
                {/* <IconButton >
                    <Icon className="text-body" fontSize="small">
                        clear
                    </Icon>
                </IconButton> */}
            </div>
            <ScrollBar className="flex-grow" id="chat-scroll">
                {msg.map((item, ind) => (
                    <div
                        className={clsx({
                            'p-5 flex': true,
                            'justify-end': currentUserId === item.username,
                        })}
                        key={ind}
                    >
                        {currentUserId !== item.username && (
                            <Avatar src={item.avatar} />
                        )} 
                        <div className="ml-3"> 
                            {currentUserId !== item.contactId && (
                                <h5 className="mt-0 mb-1 text-14">
                                    {item.username}
                                </h5>
                            )}
                            <div
                                className={clsx(
                                    'p-2 mb-2 max-w-240 border-radius-4 text-14 whitespace-pre-wrap',
                                    classes.lightBG
                                )}
                            >
                                {item.message}
                            </div> 
                            
                        </div>
                    </div>
                ))}

                {/* example of image sent by current user*/}
                <div className="p-5 flex justify-end">
                    <div className="ml-3">
                        <div className="p-2 mb-2 flex justify-end items-center max-w-240 bg-light-gray border-radius-4 text-14">
                        
                            <div className="ml-3">
                                {/* <h6 className="mt-0 mb-1">Asus K555LA.png</h6>
                                <span className="text-muted font-medium text-13">
                                    21.5KB
                                </span> */}
                            </div>
                        </div>
                        {/* <span className="text-muted text-13 font-medium">
                            1 minute ago
                        </span> */}
                    </div>
                </div>
            </ScrollBar>
            <div>
                <Divider className={classes.dividerBG} />
                <TextField
                    placeholder="Type here ..."
                    multiline
                    rowsMax={4}
                    fullWidth
                    InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                            <div className="flex">
                                <IconButton size="small" value={message}
                                onChange={(e) => setMessage(e.target.value)} 
                                onClick={sendMessageOnEnter}> 
                                    {/* send button needs to actually work */}
                                    <Icon className="text-body"> send_button</Icon>
                                </IconButton>
                            </div>
                        ),
                        classes: { root: 'pl-5 pr-3 py-3 text-body' },
                    }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyUp={sendMessageOnEnter}
                    
                     
                />
            </div>
        </div>
    )
}

export default Chatbox
