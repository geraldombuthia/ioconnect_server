# IOconnecT
This is an IoT web platform that provides endpoints to receive, store and present data from iot devices.
It is  built using nodejs, express, and mongodb for the backend.

## Objectives

### Short Term/ Development objectives
- Receive data from an IoT device.
- Process data received.
- Store data received in a database.
- Ability to retrieve this data and present it to a user
- Fast response during operation

### Long Term objectives
- Expand this to a platform that is reliable for use by developers
- Provide a comprehensive developer ecosystem that takes care of the full development and operation cycle
- Provide an end-user control interfaces such as web applications that can provide more access to the systems
- Provide data handling capabilities and acquisition of insights from said data.


## Architecture and Design
This platform will utilise a Rest API to provide a data transfer medium.
A front-end interface will be designed to display this data to users and allow the user to provide response
in regards to control and settings. Due to the nature of IoT devices, numerous requests will be sent per second. 
There is need to design a non-blocking process to allow high scalability. Asynchronous functions will be used.
The database will contain the developer information as well as the iot data separated into distinct collections 
each linked to the other by Ids. Authentication will be enforced.

###
* Nodejs
* Mongodb
* Express

### Features
- Post requests from our IoT devices with data.
- Get requests from a user device with the data.
- Write data into a database.
- Read data into our database.
- Utilise socket connection for real-time data transfer and control.
- Plot a graph with the data. (Most likely will be a front-end feature).
- Provide authentication mechanism to offer data privacy amongst users.(passport js).
- Generate API keys.
- Send mail with various information. Use a personally developed mail agents.
- High security.

## Routes
- GET / - Initial entrypoint to the server. A welcome message
- POST / - Undefined
- GET /data - Get data from data collection
- POST /data - Post data from device to data collection
- GET /user  -  Get user data from data collection
- POST /user - Post user data from data collection

## Targeted USERS
This is ideally targeted to IoT developers who don't have the necessary skills to build a fully fledged IoT platform.
It will streamline the development process and allow for quick development cycles.