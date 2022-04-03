## API 설계하기

## Tweet

```js

GET /tweets
GET /tweets?username=[유저이름]
GET /tweets/:id
POST /tweets
PUT /tweets/:id
DELETE /tweets/:id

```

## MVC 패턴

- Model (DB)
- View (Router)
- Controller (Logic)

## validation 유효성 검사

- 직접 구현하면 수많은 if문이나 switch를 사용해야하니, 가볍고 빠른 라이브러리를 사용하는 것이 좋다.

```bash
npm i express-validator
```

### sanitization (유효성 검사와 더불어 데이터의 일관성 유지하기)

> express-validator의 Sanitizers 인터페이스를 보면 자세히 나와있다.

- trim()
- normalizeEmail()

## Authentication

### Session & Cookie

- User의 인증정보를 서버에서 Session 데이터로 가지고 있기 때문에, 가장 신뢰할 수있는 데이터이다.
- Cookie를 사용하기때문에, 통신이 간단하다.
- Http only옵션을 사용할 경우 브라우저에서는 안전하다.
- 사용자의 정보를 주고받지않고, 세션ID를 주고받기때문에 안전하다.

- 서버가 Stateful 하다는 단점이있다.(서버가 여러대이면, session을 공유하기 위한 자원이 소모된다)

### JWT (JSON Web Token)

- JSON을 이용해서 Web Token을 주고받는 것을 말합니다.
- Header, Payload, Signature 으로 구성되있다.
- 모든 데이터들이 인코딩 되어있기 때문에 안전하다.
- 서버에서만 보유하고있는 secret키를 이용해서 인코딩, 디코딩을 하기때문에, 키가 노출되지 않는 한 안전하다.
- 서버가 Session처럼 State를 유지할 필요가 없다는 장점이있다.(서버가 여러대여도, 자원을 공유할 일이 없다)

- Server-Client간에 토큰을 계속 주고받기 때문에, 탈취될 가능성이 있고, 만료기한이 무제한일 경우 탈취당하면 취약하다.

> JSON파일에 모든 필요한 데이터를 담아 사용한다.

### bcrypt

- password를 hashing 하는 함수이다.
- 보통 암호화된 비밀번호를 DB에 저장한다.

- 암호화 알고리즘 방식
- 복잡도 Cost, Salt

> 왜 그냥 hashing 하지 않는가요? Salt를 이용하는 이유가 ,만들어진 해시값을 다시 디코딩이 불가능하다. 즉, 단방향 암호화 방식이다. Salt의 길이에 따라서 무작위로 암호를 유추하는 시도횟수가 기하급수적으로 늘어나는 보안의 강점이있다.
