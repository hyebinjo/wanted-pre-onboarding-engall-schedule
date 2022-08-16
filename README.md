# engall - class schedule page
잉그올 기업 과제 - 원티드 프리온보딩 프로젝트

## 0. 프로젝트 개요
- 주간 수업일정 관리 페이지 제작

## 1. 프로젝트 설치, 실행 방법
1. 프로젝트 클론
`https://github.com/hyebinjo/wanted-pre-onboarding-engall-schedule.git`
2. 패키지 설치
`npm install`
3. json server 실행
`npm run server`
4. 개발 서버 실행
`npm run dev`

## 2. 구현사항
### 주간 테이블
<img src="https://user-images.githubusercontent.com/90256059/184813174-6b389875-e5b5-4557-9388-eedde4b36edf.PNG" width="60%" />
<img src="https://user-images.githubusercontent.com/90256059/184813374-f24c574c-7701-4e40-8bcf-26fc50e35a85.PNG" width="60%" />

- [x] 주간 일정 데이터를 가져와 요일 시간 별로 노출합니다.
- [x] 날짜는 표시되지 않습니다.
- [x] 각 일정은 x버튼을 누르면 삭제 되어야 합니다.
- [x] add class schedule 버튼을 누르면 수업 일정추가 페이지로 이동합니다.
### 수업 일정 추가
<img src="https://user-images.githubusercontent.com/90256059/184813830-9d11c077-496c-46dc-a837-68cc45b5e08b.PNG" width="60%" />
<img src="https://user-images.githubusercontent.com/90256059/184813960-91f4fee4-7aa8-4630-a914-3adb5b8b98d9.PNG" width="60%" />

- [x] 수업 일정 추가 버튼을 누르면 수업 일정 추가가 열립니다.
- [x] 수업 일정 추가 페이지에서 시작시간을 선택할 수 있습니다.
- [x] 시작시간은 5분 간격으로 제한됩니다.
- [x] 시작 시간의 범위는 0~23시까지 입니다.
- [x] 수업 시간은 항상 40분입니다.
- [x] 수업 일정을 추가할 때 똑같은 시간에 여러 요일을 선택할 수 있습니다.
- [x] 저장 버튼을 누르면 수업 일정 보기로 돌아갑니다.(주간 테이블)
- [x] 새로 추가된 일정이 주간 테이블에 노출됩니다.
- [x] 페이지가 다시 로드 되어도 수업 일정이 유지 되어야 합니다.

- 라우터 구조
```
'/' 주간 테이블 페이지
'/add' 수업 일정 추가 페이지
```

- axios API로 데이터통신 모듈 구현
- 데이터 가공, 삭제, 생성하는 등 스케쥴 데이터를 관리하는 custom hook을 구현하여 각 페이지에서 사용
