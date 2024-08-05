sequenceDiagram
participant User
participant Browser
participant Server

    User ->>+ Browser: Write a value on the input and click the save button

    Browser->>+Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate Server
    Server-->>Browser: JSON to value add
    deactivate Server
    Note right of Browser: The browser execute the callback func. to parse JSON data
