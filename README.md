# [CollegeConnect](https://www.collegeconnect.link/) 

## About 

Our application is a messaging-based platform geared towards universities and colleges. Our mission is to provide students with a school-sponsored space in which they can communicate with classmates in their own graduating class. Our platform's sole functionality is messaging. 

This repo contains the frontend for our React.js app. The backened is hosted on AWS and was built using AWS tools such as Lambda, Cognito and AppSync. 

### Usage 

As a user logging onto CollegeConnect, you will be greeted with a “Sign-in Page” where you will have the option to create a new account or sign into an existing account. If you are new to the platform, you will be required to input your valid .edu email, a password, your preferred name, and your graduating class. Once this information is provided correctly, our authentication system will send a verification code to the email you input and then redirect you to a page where you are prompted to input your verification code (this is the authentication process). 

![image](https://user-images.githubusercontent.com/74512484/146974377-a3f7c0ad-6e85-4999-847e-6a1c356c8b11.png)

![image](https://user-images.githubusercontent.com/74512484/146974945-9831e52a-c293-4908-9ff6-2089eced2c34.png)

![image](https://user-images.githubusercontent.com/74512484/146975059-787858ce-8484-4b61-b3d1-0d815d4fd213.png)

Upon entering the verification code, you will be redirected to our home page which will display your specified class group-chat. The user is able to type messages and send them into this chat, as well as receive messages from other users in the chat in real time. Users will also have the ability to sign out of their account, which will redirect them back to the sign-in page.

<img width="1015" alt="Screen Shot 2021-12-21 at 10 48 33 AM" src="https://user-images.githubusercontent.com/74512484/146975670-c5d275f0-3427-4908-b1dc-1cf57543d292.png">

### System Design 

We created this app in a 3 and half week class project. 

For our frontend design, we integrated a [MatxReact and Javascript-based template](https://github.com/uilibrary/matx-react) into our project. This template served as a canvas for the home page of our application. We spent all of week two molding the template to serve our application best and connecting the UI to our backend logic. This process was particularly difficult, as it was imperative for us to understand the template code in order to integrate our code with it. However, the benefit of using this template was that we did not have to build our user interface from scratch. It allowed us to integrate useful and visually attractive components such as the chat box into our project. 
 
Four our backend design, we integrated graphql with our dynamo AWS database. We used graphql instead of a REST API for numerous reasons. GraphQL is able to directly query the information that the developer finds necessary rather than REST API’s which are much more inefficient. Our direction of code goes from the front-end (react) to our graphQL to our database, back to our graphQL and then lastly back to the front-end. 
 
For our messaging-related backend design, we originally followed a template sponsored by AWS; this template included four tables: a “Users” table, a “Conversations” table, a “User_conversation” table, and a “Messages” table. After trying to connect these tables in a way in which we could retrieve necessary information for different group chats and display it appropriately, we decided that we needed a new design. In following this AWS template, we continuously ran into errors such as the inability to access all of the messages in a given conversation. Ultimately, we settled on a simpler design: we have one table that uses the message number as the primary key and the other rows are used for the message sent and the username of the sender. This way when we are displaying the messages of a certain chat, we can simply fetch all the rows that include the appropriate key of the graduating class one is in. 

For our user authentication, we made use of AWS’ Cognito service. The service allowed us to use already existing logic to control user flows in our app. For example, when a user clicks “sign up” on our app, they are added to a user pool that we registered with Cognito. The user pool gives us access to all their sign up details (e.g. email, name, class) except their password. In a similar vein, when a user clicks “sign in”, their identity is verified using Cognito. The service also allowed us to control user flows such as when a user forgets their password (it sends them a reset password link via email) and when a user signs up for the first time (it sends them a verification code in their email). We added custom logic to the user sign up functionality that comes with Cognito using a lambda function. This logic allows us to check that the user signed up with a valid .edu email (in this case, only “coloradocollege.edu” is currently supported). If the user tries to sign up with an invalid email, they are sent an error message from our lambda function. 


### Operation Procedures 

On the day-to-day level, we expect our platform to operate without any disruptive bugs.  In terms of managing user accounts, the AWS service we deployed handles all user-related processes automatically in the backend. Long-term maintenance, however, will certainly be an issue. For the most part, the maintenance will be handled in the backend. For example, once a class graduates, we will have to manually update the database by getting rid of all rows in our database with the primary key of that class. Additionally, we will have to update our error handling for valid graduating classes every year (this is part of the sign-up process but is handled in the backend through AWS authentication services).Another maintenance issue we are aware of has to do with our message querying; AWS’s query API keys, which we use to enable our querying, expire every year. If we ever choose to expand the scope of this platform, we will need to renew that key every year, otherwise our query calls to the database breaks, rendering our main functionality useless. Given our fast-approaching deadline, we have not implemented a process for backing up and recovering data to protect against losing a hard drive or a ransomware attack. Again, if we choose to expand our scope in the future, this process will be imperative. 
 
In the future, we want our project to be able to have direct messaging. This way the app can feel more personal and will allow users to create closer connections with other classmates. However, we are also aware that we need administrators that have the ability to kick out certain members if they are not acting appropriately. These two features would be our next steps if we were to continue with our project. We also want to give students the ability to move group chats if they accidentally chose the wrong graduating class. Or perhaps at some point we would be able to simply put a user in the correct chat based on their email. Lastly, we want to allow users to create profiles about themselves so that we can make the app more personal and interactive. 

 

