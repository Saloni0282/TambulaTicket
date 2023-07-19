### Installation
To install this project, follow these steps: </br>
Clone this repository to your local machine. </br>
Install the required dependencies by running npm install.</br>
set up a MongoDB database either locally or using a cloud provider like MongoDB Atlas.</br>

mongoURL = <your_mongodb_uri> </br>
TOKENKEY = <normal_key> </br>
PORT=<your_preferred_port> </br>

### Tickets array
[</br>
  [</br>
    [0,18,23,40,48,0,0,73,0],</br>
    [5,0,0,0,42,52,0,80,83],</br>
    [0,20,0,0,49,58,65,0,85]</br>
  ],</br>
  [</br>
    [10,0,21,34,0,0,65,0,83],</br>
    [0,11,0,36,41,0,62,0,85],</br>
    [0,19,26,37,43,0,67,0,0]</br>
  ]</br>
]</br>

### Rules
A ticket consists of a random distribution of 15 numbers between 1-90 in a 3x9 grid </br>

RULE #1 - Each row cannot have more than 5 numbers </br>
RULE #2 - Each column is assigned a range of numbers only: 1-10 can appear only in column 1, 11-20 can appear only in column 2, 81-90 can appear only in column 9</br>
RULE #3 - In a specific column, numbers must be arranged in ascending order from top to bottom </br>
RULE #4 - Each column must have at least 1 number</br>

### Routes
## User Registration:

Route: auth/register</br>
Method: POST</br>
Request Body:</br>
{</br>
  "username":"Rama",</br>
  "email":"rama@gmail.com",</br>
  "password":"Ram@12345"</br>
}</br>

## User Login:

Route: auth/login</br>
Method: POST</br>
Request Body:</br>
{</br>
  "username":"Rama",</br>
  "password":"Ram@12345"</br>
}</br>

## Create Tickets:

Route: /tickets/create </br>
Method: POST </br>
Request Body:</br>
{</br>
    count:2,</br>
}</br>

## Get Ticket by ID:

Route: /tickets/id</br>
Method: GET</br>


