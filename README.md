# Mock API

Remember a good repository have a good documentation, it seems this is not one of those!!!!

## Endpoints

### List tasks

#### Request

`GET /tasks`

```
curl -i -H 'Accept: application/json' http://localhost:3000/tasks
```

#### Response

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 253
ETag: W/"fd-P785QEdGMS5q0SxLHoqjzTMJk7Y"
Date: Tue, 25 Apr 2023 15:03:05 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[]
```

### Create task

#### Request

`POST /tasks`

```
curl --location 'localhost:3000/tasks' -H 'Content-Type: application/json' -d '{ "title": "A task" }'
```

#### Response

```
HTTP/1.1 201 Created
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 25
ETag: W/"19-qAaPWFpm68tj6yiLtk/CGTgXXYY"
Date: Tue, 25 Apr 2023 15:08:20 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"id":8,"title":"A task"}
```

### List pending tasks

#### Request

`GET /tasks/pending`

```
curl -i -H 'Accept: application/json' http://localhost:3000/tasks/pending
```

#### Response

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 253
ETag: W/"fd-P785QEdGMS5q0SxLHoqjzTMJk7Y"
Date: Tue, 25 Apr 2023 15:03:05 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[]
```

### List completed tasks

#### Request

`GET /tasks/completed`

```
curl -i -H 'Accept: application/json' http://localhost:3000/tasks/completed
```

#### Response

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 253
ETag: W/"fd-P785QEdGMS5q0SxLHoqjzTMJk7Y"
Date: Tue, 25 Apr 2023 15:03:05 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[]
```
