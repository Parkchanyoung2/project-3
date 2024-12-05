const http = require('http');

const hostname = '0.0.0.0'; // 모든 네트워크 인터페이스에서 요청을 받을 수 있도록 설정
const port = 3000; // 서버가 실행될 포트 번호

const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP 상태 코드 설정
  res.setHeader('Content-Type', 'text/plain'); // 응답 헤더 설정
  res.end('Hello, World!\n'); // 클라이언트에 응답 전송
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});

module.exports = server;
