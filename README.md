# 1. 설치
```
npm ERR! code ENOENT
npm ERR! syscall lstat
npm ERR! path C:\Users\hw\AppData\Roaming\npm
npm ERR! errno -4058
npm ERR! enoent ENOENT: no such file or directory, lstat 'C:\Users\hw\AppData\Roaming\npm'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent

npm ERR! A complete log of this run can be found in: C:\Users\hw\AppData\Local\npm-cache\_logs\2023-12-04T02_09_34_188Z-debug-0.log
```
create-react-app 과정에서 다음과 같이 Roaming 에 npm 파일경로를 찾을 수 없다는 오류가 떠서
Roaming에 npm 파일을 생성한 후 다시 설치해서 오류 해결


## props
1. 내장된 DOM `<button>` 컴포넌트에 있는 onClick prop은 React에게 클릭 이벤트 리스너를 설정하라고 알려줌
2. 버튼을 클릭하면 React는 Square의 render() 함수에 정의된 onClick 이벤트 헨들러 호출
3. 이벤트 핸들러는 this.props.onClick()를 호출 (Square의 onClick prop은 Board에서 정의됨)
4. Board에서 Square로 onClick={() => this.handleClick(i)} 를 전달했기 때문에 Square를 클릭하면 Board의 handleClick(i)를 호출함# react-tictactoe-deploy
