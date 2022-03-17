This is the service folder readme.

A service is a set of functions that are used by the application on
one determinated route.

A service is composed by 3 files:

- <serviceName>.model.ts:
A mongooose model that represents the data of the service.

- <serviceName>.controller.ts:
This file export the routes of the service that are linked to a
handler function.

- <serviceName>.handler.ts:
This file export the handler functions that are used by the controller.

The handler functions do especific things and return a response.
They are stored in a folder called handlers.

Expected structure:
- src/services/<serviceName>/
  - <serviceName>.model.ts
  - <serviceName>.controller.ts
  - <serviceName>.handler.ts
  - handlers/
    - <handlerName>.ts
    - <handlerName>.ts
    - <handlerName>.ts

Sometimes, services do one specific thing and do not need a handler.
In this case, just use a <serviceName>.service.ts and handle
all the logic there.

An example of a service like this is the mailer service incluyed on this project.


