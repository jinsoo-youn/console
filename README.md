HyperCloud Console 5.1
=========================
- **HyperCloud - Cluster Console 코드 프로젝트 입니다.**
- **HyperCloud Console은 k8s를 기반으로 구성된 hypercloud의 클라우드 환경을 효율적으로 관리하기 위한 관리자 WEB APP을 제공한다.** 
- **HyperCloud Console 5.1은 React로 개발된 UI App과 golang으로 개발된 server로 구성되어 있다.**
- **콘솔의 동작 모드**
  - **gateway** : static content 제공과 api gateway역할(Reverse Proxy, app 기동에 필요한 config 제공)을 하는 웹서버 
  - **server** : 오직 Static Content 제공을 위해 설계된 경량 웹서버 
  - **dashboard**: [kubernetes/dashboard](https://github.com/kubernetes/dashboard)처럼 kubernetes만이 설치된 환경에서 설치가 간단한 관리용 WEB APP을 제공하는 웹서버 
- [설치 가이드](https://github.com/tmax-cloud/install-console/blob/5.0/README.md)
---
### 개발 전 체크사항
- nodeJs >= 10.17 & yarn >= 1.3.2 & go >= 1.13 & python......
- (비고) nodeJs의 버전은  ">=8.x <=10.x" 에서 build.sh 가 실행 됨, nvm (node버전 관리툴)을 이용해 nodeJS 버전 맞춰주세요. 
  
---
### 빌드

```
./build.sh
```

build 후, ./frontend/public/dist 폴더에 파일들이 생성되며, 이 파일들로 이미징 작업을 하게 됩니다.

### 실행 
- $(pwd)/configs에 console.yaml에 configs 설정 후 아래 명령어 실행 
```
./example/run-console.sh
```
