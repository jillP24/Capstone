import React, { useState, useEffect, useCallback } from 'react'
import { ChatAvatar } from 'app/components'
import { IconButton, Icon, Divider, TextField, Avatar } from '@material-ui/core'
import ScrollBar from 'react-perfect-scrollbar'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

/**
 * this page is in charge of all the messaging services of our app. We query results from here and are able to send to our 
 * database. We are connected to the graphQL Api of AWS through our API key which expires next september.
 */


//first we initialize the three inputs from our user info: grad_class, first_name, last_name

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

var count = 0 

function scrollToBottom () { 
    count += 1

    if (count <5)  { 
        window.scrollTo(0,document.body.scrollHeight);
    }
        
}


/**
 * 
 * @param {*} props  which is our user info of first_name, last_name, and graduating class
 * @returns an displayed image of all the messages queried from our dynamoDB in the correct order w/ the correct sender
 */

const Chatbox = (props) => {
    
    // this part is currently not being used
    const [message, setMessage] = useState('')
    const chatBottomRef = document.querySelector('#chat-scroll')
    const classes = useStyles()
    scrollToBottom()



// msg is an array of all messages and their respective senders.
// all_msg_len contains every message in the database
    const [msg, setmsg] = useState([]);
    const [all_msg_len, setall_msg_len] = useState([]);
   
    // get the type of header along with the API key to call our graphql query
    const headers = {
        'Content-Type' : 'application/graphq',
        'x-api-key' : 'da2-enrpm7b7rzacljgm4zm7xo53zy'
      }

      // get the correct year, firstname, and lastname
      year = props.class
      firstname = props.username
      username = firstname.concat(' ', props.last)
      

    // fetchMSG is the query for messages in a specific groupchat while fetchALLmsg is for every groupchat
    const fetchMSG =
    JSON.stringify({ "query": `query listChatPlatforms { listChatPlatforms(filter: {grad_class: {eq: \"${year}\" }})
    { items {
        grad_class
        message_number
        message
        username
      }}   }`}) ;

      const fetchAllmsg =
    JSON.stringify({ "query": `query listChatPlatforms { listChatPlatforms
    { items {
        grad_class
        message_number
        message
        username
      }}   }`}) ;


      
/**
 * useEffect is a function that is rendered when there is change. Used a library for fetching this daya called axios...
 */
    useEffect( () => {
       
        const fetchData = async () => {
            const  msg_result = await axios.post('https://ibzxw22rhvdhvgqu7n7v6yrlcq.appsync-api.us-west-2.amazonaws.com/graphql', fetchMSG, {
                headers: headers
            });
        
    const all_msg_result = await axios.post('https://ibzxw22rhvdhvgqu7n7v6yrlcq.appsync-api.us-west-2.amazonaws.com/graphql', fetchAllmsg, {
                headers: headers
        }
    );
    
        /**
         * Use a try catch block and set one of the arrays to the msg array using 'setmsg' and set the other array using 'setall_msg_len'
         * Sort the messages before setting it to the 'msg' array by the 'message_number' attribute
         *  */ 

    try
{   const result = msg_result.data.data.listChatPlatforms.items;
    const all_result = all_msg_result.data.data.listChatPlatforms.items;  
    result.sort((a,b) => (a.message_number > b.message_number) ? 1 : -1); 
    setmsg(result);
    setall_msg_len(all_result.length);
} catch (err){   
    console.log(err)   
    setTimeout(fetchData, 1000)
}
    };
    fetchData();
});


/**
 * 
 * @param {*} event : this function is called when a user presses the send button or enter
 * @return send a graphQL. mutation to our dynamoDB with the correct message, message_number, username, and graduating class
 */
    const sendMessageOnEnter = (event) => {
        if (event.key === 'Enter' && !event.shiftKey || event.key === event.IconButton) {
            
            let tempMessage = message.trim()
            
            if (tempMessage !== '') {
    
                console.log(year)
                const header = {
                    'Content-Type' : 'application/graphq',
                    'x-api-key' : 'da2-enrpm7b7rzacljgm4zm7xo53zy'
                  }
                 var msg_id = all_msg_len +1;
                 console.log(msg_id);
                 const fetchMSGs =
                JSON.stringify({ "query": `mutation myMutation { createChatPlatform(input: {grad_class: \"${year}\", message: \"${tempMessage}\", message_number: ${msg_id}, username: \"${username}\"}     )
                {
                    grad_class
                    message_number
                    message
                    username
                  }   }`}) ;
            
            const result = axios.post('https://ibzxw22rhvdhvgqu7n7v6yrlcq.appsync-api.us-west-2.amazonaws.com/graphql', fetchMSGs, {
                            headers: header
                    }
                );
                            
            }
            setMessage('');
        }
    }

 
        /**
        * Display the screen with the messages and users in the correct order
        *  */ 

    return (
        
        <div className="flex-column h-full">

            <div
                className={clsx(
                    'flex justify-between items-center pl-5 py-3 pr-3',
                    classes.lightBG
                )}
            >
                <div className="flex items-center">
                    
                </div>
                
            </div>
            <scrollToBottom>    
            <ScrollBar className="flex-grow" id="chat-scroll">
           
                {msg.map((item, ind) => (
                    <div
                        className={clsx({
                            'p-5 flex': true,
                            
                        })}
                        key={ind}
                    >
                        {(
                            <Avatar src={item.avatar} />
                        )} 
                        <div className="ml-3"> 
                            {(
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
            </scrollToBottom>
           
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
