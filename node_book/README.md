1 . 전체 게시글 목록 조회
Request
Method: get
URL:/boards
Body:
Response
HTTP status code:200
Payload:{userName : str, title : str, writeDate : Date, mainComment : string, boardId : number} []



2 .게시글 작성
Request
Method: post
URL:/boards
Body:{userName : str, title : str, mainComment : str}
Response
HTTP status code:201
Payload:{ result: "success" }


3 . 게시글  조회
Request
Method: get
URL:/boards/:userName
Body:
Response
HTTP status code:200
Payload:{userName : str, title : str, writeDate : Date, mainComment : string, boardId : number} []


4. 게시글 수정
Request
Method: put
URL:/boards/:boardId
Body:{ title : str, mainComment : str}
Response
HTTP status code:201
Payload:{ result: "success" }


5 . 게시글 삭제
Request
Method: delete
URL:/boards/:boardId
Body:
Response
HTTP status code:204
Payload:{ result: "success" }


6 . 댓글 목록 조회
Request
Method: get
URL:/boards/:boardId
Body:
Response
HTTP status code:200
Payload:{broadId : number , writeDate : Date , Comment : string , commentId : number}


7 . 댓글 작성
Request
Method: post
URL:/boards/:boardId
Body:{comment : str }
Response
HTTP status code:200
Payload:{ result: "success" }


8 .댓글 수정
Request
Method: put
URL:/boards/comment/:commentId
Body:{comment : str }
Response
HTTP status code: 201
Payload:{ result: "success" }



9 .댓글 삭제
Request
Method: delete
URL:/boards/comment/:commentId
Body:
Response
HTTP status code: 204
Payload: result: "success" }


