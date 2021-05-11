# data

## help-request

- id (uuid)
- date (date-time)
- location (lat, lng : numbers)
- description?

## women

- id
- birthDate
- name
- email
- contact number (cellphone or phone)
- cep
- password

## helpers (can be created only by api manager)

- id
- nickname
- accessKey
- email
- password

# features

- register a new women on system
- women registered on the system can create a new help request (send her data together)
- anonymous women can create a new help request

- help requests will be displayed in a control panel (real time interaction)
- devices allowed will receive a notification when a new help request is registered

# business rules

- ? anonymous women can create help-requests to, without sanding any data
- registered women will be able to send her data inside help request, to provide a better and faster help response
- received help requests will be shared in real time via web socket for the listeners
- types of listeners (display all help requests)
  - single devices (send a notification in device )
  - control panel

# routes

- create help request (body: data) :: POST /help-request => 204
- add women (body: data) :: POST /women => 201
- add helper (body: data, header: authorization) :: POST /helper
