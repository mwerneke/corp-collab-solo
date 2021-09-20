 
* Corp|Collab Software *

DEMO Log in : ADMIN unicorn123 - 

* Admin priviliges include deleting questions against corporate policy and the same goes with videos submitted in which have been made available for employee access

Commands to run program:
* npm install
* npm run server
* npm run client

See Dependecy list following Overview and Page Descriptions

- Overview

This program is designed for a user to register and make video tutorial requests similar to traditional help tickets. Other collaborators in the network are able to fulfill these requests and publish to the corporate library.

- Authentication: The plugin used is: Passport

- Home Page

    Allows user to click on "Make a Video Request Button" where they are re-directed to
    Add Requests page. This is the initialization process of creating a request

- Add Requests

    There are 3 input fields set-up to gather data pertaining to the Users request
    There's an option to Create Ticket which will indeed push the ticket to DB and then redirect to Open Requests Page
    The Return to Home button re-directs to the Home Page

- Open Request

    This page consists of table data gathered from the DB and it is rendered here. 
    There's an option that allows a User to 'Select' and Create a Video recording of the request
    -Upon choosing 'Select' the user is directed to the Video recording component
    
- Video Recording component is not accessible unless a request has been selected/chosen for fulfillment

    This component consists of a Start Recording Button, when selected a User will choose which Screen or Window they 
    would like to record.
    You have an option to Pause recording and Stop recording
    Once stopped you may choose one of the following (Reset Recording, Download, and Upload)
        - Reset Recording: Resets the Record
        - Download: Will download the file in the browser
        - Upload: Submits and publishes the video to the library, this also triggers the Open Request page to refresh the list, deeming the question as fulfilled 
          
    Once Upload has been selected, the User will be redirected to the library that will include all fulfilled videos

- Library

    This page renders all created videos

- Search Bar functionality will find results based on user input and display results in a library


- Dependency List

  "dependencies": {
    "@material-ui/core": "^4.12.3",
    "@material-ui/icons": "^4.11.2",
    "@material-ui/styles": "^4.11.4",
    "axios": "^0.21.1",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "cookie-session": "^2.0.0-rc.1",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "file-saver": "^2.0.5",
    "nanoid": "^3.1.25",
    "navbar": "^2.1.0",
    "passport": "^0.4.1",
    "passport-local": "^1.0.0",
    "pg": "^8.7.1",
    "pg-pool": "^3.4.1",
    "prop-types": "^15.7.2",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-player": "^2.9.0",
    "react-redux": "^7.2.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "^4.0.1",
    "redux": "^4.0.5",
    "redux-logger": "^3.0.6",
    "redux-saga": "^1.1.3",
    "use-screen-recorder": "^1.0.1"
  },



                 _
               *| |      ][\/][ E r s e n n e
                | |* _
             _  | |_| |
           *| |_|  ___|
            |___   |
               *|  |
                |  |*
                |  |