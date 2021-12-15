import React, { useState, useEffect, useCallback } from 'react'
import { ChatAvatar } from 'app/components'
import { IconButton, Icon, Divider, TextField, Avatar } from '@material-ui/core'
import ScrollBar from 'react-perfect-scrollbar'
// import { getChatRoomByContactId } from "app/views/chat-box/ChatService";
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

// THIS IS THE MESSAGING FILE

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

const Chatbox = ({ togglePopup }) => {
    const [isAlive, setIsAlive] = useState(true)
    const [message, setMessage] = useState('')
    const [messageList, setMessageList] = useState([])
    // want to get username from db
    const currentUserId = '7863a6802ez0e277a0f98534'
    const chatBottomRef = document.querySelector('#chat-scroll')

    const classes = useStyles()


// ===================================

// call Rest API
//return value of lambda here

var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };
    
var variableToStore = 0;

const login_function_url = "https://xox71jh48e.execute-api.us-west-2.amazonaws.com/default";

fetch(login_function_url, requestOptions)
    .then(response => response.text())
    .then(result =>  variableToStore= (JSON.parse(result).body))
    .catch(error => console.log('error', error));


console.log(variableToStore);


//=======================================

    const [msg, setMsg] = useState([]);
   
    const headers = {
        'Content-Type' : 'application/graphq',
        'x-api-key' : 'da2-kkfmpdswindbrmmvcfmcimxlqa'
      }
      var year = "2023";
     
    const fetchUser =
    JSON.stringify({ "query": `query listChatPlatforms { listChatPlatforms(filter: {grad_class: {eq: \"2023\" }})
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
    //update state component
    const result = q_result.data.data.listChatPlatforms.items;
    //listChatPlatforms
  
    setMsg(result);
   
    };
    fetchData();
});


//=======================================




    // ================================
    const sendMessageOnEnter = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            
            let tempMessage = message.trim()
            
            if (tempMessage !== '') {
               

                console.log("here");
                const header = {
                    'Content-Type' : 'application/graphq',
                    'x-api-key' : 'da2-kkfmpdswindbrmmvcfmcimxlqa'
                  }
                 
                 const fetchUsers =
                JSON.stringify({ "query": `mutation myMutation { createChatPlatform(input: {grad_class: \"2023\", message: \"${tempMessage}\", message_number: 4, username: \"random\"}     )
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
        if (isAlive) {
            setMessageList([
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text:
                        'Good morning',
                    
                    id: '323sa680b3249760ea21rt47',
                    name: 'Jill',
                   
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text:
                        'How are you?',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e277a0f98534',
                    name: 'Nick',
                  
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Good, thanks.',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '323sa680b3249760ea21rt47',
                    name: 'Jill',
                   
                    status: 'online',
                    mood: '',
                },
               {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e277a0f98534',
                    name: 'Nick',
                  
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text:
                        'Do you ever find yourself falling into the “discount trap?”',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '323sa680b3249760ea21rt47',
                    name: 'Jill',
                   
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text:
                        'Giving away your knowledge or product just to gain clients?',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e277a0f98534',
                    name: 'Nick',
                   
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Yes',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '323sa680b3249760ea21rt47',
                    name: 'Jill',
                    
                    status: 'online',
                    mood: '',
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-02-10T08:45:28.291Z',
                    id: '7863a6802ez0e277a0f98534',
                    name: 'Nick',
                    
                    status: 'online',
                    mood: '',
                }, 
            ])
        }
        // getChatRoomByContactId(currentUserId, "323sa680b3249760ea21rt47").then(
        //   ({ data }) => {
        //     if (isAlive) {
        //       setMessageList(data?.messageList);
        //     }
        //   }
        // );
    }, [isAlive])

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
                    <div className="ml-3">
                        <h5 className="mt-0 mb-3px text-14">Nick</h5>
                        <span className="text-muted font-medium">Active</span>
                    </div>
                </div>
                <IconButton onClick={togglePopup}>
                    <Icon className="text-body" fontSize="small">
                        clear
                    </Icon>
                </IconButton>
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
                            <span className="text-muted text-13 font-medium">
                                1 minute ago
                            </span>
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
                                <IconButton size="small">
                                    {/* send button needs to actually work */}
                                    <Icon className="text-body">send_button</Icon>
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
