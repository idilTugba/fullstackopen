sequenceDiagram
participant User
participant Browser
participant Server

    User ->>+ Browser: input text to form and Click Send button

    Browser->>+Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate Server
    Server-->>Browser: Reload page
    deactivate Server

    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate Server
    Server-->>Browser: HTML Document
    deactivate Server

    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Server
    Server-->>Browser: CSS File
    deactivate Server

    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate Server
    Server-->>Browser: JS File
    deactivate Server
    Note right of Browser: The browser starts executing the JS code that fetchs json data from server

    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Server
    Server-->>Browser: Json Data
    deactivate Server
    Note right of Browser: The browser execute the callback func. to parse JSON data
