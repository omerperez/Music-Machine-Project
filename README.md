Omer Perez Moveo Project: 

Library - React (Hooks) 

A. JSX Files  
    1. HomePage component: 
        a. Use 4 states - 
            1) audiosToPlaying - array of objects (each object contains key - name of mp3 file, and value - audio file) 
            2) stop playing - any object that enters to the "audiosToPlaying" state at some point during the loop (need for stop the audios and reset them)
            3) nowPlaying - every time the function "playMusic" starts a new loop it updates the names of the files that playing in this state
            4) first - any change of the client in the selection of songs the state help to know that audiosToPlaying need to update by useEffect 

        b. Function - 
        1) audiosCheckedTrue -  updates the client's selections in audiosToPlaying state
        2) playMusic - plays and stops the music ("start" - play / "stop" - stop)

        c. useEffect - 
            1) If audiosToPlaying update - update the first state to the first object in audiosToPlaying array 
            2) If first / audiosToPlaying update - start the playMusic function (with the update audiosToPlaying state) after the music ended (create loop)

    2. Buttom components - 
        a. switch button / start button / stop button - button design (use material ui) 
        b. In the homePage I use  "onClick" to start / stop / update (depends on which button) - I added a comment in the code. 

    3. NowPlayingCard - design for show the audios name that playing right now
    4. MusicCard - design and setting value / id / name / audio location 
    5. PadsView - arranges all the audio cards on the page correctly and sends information from json file (tracks.json)
    6. App.js - show the HomePage Component (I used Router even though it is not needed at the moment, 
                                                maybe further development of the project and proper division into paths)

B. Json File - 
    1. tracks.json - I saved the images and files locally in the project so I created a 
                        json file that sends an array with information about each audio file (name / image / audio location)

C. Audios & Images (Public folder) - save the image and the audios (mp3 Files)