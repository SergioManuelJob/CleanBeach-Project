<h1 align="center">Clean Beach</h1>

## About this project

<br/>

This project is about recycling and maintaining beaches clean, and is all about beaches and volunteering.

It's an app in which shows information about the different beaches of Gran Canaria, and let's users review them in order for people to know how good they are and if they should visit it. It also includes a part which lets users volunteer, so organizers (users) make events in which they set the date, and other users participate in them.

It also works as a tourism promoter, as it shows the beauty and information about the beaches, and locations of the beaches so you can visit them.

## Data Model

<br/>

The data model used for this project looks like this:

![image](assets/Diagram.png)

## Backend Documentation.

<br/>

For the documentation purpose we used Postman, here you can see the link for the documentation of the endpoints:

Postman Link: https://documenter.getpostman.com/view/23431388/2s93Jrx5XM

## Design

<br/>

For the design of this app we have followed the prototype we did with Figma:

 Link to the Figma: https://www.figma.com/file/cN45eeIzNEGDRYakqpALrc/Beaches?t=d56gSg6kZWZqRFOv-0

 ## Installation guide

 <br/>

- Visual Studio Code.
- MySQL Workbench.
- PostMan, for RESTFul tests.
- npm.

<br/>

### Frontend.

<br/>

* clone this project:
    ```sh
    git clone https://github.com/SergioManuelJob/CleanBeach-Project.git
    ```

* then go to the frontend folder by using::
    ```sh
    cd frontend/
    ```

* and install all of the project dependencies using npm::
    ```sh
    npm install
    ```

### Backend.

<br/>

#### Configure your .env:
*
    ```sh
    DATABASE_URL="UrlToYourDB"
    JWT_SECRET="YourSecret"
    ```

<br/>

* go to the backend:
    ```sh
    cd ../backend/
    ```

* run npm install:
    ```sh
    npm install
    ```

* And in case of any problem with prisma run:
    ```sh
    npm run postinstall
    ```

* Let prisma create the database:
    ```sh
    npm run dbpush
    ```

## Running guide

<br/>

* go to the backend:
    ```sh
    cd backend/
    ```

* run it:
    ```sh
    npm start
    ```

* go to the frontend:
    ```sh
    cd ../frontend
    ```

* run it:
    ```sh
    npm start
    ```

## Technology stack

<br/>

- NodeJS with Prisma.
- React.

## Planification



## Authors:

- Sergio Suárez: https://github.com/SergioManuelJob
- Emma Nielsen: https://github.com/Emsenparry
- Gabriel Rodríguez: https://github.com/GabRodPul
- Lydia Stefánsdóttir: https://github.com/lydiastef
