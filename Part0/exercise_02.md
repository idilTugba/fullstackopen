sequenceDiagram
participant User
participant Browser
participant Server

    User ->>+ Browser: Open link

    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate Server
    Server-->>Browser: JS File
    deactivate Server
    Note right of Browser: Js code loaded before the spa document, that is weird. It can be about cache

    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate Server
    Server-->>Browser: HTML Document
    deactivate Server

    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Server
    Server-->>Browser: CSS File
    deactivate Server

    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Server
    Server-->>Browser: Json Data
    deactivate Server
    Note right of Browser: The browser execute the callback func. to parse JSON data
