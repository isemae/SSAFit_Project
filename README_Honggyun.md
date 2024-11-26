## 전체 회고
### Team
이번에 0부터 서비스를 기획하고 개발해 결과물을 도출하는 프로젝트는 사실상 처음 겪는 일이었습니다. 그만큼 이 기회를 통해 최대한 많은 것들을 예상하고 대비하며, 경험하고자 노력했습니다.<br>
그 첫번째가 

### 개인
마지막에 와서 되돌아보니 프로젝트를 진행하면서 다음과 같은 사항들이 가장 큰 장애물로 다가왔습니다.

    1. Front-end와의 소통을 일찍이부터 자주하지 못한 점
         -> 처음부터 소통을 가장 중요시 했음에도 불구하고 이를 실천하지 못한 것은 반성해야할 점입니다. 미리부터 매일 Scrumd을 통해 서로의 이슈와 문제, 현황을 상세하게 공유하고 코드 리뷰를 같이 진행했으면 더 효과적으로 길을 이탈하지 않고 중요한 문제부터 순서대로 해결할 수 있었지 않았을까 하는 아쉬움이 남습니다.

    2. 처음에 서비스에 대해 깊게 생각하지 않아 필요한 기능과 데이터를 놓친 점
        ->  효율적인 일정 관리를 위해 Jira와 GitHub을 연동하고 그에 따라 Gantt Chart를 만들어 미리 계획을 만들고, 그에 맞춰서 개발을 진행하는 과정을 준비했고 실천했습니다. 하지만, 서비스를 기획하는 과정에서 미리 필수적인 기능과 데이터를 몇 가지를 놓치는 바람에 Gantt Chart의 일정이 조금 꼬이게 되었습니다. 특히, 추가 기능을 개발할 때에는 시간에 쫓겨 새로이 일정을 짜고 그에 맞춰 개발하는 것이 아닌 주먹구구식으로 진행하게 되었습니다. 
    
    💡 이 때문에 F-B 간의 의사 소통이 표면적으로만 이루어져 "이 친구가 무언가를 하고 있구나..." 정도만 알 수 있을 뿐, 이것이 비즈니스 로직을 수행하는 데 있어서 필수적인 기능인지 부가적인 기능인지는 판별이 되지 않았습니다. 그렇기에 Back-end와 Front-end를 합치는 과정이 되어서야 아직 제가 생각했던 필수 로직들이 구현되지 않았다는 것을 깨달을 수 있었습니다. 앞으로 프로젝트를 진행하게 된다면 상기 두 부분에 대해서는 시간이 좀 걸리더라도 반드시 짚고 넘어갈 것이라 다짐합니다.

이 외에 프로젝트를 진행하며 겪었던 이슈들과 해결 과정, 그리고 회고에 대해서는 그 때 그 때 기록해둔 노트를 아래에 시간 순서대로 기재하였습니다. 양이 많고 어투가 일정하지 않은 지극히 개인적인 노트들도 있지만 그 부분에 대해서는 양해 부탁드립니다.

## 프로젝트 진행 중

### Spring Boot 초기 설정 및 Card 기능 구현 시
> Vue를 위시한 JavaScript를 사용하다가 Spring Boot를 구축하려고 하니 굉장히 헷갈려서 이전 프로젝트들을 참조할 수 밖에 없었다! 또한 `System.out.println()`을 까먹어서 `console.log()` 를 쓰는… 놀라운 기현상도 벌어졌다! 확실히 프로그래밍 또한 자동완성이 도와준다고 하더라도, 매일 하지 않으면 감을 잃는 것 같다. 꾸준함이 생명!
> 

<aside>
💡

초비상!!!!!
원래의 작업 Flow
1. Issue Open → 자동으로 이에 해당하는 Branch 생성
2. Local에서 작업 후 생성된 Branch에 push
인데… 여기서 같은 이름으로 했음에도 불구하고 push가 안되는 오류가 발생!

Local: new branch!
GitHub: branch에 들어온 것도 없고 새로 생긴 branch도 없는데??

→ 그래서 지우고 다시 clone을 받아서 시험해보기 위해 project 폴더를 복사해서 옮겨 놓음
근데 복사가 제대로 안됐네..? 다 날라갔네..? 복사한 폴더도 두 번 세 번 확인하자!!!!

</aside>

### Jira와 GitHub 연동에 있었던 짧은 이슈

GitHub issue를 오픈해서 Jira와 자동으로 연결하는 것은 아주 정상적으로 동작하고, 또 자동으로 제목의 말머리에 Jira의 이슈 코드를 다시 붙여주기도 한다!

이 때문에 commit 메세지에도 자동으로 붙는 줄 알았으나… 그게 아니었기에 Jira의 이슈에는 내가 보낸 3개의 commit이 누락되는 이슈가 발생했다.

다행히 초기에 알게 되었기에 이후 commit부터는 `[Jira이슈코드] commit message #GitHub이슈코드`의 템플릿을 지켜서 commit을 남길 생각이다.

<aside>
💡

또한, 세부 기능별로 branch를 나눠놓았었는데, 실제 개발을 해보니 dao, controller, service, mapper를 왔다갔다 하면서 하나씩 다 완성하게 되는 경향이 강한 것 같다. 아무래도 이는 아직 감을 다 찾지 못해서 이전의 코드를 보면서 완성하고 있기 때문이 아닌가 싶다. 다른 기능을 완성 할 때에는 적절한 branch에서 작업하며 적절한 flow로 작업해서 능률을 올려보도록 하자!

</aside>

### Notion 무료 블록 제한 문제

교수님께서 제공해주신 Template을 이용해 PJT용 Notion을 새로 생성해 무료 버전으로 설계와 회의록을 기록하고 있었습니다. 하지만, 무료 블록량이 생각보다 더 적었기에, 24.11.13. 본격적으로 개발에 들어가기도 전에 이 양을 대부분 소진하고 말았습니다. 이에 우선은 임시적으로 유료 계정인 이 워크스페이스에 복제해 백업을 해두고, README를 위시한 markdown으로 옮기는 방법을 고민하고 있습니다. 이는 지운이와의 회의를 통해서 결정할 사안이기에 Card 개발이 완료되는 대로, 물어볼 생각입니다. 

→ 다른 팀들에게 물어본 결과, 워크 스페이스 멤버가 아닌, 페이지에 대한 게스트로만 초대하면 (멤버를 1명으로만 하면) 무료 블럭 제한이 널널해진다고 들었습니다. 그에 따라 원래 워크 스페이스 주인인 지운이를 놔두고 저를 게스트로 바꿔 문제를 해결했습니다. 만약 이렇게 했음에도 불구하고 다시 제한에 걸린다면, 다른 방법을 다시 생각해볼 것 같습니다.

### SQL 개선

MySQL Workbench의 Reverse Engineering을 통해 GUI로 생성한 ERD를 SQL문으로 변환하는 과정에서 의도와 다른 코드들이 발견되었습니다.

e.g.) Card table의 ‘fk_exercise_id’에 대한 제약 조건 중 `ON DELETE CASCADE` 는 해당 카드가 삭제되면 운동 데이터까지 삭제될 리스크가 있음

그렇기에, 사진 해석 능력과 한국어 프롬프트를 통한 code 생성 능력이 가장 뛰어나다고 평가 받는 Claude 사의 Sonnet 3.5 New 버전에 새로 전용 프롬프트를 작성한 Project를 생성해 이에 대한 개선과 피드백을 요구했습니다. 그 내용은 다음과 같습니다.

- 프로젝트 프롬프트
    
    ```
    <페르소나>
    나는 이번에 크롬 확장 프로그램을 개발하는 미니 프로젝트에서 백엔드와 DB 개발을 맡게 됐어. 
    Spring Boot와 MyBatis, MySQL을 이용해 개발을 진행 중이고, MVC 패턴을 사용해 모듈화와 코드 가독성을 올려 디버깅과 유지 보수에 유리한 방법으로 서버를 구축하려 해.
    너는 이 기술스택에 대해 자세히 알고 있는 25년차 시니어 개발자로서, 주니어 개발자인 나에게 조언을 주는 입장이야.
    다양한 데이터를 다루어봤고 토이 프로젝트도 다수 진행했기에 효과적인 조언을 줄 수 있어.
    
    <프로젝트에 대한 설명>
    프로젝트는 20~40대 사이의 컴퓨터를 활용해 업무를 보는 사람들을 대상으로 하고 있어.
    랜덤하게 카드를 3장 받고, 그 중에 하나를 고를 수 있어.
    카드에는 간단한 운동 및 스트레칭이 적혀있고, 그 퀘스트를 완수하면 그 카드를 수집할 수 있어.
    수집한 카드에 따라 점수가 매겨져 있고, 그 점수를 토대로 유저의 총 점수가 결정되는 형태로 구상했어.
    
    <지시 사항>
    위 정보들을 토대로 내가 더 효과적이고 효율적으로 기능을 개발하고 테스트해볼 수 있도록 나를 도와줄 수 있는 방법들과 질문들에 대한 답을 생성해줬으면 해. 
    ```
    위와 같은 사전 프롬프트를 바탕으로 그때마다 필요한 정보를 추가해 원하는 정보를 정확하게 얻기 위해 노력했습니다.<br>
    이 노력을 통해 SQL을 1차적으로 개선한 후, 더미 데이터 또한 생성해 DB-Back 간의 연결과 비즈니스 로직을 점검하고 디버깅 및 개선을 진행하기 수월해졌습니다.

    ### DAO Binding Exception

`org.apache.ibatis.binding.BindingException: Invalid bound statement (not found): mapper의 id에 매핑된 메소드의 위치` 

DB를 수정한 후, Talend API를 이용해 비즈니스 로직을 체크하려고 하니 상기 exception이 발생했습니다.

정상적으로 동작했던 이전 프로젝트들과 비교 대조해봐도 문제를 찾기 쉽지 않았습니다.

1. mappers에 바인딩된 namespace 위치가 제대로 되어있음
2. mapper에 바인딩된 DAO의 method 명이 제대로 되어있음
3. application.properties에 바인딩된 MyBatis Config가 **의도한대로** 적혀있음

→ 원인을 찾기 힘들어 생성형 AI에게 질문한 결과, config mapping의 문제일 가능성이 높다고 제시해 확인해 보았습니다. 실수로 mappers 폴더를 static 폴더 안에 넣어두어 의도한 바와 다르게 mappers 폴더를 찾지 못해 생긴 exception이었습니다.

`mybatis.mapper-locations=classpath:mappers/*.xml`

해결: 상기 config 대로static 하위에 있던 mappers 폴더를 classpath의 바로 밑으로 옮겼습니다.

**새로운 문제:** 

디렉토리를 옮기니 mapper를 다시 확인하라는 예외가 발생했습니다. target이 언급되는 것을 보면 기존에 있던 설정과 충돌한 것으로 예상됩니다.

시도 1. `.m2`폴더 삭제해 mvn 초기화 → 실패

시도 2. `target` 폴더 전체 삭제 → 실패

시도 3. IDE 캐시 초기화 → 실패

시도 4. `.metadata` 폴더 전체 삭제  → 실패

**진짜 원인 발견:** <br>
정말로 1시간 동안 온갖 방법을 시도했지만 실패했습니다. 이에 예상한 문제가 아닐 것이라 가정하고 예외 중 가장 눈에 띄는 것을 구글에 검색했습니다. 
**`Mapped Statements collection already contains value for`**
이 예외는 id가 중복인 select 문이 있기 때문에 발생하는 문제였습니다.
결국 문제는 mapper의 위치가 아닌 mapper 내의 syntax 에러였습니다.
이를 수정하여 해결했습니다.

<aside>
💡

mappers 폴더를 옮겨서 알아차린 문제였기 때문에 당연히 원인이 directory거나, 설정 문제라고 생각했었습니다. 하지만 실제로는 application.properties에 config으로 매핑된 url을 찾지 못했기 때문에 그 동안 이 예외가 일어나지 않았던 것 뿐이었고, 이것이 직접적인 원인이었습니다. 

이번 일을 통해서 <u>예외가 발생하면 나의 행동이 직접적인 원인일 것이라 섣부르게 판단하기 보다는 판단의 근거로 삼되, IDE가 리턴해주는 예외 문구들을 좀 더 면밀히 분석하기로 했습니다.</u> 또한, 생성형 AI가 항상 가장 직접적이고 사실적인 답변을 주지는 않는다는 것을 깨달았기에, 구글링도 병행할 필요가 있다고 느꼈습니다. 

</aside>

### 2024-11-14 짧은 회고

프로젝트 초반에 있었던 위의 에러까지 오래 걸렸지만, 해결한 후엔 같은 작업의 반복이 많았습니다. mvc 패턴이 정형화 되어있기 때문에 그런 것 같기도 합니다. 덕분에 별다른 오류 없이 끊김 없이 기능들을 개발할 수 있었습니다.

내가 어디까지 했고, 무엇을 해야하는 지 까먹지 않고 기능들을 순서대로 만들 수 있게 도와준 것은 역시 Jira였습니다. <u>Jira에 미리 만들어 둔 GANTT CHART와 Notion에 정리해둔 API 명세서 덕분에, 우선적으로 필요한 기능들을 순서대로 구현하며, Front에서 필요로 하는 기능들을 유연하게 사이에 끼워넣으며 개발을 진행할 수 있었습니다. </u>특히, 지운이가 세팅한 Jira-GitHub issue 및 branch 자동화 작업 환경이 지대한 공헌을 했습니다. 일일이 issue를 생성하고 commit하고 push/merge를 할 때마다 Jira에 방문해서 추가적인 작업을 할 필요 없이 자동으로 관리되고, Jira는 오로지 나의 작업 단계를 관리하는 용도로만 사용되었기에 더 효율적으로 작업을 진행할 수 있었던 것 같습니다. 아직까지 이전의 issue(Jira)들을 되돌아 볼 기회는 없었지만, 각 issue에 GitHub의 issue와 pr들이 연동되어 있기 때문에 로그를 찾을 때에도 효과적일 것이라 예상합니다.

가장 먼저 기본적인 기능들을 먼저 구현한 다음, 추가 기능과 디테일 적인 측면에 대해 고민해보고자 합니다. 생성형 AI API 활용이나, XSS와 같은 공격에 대응해 시큐어 코딩을 하는 법, 그리고 INDEX를 활용한 DB 최적화 및 대규모 이용에 대비한 서버 최적화를 고민해보고 싶습니다. 이번 기회에 할 수 있는 만큼 개발 감각을 길러 2학기 프로젝트를 수월하게 진행할 수 있는 기본 실력을 갈고 닦을 것입니다. 아자아자 화이팅!

### 존재하지 않는 데이터 접근 및 기타 예외에 대한 처리

req → Controller → Service → Dao(Repository) → DB로 연결되는 데이터 흐름에서, 존재하지 않는 데이터에 접근하려 하거나, 올바르지 않은 접근 방식으로 인한 예외 처리에 대해서 고민을 해보았습니다. 가장 먼저, 코드가 조금 지저분해지기는 하지만, 실제로 코드를 작성해서 로직 처리에 접근할 수 있는controller와 serviceImpl에서 양쪽 다 try/catch 구문을 통해서 예외 발생시 에러와 함께 별도로 작성한 에러 구문을 반환하는 것으로 처리하였습니다. 이 이유는, 기본 에러 구문을 통해서 client 쪽에 정보를 노출되는 것을 방지하기 위해서입니다. 

또한, int타입을 반환하는 경우에는 resultType에서 int로 선언되어 있기 때문에, 존재하지 않는 데이터에 접근 시 null을 반환하게 되어 bindingException을 반환합니다. 이 때 serviceImpl에서 catch문을 통해 -1과 같은 절대로 있을 수 없는 숫자를 반환하는 방식으로 한 단 계 더 방어기제를 마련했습니다. null 반환을 통해서 로직이 망가지는 경우가 생길 수도 있다고 판단했기 때문입니다.

객체를 반환하는 mapper의 경우에는 if 조건문을 통해서 null이 반환되면 우선적으로 트래킹의 용이성을 위해 serviceImpl에서 로그를 남기게 하고, null을 반환해 controller에서 최종적으로 예외를 처리하도록 설계했습니다.

### 작업 중 관리 실수에 대한 대처

작업 중 totalCardCount 작업을 관리하는 21 branch에서 실수로, 22에서 관리해야할 tier 작업을 push 하였습니다. 이에 #은 22로 남겨 tier의 issue comment로 남기고, 이에 추가로 실수에 해당하는 comment를 남겨 표시했습니다. 중간에 #조차도 21에 남긴 줄 알고, 21 issue와 22 issue의 이름을 바꾸려 했지만, 생각해보니 Jira와의 연결 때문에 의미 없는 행동이라는 것을 깨달았기 때문에, 다시 수정하였습니다. 결국 tier에 해당하는 작업은 했지만 jira에는 total card count가 작업중으로 뜨기 때문입니다.

<aside>

만약 방대한 범위의 작업을 진행하는데 이런 일이 발생했다면, 아마도 commit을 지우고 다시 commit을 남겨야했지 않나 싶습니다. 그런 일을 방지하기 위해서 <u>commit push를 하기 전에는 한 번 더 확인하는 습관을 들여야할 것 같습니다.</u>

<asdie>

### 작업 중 추가 작업에 대한 논의

user의 Get streak, total card count 기능들을 구현하다 보니, 이들을 갱신하는 방법에 대해서도 고민하게 되었습니다.  put을 활용해 새로이 api를 만들어서 다른 method 안에서 호출하는 방법이 떠올랐는데, 이 부분이 효율적일 지는 잘 모르겠습니다. 이에 대해서는 내일 직접 지운이와 만나 회의를 통해 더 나은 방법이 없는 지 토의 후 결정할 예정입니다. 

작업을 하다 보니 위와 같은 실수도 나오고, 예외 처리 및 보안과 관련된 추가 작업들, 그리고 원활한 핵심 기능들을 구현하기 위한 추가 기능들이 계속해서 떠오르게 됩니다. 이래서 확실히 <u>프로젝트를 진행할 때에 초반 단계에서 아주 상세하게 생각해보고 모든 것을 공유한 뒤에 작업에 들어가야 중간에 끊기는 일 없이 효율적으로, 단계적으로 진행할 수 있는 것 같습니다.</u> 이번에 떠오른 추가 작업들 또한 조금만 더 생각했다면 예측 가능했던 범주 내였기에 아쉬움이 남습니다. 2학기 프로젝트에서는 팀원과 사전 회의를 진행할 때에 로직 프로세스를 한 번 짚고 넘어가서 구체적으로 API 명세서를 짜야겠다는 생각을 하는 밤입니다.

### @RequestBody

Controller에서 Front-end로부터 데이터를 받아올 때 가장 흔히 사용되는 것은 `@PathVariable`이지만, POST나 PUT 메소드와 같은 경우에는 `@RequestBody`를 써야한다. 이 때, 한 값(예를 들어 int형의 한 column에 해당하는 값만)받고 싶은 경우에도, JSON을 parse하기 위해서 반드시 객체로 전달 받아야하며, DTO를 사용하는 것이 좋다는 것을 배웠다. 

```java
// 6. 유저가 획득한 총 카드 수 업데이트
	@PutMapping("/{userId}/totalCardCount")
	public ResponseEntity<?> updateTotalCardCount(@PathVariable int userId, @RequestBody User user) {		
		try {
			// service 호출			
			int newTotalCardCount = user.getTotalCardCount();			
			int userTotalCardCount = userService.updateUserTotalCardCount(userId, newTotalCardCount);
	}
```

위 코드에서 처음엔 `@RequestBody int newTotalCardCount` 로 적었는데, Bad Request 400 에러가 도출되어 JSON parse가 제대로 이루어지지 않는 다는 것을 알았다. 구글에 검색해보니 Http의 body를 java 객체로 변환하는 방식이었고, 이에 따라 목표로 하는 column을 멤버 변수로 삼고 있는 DTO를 활용하는 것이 가장 효율적이라는 결과를 도출했다. 그에 따라 위와 같이 코드를 고쳤다.

두 번째 시도에서, 이번엔 bindingException이 도출되었다. 이는 mapper에 메소드를 적지 않았기 때문이다.

세번째 시도에서, 값이 제대로 들어가지 않는 오류가 발생했다. 이는 input으로 들어오는 JSON의 key 값이 DTO의 멤버 변수명과 일치하지 않아서 자동으로 들어가지 않은 것이다. 그렇기에 JSON의 key값을 변경해서 테스트해본 결과, 정상적으로 동작하였다.

결과적으로 API 명세서에 기입되어있던 input 변수명과 방식을 수정하였고, 이를 지운이와 공유하였다.

### Merge Merge Merge

24.11.19. commit이 그 동안 많이 쌓이기도 했고, 1차적인 기능 개발이 마무리되어가는 단계가 되었기에 각자(Front-end와 Back-end)의 Dev branch에 merge를 하기로 했다. 다행히 서로가 dev branch를 나눈 것이 신의 한 수 였는지, 사소한 conflict만 있었을 뿐, 모든 코드를 헤집어 놔야하는 심각한 수준의 conflict는 없이 무사히 각자 merge에 성공할 수 있었다. commit이 51개나 쌓인 것을 보니 생각보다 많이 왔다는 것이 실감 난다. 

이제, local에서 두 branch의 것들을 각각 pull 받아서 합쳐본 후, 테스트를 진행할 예정이다. 이 결과에 따라서 필요한 기능들을 추가로 개발하고 버그 및 기타 오류들을 잡아야 하는 추가 업무를 발견할 수 있을 것이다!

<aside>
💡

Merge 후 점검하는 과정에서, CORS 도메인의 경우 root만 설정하면 된다는 것을 배웠다! [`http://localhost:5173/*`](http://localhost:5173/*)로 설정했었는데, 동작하지 않아서 찾아본 결과이다…
→ 5173까지만 적는 것으로 해결!

</aside>

## Spring Security

### Java에서 Bcrypt를 통해 비밀번호 암호화 하기

### 라이브러리 선택 배경

이전에는 node.js에서 npm을 통해 bcrypt module을 활용해 간편하게 비밀번호를 암호화 했던 경험이 있었기에, 그렇게 어렵지 않으리라 생각했다. 하지만 java와 같은 경우엔 Spring Security를 이용하는 방법, 단순히 BCrypt 라이브러리를 이용하는 방법, 그리고 JBCrypt라는 라이브러리를 이용하는 방법 등 다양한 방법이 있었기에 좀 더 면밀히 알아볼 필요가 있다고 느껴, 간단한 조사를 진행했다.

1. 블로그의 글을 훑어보고,
2. 생성형 AI에게 각각의 장단점에 대해 요약해 달라고 요청했다.

조사 결과, JBCrypt의 경우 참고할 만한 블로그들이 많지 않았고, 생성형 AI에게 문의한 결과 다음과 같은 4가지 이유로 Spring Security를 추천한다고 했다.

- Spring Boot와의 통합이 자연스럽습니다
- 추후 보안 기능 확장이 용이합니다
- 커뮤니티 지원이 활발합니다
- 보안 업데이트가 지속적으로 이루어집니다

아직은 비밀번호 암호화에 그치지만, 추가적인 보안 기능 확장 가능성을 생각해 보았을 때, 이 라이브러리가 유용하다고 판단했다. 또한, 지속적인 보안 업데이트가 가장 신뢰할 수 있다고 느껴져 최종적으로 선택하게 되었다.

### 프로젝트 적용

maven 기반의 spring boot 프레임워크로 Back-end 서버를 개발중이었기 때문에, 다음과 같은 순서로 프로젝트에 적용할 수 있다는 것을 조사 결과 알아냈다.

1. `pom.xml`에 dependency 추가
2. [`SecurityConfig.java`](http://SecurityConfig.java) 생성 후 `@Configuration`에 `@Bean` 등록
    
    ```java
    	@Bean
    	public BCryptPasswordEncoder bCryptPasswordEncoder() {
    		return new BCryptPasswordEncoder();
    	}
    ```
    
3. Service 계층에서 의존성 주입 후 사용
- 주의할 점 by Claude Sonnet 3.5(New)
    - BCrypt는 salt를 자동으로 생성하여 같은 비밀번호라도 매번 다른 해시값을 생성합니다. 이는 보안성을 높여줍니다.
    
    → 이는 api가 털리거나 실수로 public에게 노출되더라도 비밀번호의 plain text가 노출될 가능성이 현저히 적어지는 것을 의미. 아주 좋다!!
    
    - 비밀번호 검증 시에는 반드시 passwordEncoder.matches() 메소드를 사용하세요. 직접 비교하면 안 됩니다.
    
    → 이미 node.js로 사용해 봤을 때 `compare()`로만 비교했었기 때문에 충분한 주의를 기울이는 중. 
    
    - 데이터베이스의 password 필드는 충분히 길게 설정하세요. BCrypt로 암호화된 문자열은 60자 정도입니다. ← 이를 예측하고 이미 72자로 설정해 둠

### 중요한 점

비밀번호 암호화 및 검증은 service 단에서 이루어져야 한다! 아래 Claude의 답변 참조

---

**관심사의 분리 (Separation of Concerns)**

- Controller는 요청/응답 처리와 라우팅에 집중해야 합니다
- Service는 비즈니스 로직을 담당하며, 비밀번호 암호화는 핵심 비즈니스 로직의 일부입니다

**보안성 강화**

- 암호화된 비밀번호는 Service 계층 내부에서만 다루어져야 합니다
- Controller까지 암호화되지 않은 평문 비밀번호가 전달되는 것을 최소화할 수 있습니다

**테스트 용이성**

- Service 계층에서 암호화를 처리하면 단위 테스트가 더 쉬워집니다

**재사용성과 일관성**

- 비밀번호 관련 로직이 Service에 집중되어 있어 코드 재사용이 쉽습니다
- 비밀번호 정책 변경 시 한 곳만 수정하면 됩니다

**확장성**

- 추후 비밀번호 정책이나 암호화 방식이 변경되어도 Service 계층만 수정하면 됩니다

이러한 구조를 통해 코드의 유지보수성이 향상되고, 보안 관련 로직이 더 잘 관리될 수 있습니다. 또한 향후 요구사항 변경이나 시스템 확장 시에도 더 유연하게 대응할 수 있습니다.

---

단순하게 MVC 패턴을 통해서 구조화를 하고 있던 나에게 다시 한 번 깨우침을 주는 말이 아닐 수 없다. MVC패턴이 디자인 패턴으로서 Model-View-Controller 3가지로 나누어 소프트웨어를 효과적으로 개발하기 위함이라는 것을 상기할 수 있었다.

Model: 데이터와 비즈니스 로직을 관리

View: 레이아웃과 화면을 처리

Controller: Model과 View로 명령을 전달

이 3가지 역할을 명확히 구분해 서로 간의 결합도를 낮춰 모듈화를 쉽게 하고, 이에 따라 코드의 재사용성 및 확장성을 높이는 것이 최대 장점이라는 것을 되새기자.

이번 bcrypt 적용을 마치고 다시 한 번 코드를 총 점검해 모듈화의 최적화를 이룰 필요가 있어 보인다!

### Spring Security Configuration

BCrypt를 위해 Spring Security를 적용했더니 기본적으로 지원하는 보안 기능 덕분에(?) api를 쏠 때마다 로그인창이 뜨는 현상이 발생했다. 원활한 기능 테스트를 위해 이를 해제하기 위해 설정하는 방법을 찾아보았다.

```java
package com.ssafit.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	/**
	 * @param http
	 * @return
	 * @throws Exception
	 * Created by Claude 3.5 Sonnet
	 */
	@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // CSRF 설정(Cross-Site Request Forgery) 비활성화
        	// REST API는 stateless하므로 CSRF 보호가 필요 없음
            .csrf(csrf -> csrf.disable())
            
            // 세션 관리 설정
            // REST API는 각 요청이 독립적이어야하므로 세션 사용하지 않음
            .sessionManagement(session -> 
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            
            // 폼 로그인 비활성화
            // 기본 로그인 폼 비활성화
            // REST API는 폼 로그인 대신 토큰 기반 인증 사용
            .formLogin(login -> login.disable())
            
            // HTTP Basic 인증 비활성화
            // 보안상 취약할 수 있는 기본 인증 방식 사용 X
            .httpBasic(basic -> basic.disable())
            
            // 요청에 대한 인가 설정
            // URL 접근 권한 설정
            // /api/auth/** 경로는 모든 사용자 접근 가능(회원가입, 로그인 등)
            // 그 외 요청은 인증된 사용자만 접근 가능
            .authorizeHttpRequests(authorize -> authorize // http 요청에 대한 인가규칙 설정 시작
                .requestMatchers("/api/auth/**").permitAll() // URL패턴 지정, permitAll()로 인증 없이 모든 사용자 접근 가능 허용
                .anyRequest().authenticated() // 위에서 설정하지 않은 나머지 모든 요청에 대한 설정(항상 마지막에 설정), authenticated()로 인증된, 로그인한 사용자만 접근 가능
            );
            
        return http.build();
    }
    
}
```

위는 Claude 3.5 Sonnet(New)와의 대화에 블로그의 다른 글들을 참조하여 작성한 설정 코드이다.

requestMatcher()안에 api의 endpoint가 들어갈 것으로 예상되는 바이기에 저 부분은 수정해서 사용할 것이다.

Claude에 따르면, authenticated()를 통해서 나머지 모든 요청에 대해서는 로그인한 유저만 사용가능하다고 되어있는데, 이를 어떻게 판단하는 지 매우 궁금하기 때문에 테스트 해보고 존속 여부를 결정하게 될 것 같다. 만약 요청을 보낼 때 마다 새로 로그인을 해야 한다면 매우 경험이 좋지 못한 쪽으로 기울기 때문에 삭제할지도…

기본적으로 개발 테스트를 할 때에 매우 번거롭기 때문에 일시적으로 와일드카드를 사용해서 모든 path에 대해 permit을 해주었다. 대신, jwt의 interceptor를 이용해 auth이외의 path에 대한 요청에 대해 검증을 진행하게 되었다.

<aside>
💡

bcrypt로 암호화된 비밀번호의 앞 자리는 암호에 대한 정보를 갖는다는 사실을 알았다!
`$2a$10$` → bcrypt버전 2a, salt round 10이라는 뜻

</aside>

### JWT 발급하기
node.js에서 패키지 라이브러리를 통해서 간단하게 했던 기억을 통해 Java에서도 라이브러리가 있으면 편하게 할 수 있을 것이라는 생각을 했으나… 생각보다 어려워 보인다? Spring-Security를 통해서 하는 것처럼 보이는 것이 일단 첫번째 관문이고, 두번째로는 블로그들의 글 가독성이 상당히 떨어진다는 것이다. 일단은 생성형 AI와도 대화를 해보았지만, 집중력 저하 이슈가 있는지 잘 읽히지 않아 우선 flow만 이해하는 방향으로 잡았다.

글을 읽는 도중 daily scrum 시간이 되어 집에서 추가적으로 작업을 하거나 시도해보아야 할 것 같다.

정 이해가 안되면 섀도우 코딩이라도 해보면서 몸으로 익혀보자!

---

(1일 후… 오전)

솔직히 코드의 양이 조금 많기도 하고, 읽어도 대충 짐작만 할 수 있을 뿐, 정확하게 로직을 이해하기는 어렵다고 판단해, 블로그의 예시 코드와 생성형 AI를 통해 생성한 코드를 비교해 그 중에서 공통되는 부분을 먼저 뽑아내 섀도우 코딩을 하는 방식으로 진행했다. 그렇게 코딩하면서 나름대로 추측한 내용을 주석으로 달았고, 그 과정에서 이해하게 되는 부분이 조금씩 늘어간 것 같다.

아래 토글에 작성된 코드는 검증하기 전 위 과정을 통해 작성한 첫 draft이다.

- JWT Util class - first draft
    
    ```java
    package com.ssafit.util;
    
    import java.security.Key;
    import java.time.ZoneId;
    import java.time.ZonedDateTime;
    import java.util.Date;
    
    import org.springframework.beans.factory.annotation.Value;
    import org.springframework.stereotype.Component;
    
    import com.ssafit.model.dto.User;
    
    import io.jsonwebtoken.Claims;
    import io.jsonwebtoken.ExpiredJwtException;
    import io.jsonwebtoken.Jwts;
    import io.jsonwebtoken.MalformedJwtException;
    import io.jsonwebtoken.SignatureAlgorithm;
    import io.jsonwebtoken.UnsupportedJwtException;
    import io.jsonwebtoken.io.Decoders;
    import io.jsonwebtoken.security.Keys;
    
    @Component
    /*
     * JWT 발행, 토큰 생성, 토큰 검증 등의 역할을 하는 클래스 
     */
    public class JwtUtil {
        private final Key secretKey; // signWith에서 사용하기 위한 key 객체
        private static final Long expiration = 1000L * 60 * 60; // 밀리세컨드 기준
    
        /**
         * 생성자로 application.properties 설정 값 주입 
         * @param (String) secret
         * @param (Long) expiration
         */
    	public JwtUtil(@Value("${jwt.secret}") String secret) {
    		byte[] keyBytes = Decoders.BASE64.decode(secret); // Key 객체로 만들기 위해 byte로 디코딩
    		this.secretKey = Keys.hmacShaKeyFor(keyBytes); // Keys를 통해 Key 객체로 변환
    	}
    
    	//////////////////////////////////////////////////////////////////////
    	// JWT Building
    	//////////////////////////////////////////////////////////////////////	
    	
    	/**
    	 * JWT 생성
    	 * @param user
    	 * @param expiration
    	 * @return
    	 */
    	private String createToken(User user, long expiration) {
    		Claims claims = Jwts.claims();
    		// jwt에 key: value 형태로 저장
    		// TODO 1. token에 노출하지 않을 정보 삭제하기
    		claims.put("userId", user.getId());
    		claims.put("loginId", user.getLoginId());
    		claims.put("userName", user.getUserName());
    		claims.put("score", user.getScore());
    		claims.put("tier", user.getTier());
    		claims.put("totalCardCount", user.getTotalCardCount());
    		
    		// 한국 시간만이면 ZoneId.of("Asia/Seoul")을 now()의 인자로
    		ZonedDateTime now = ZonedDateTime.now(); // 지금 시간
    		ZonedDateTime tokenValidity = now.plusSeconds(expiration); // 지금에 만료 시간 더한 값
    		
    		// jwt 반환
    		return Jwts.builder()
    				.setClaims(claims) // claim 담기							
    				.setIssuedAt(Date.from(now.toInstant())) // jwt가 발급된 때
    				.setExpiration(Date.from(tokenValidity.toInstant())) // 만료일
    				.signWith(secretKey, SignatureAlgorithm.HS256) // sign
    				.compact();
    	}
    
    	//////////////////////////////////////////////////////////////////////
    	// Generate Tokens
    	//////////////////////////////////////////////////////////////////////
    	/**
    	 * Access Token 생성
    	 * @param (User) user
    	 * @return (String) Access Token
    	 */
        public String createAccessToken(User user) {
            return createToken(user, expiration);
        }
    
        
        
    	//////////////////////////////////////////////////////////////////////
    	// Verifying Token
    	//////////////////////////////////////////////////////////////////////
        public boolean verifyToken(String token) {
            try {
            	// parsing
                Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJws(token);
                return true; 
            }
            
            // 예외 처리
            // 1. 유효하지 않음
            catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
            	System.out.println("Invalid JWT Token");
            	e.printStackTrace();
            } 
            // 2. 만료됨
            catch (ExpiredJwtException e) {
            	System.out.println("Expired JWT Token");
            	e.printStackTrace();
            } 
            // 3. 지원하지 않음
            catch (UnsupportedJwtException e) {
            	System.out.println("Unsupported JWT Token");
            	e.printStackTrace();
            } 
            // 4. 빈 값임
            catch (IllegalArgumentException e) {
                System.out.println("JWT claims string is empty.");
                e.printStackTrace();
            }
            return false;
            // 출처: https://sjh9708.tistory.com/170 [데굴데굴 개발자의 기록:티스토리]
        }
        
    	//////////////////////////////////////////////////////////////////////
    	// Extract Information
    	//////////////////////////////////////////////////////////////////////
        /**
         * Access Token에서 JWT Claims 추출
         * @param (String) accessToken
         * @return (Claims) JWT Claims
         */
        public Claims parseClaims(String accessToken) {
            try {
                return Jwts.parserBuilder()
                		.setSigningKey(secretKey)
                		.build()
                		.parseClaimsJws(accessToken)
                		.getBody();
            } catch (ExpiredJwtException e) {
                return e.getClaims();
            }
        }
        
        /**
         * Token에서 User Id 추출
         * @param (String) token
         * @return (int) userId
         */
        public int getUserId(String token) {
        	return parseClaims(token).get("userId", Integer.class);
        }
        
    }
    
    ```
    

최대한 주석을 통해서 역할과 기능을 이해하려고 노력했다. 이를 Filter와 기존의 로그인 및 회원 가입 로직에 추가해보고, 어떤 코드가 어떻게 동작하는 지 더 상세하게 알아볼 예정이다.

---

(오후)

Util을 통해 기본적인 기능들을 구현했기 때문에, Filter를 구현하기 전에 우선적으로 로그인에 이 기능들을 추가해 postman을 통해서 정상적으로 동작하는지 test를 해보고자 했다. 

우선적으로, int형을 반환해 성공 여부를 검증하던 login service layer를 토큰을 반환해야하기 때문에 String형을 반환하도록 수정할 필요가 있었다. 이에 따라, 실패나 예외 발생 시 0과 -1을 반환하던 트러블슈팅 부분도 null을 반환하도록 수정했다. 이 부분은 역시 사용자 설정 예외를 생성해 처리하면 더 상세하게 처리할 수 있을 것이라 생각한다. 하지만 우선순위가 낮으므로 일단 나중에!

Service layer를 수정하고 나니 아무래도 token에 User(DTO)의 정보가 들어가야할 필요가 있다는 것을 눈치챘다. 이에 mapper에서 단순히 password를 반환해 BCrypt로 비밀번호 일치 여부를 검증하던 것에서, User의 전체 정보를 반환하도록 수정했다. mapper의 resultType도 수정했다!

그 후 테스트를 진행한 결과 `@Value("${jwt.secretKey}")`를 통해서 `application.properties`에서 지정한 설정 값을 매개변수로 받아 `*SignatureAlgorithm*.***HS256`*** 으로 sign하고 parsing하는 과정에서 오류가 있다는 것을 알게 되었다. 원인은 BASE64가 특수문자를 처리하지 못한다는 것…!!! 그래서 특수문자를 빼고 기존에도 애용하던 LastPass의 랜덤 비밀번호 생성기를 이용해 Secret Key를 생성해 갱신해주었다. HS256에 필요한 최소 bit가 256으로, 처음에는 32자면 될 줄 알았지만 192bit라고 인식했기 때문에 시원하게 최대 제한인 50자로 설정했다.

<aside>
💡

검색해본 결과, BASE64가 1 char당 6bit를 할당한다는 사실을 알게 되었다. 그 때문에, 256bit 이상의 문자를 secret key로 쓰기 위해서는 256/6 == 42.666… 이기 때문에 43자 이상이 필요한 것!!
실제로 42자로 시험해보니 248bit라 `The specified key byte array is 248 bits which is not secure enough for any JWT HMAC-SHA algorithm.` 오류가 뜨는 것을 알 수 있었다!

</aside>

JwtUtil class를 통해 생성할 때, 매개변수로는 password를 포함한 User DTO의 모든 정보를 넘겨주지만, util에서 Claims를 세팅할 때에 원하는 key와 원하는 value만 골라서 세팅할 수 있으므로 노출해서는 안되는 정보는 적절히 걸러주었다. 

### 갑자기 생겨난 생성자와 의존성 주입에 대한 의문

원인이 된 코드는 다음과 같다.

```java
// --  JwtAuthFilter.java --
	private final UserDetailsService userDetailsService;
	private final JwtUtil jwtUtil;

	// 생성자로 의존성 주입
	public JwtAuthFilter(UserDetailsService userDetailsService, JwtUtil jwtUtil) {
		super();
		this.userDetailsService = userDetailsService;
		this.jwtUtil = jwtUtil;
	}

// -- SecurityConfig.java --
	private final JwtAuthFilter jwtAuthFilter;
	// 아래 두 개는 AuthFilter에 의존성을 가지고 있기 때문에...
	private final UserDetailsService userDetailsService;
	private final JwtUtil jwtUtil;
	
	// 생성자로 의존성 주입
	public SecurityConfig(JwtAuthFilter jwtAuthFilter, UserDetailsService userDetailsService, JwtUtil jwtUtil) {
		super();
		this.jwtAuthFilter = jwtAuthFilter;
		this.userDetailsService = userDetailsService;
		this.jwtUtil = jwtUtil;
	}
```

위와 같이 JwtAuthFilter는 UserDetailsService와 JwtUtil에 의존성을 가지고 있고, 이를 생성자를 통해 주입받아야 메소드를 동작시킬 수 있다. 근데 SecurityConfig는 JwtAuthFilter에 의존성을 가지고 있는데, 이를 생성자를 통해서 주입하면 자동으로 주입될 때 하위 의존성인 두 객체를 끌어오게 되는 것일까? 아니면 기본 생성자를 이용하는 것일까?

[관련 블로그 링크](https://madplay.github.io/post/why-constructor-injection-is-better-than-field-injection)

> 마지막으로 **생성자 주입(Constructor Injection)은** 생성자로 객체를 생성하는 시점에 필요한 빈을 주입한다. 조금 더 자세히 살펴보면, 먼저 생성자의 인자에 사용되는 빈을 찾거나 빈 팩터리에서 만든다. 그 후에 찾은 인자 빈으로 주입하려는 빈의 생성자를 호출한다. 즉, 먼저 빈을 생성하지 않는다. 수정자 주입과 필드 주입과 다른 방식이다.
그렇기 때문에 **순환 참조는 생성자 주입에서만 문제가 된다.** 객체 생성 시점에 빈을 주입하기 때문에 서로 참조하는 객체가 생성되지 않은 상태에서 그 빈을 참조하기 때문에 오류가 발생한다.
그렇다면 순환 참조 오류를 피하기 위해서 수정자 또는 필드 주입을 사용해야 할까? 오히려 그렇지 않다. 순환 참조가 있는 객체 설계는 잘못된 설계이기 때문에 **오히려 생성자 주입을 사용하여 순환 참조되는 설계를 사전에 막아야 한다**
> 

위 블로그에 따르면 생성자 주입은 인자에 사용되는 빈을 찾는다고 한다! 그렇다면 자동으로 끌어올 것이라 기대할 수 있다. 과연 테스트 결과는…?

⇒ 놀랍게도 filter를 적용하기 위해서는 의존성 주입을 받는 UserDetailService 인터페이스를 구현하는 클래스를 또 따로 만들 필요가 있다!!!! 보안 철저히 하기 위해서 이렇게 까다롭게 만들 줄이야…

그런데, 곰곰히 살펴보니 참조한 project와 코드들이 JPA 기반으로 Spring Boot에서 Entity를 선언해 조회하는 방식으로 이루어져 있었다!!! UserDetails와 UserDetailService에서 실제 DB에 유저가 있는지 검증하는 과정이 UserService 인터페이스를 통해서 별개로 처리하고 있는 과정이다 보니 filter가 있을 필요가 있을까..? 하는 생각이 든다. Servlet에 들어오기 전에 처리하는가, 아니면 Controller를 통해 로직을 처리하는 과정에서 처리하는 가의 차이가 있는 것 같은데, **결국엔 둘 다 Service layer를 거쳐서 DB와 통신을 한다는 점은 같기 때문에 큰 차이가 없어 보이기 때문이다.**

결론적으로, 개인정보를 매우 중요하게 다루거나 대형 프로젝트의 경우에는 이 방식으로 구현하는 것이 안전할 지 모르나, 현재 시간도 매우 촉박하고 규모도 매우 작은 이번 관통 PJT와 같은 경우에는 굳이 구현할 필요가 없다는 결론을 내렸다. Filter와 UserDetails를 통해 세분화 하는 시간과 노력에 비해 얻는 return이 매우 적기 때문이다. filter 대신 service layer에서 보안을 강화하고, 다른 메인 기능에 집중하자!

---

### Interceptor 구현

filter 문제를 해결(?)한 후, 남은 것은 가장 중요한 토큰 유효성 검사 로직이다. 이를 언제, 어떻게 해야 효율적일지 고민이 되어 Claude에게 질의했다.

- when, and how to verify validation of token?
    
    **pre-prompt:** 
    <페르소나>
    나는 이번에 크롬 확장 프로그램을 개발하는 미니 프로젝트에서 백엔드와 DB 개발을 맡게 됐어. Spring Boot와 MyBatis, MySQL을 이용해 개발을 진행 중이고, MVC 패턴을 사용해 모듈화와 코드 가독성을 올려 디버깅과 유지 보수에 유리한 방법으로 서버를 구축하려 해. 너는 이 기술스택에 대해 자세히 알고 있는 25년차 시니어 개발자로서, 주니어 개발자인 나에게 조언을 주는 입장이야. 다양한 데이터를 다루어봤고 토이 프로젝트도 다수 진행했기에 효과적인 조언을 줄 수 있어.
    
    <프로젝트에 대한 설명>
    프로젝트는 20~40대 사이의 컴퓨터를 활용해 업무를 보는 사람들을 대상으로 하고 있어. 랜덤하게 카드를 3장 받고, 그 중에 하나를 고를 수 있어. 카드에는 간단한 운동 및 스트레칭이 적혀있고, 그 퀘스트를 완수하면 그 카드를 수집할 수 있어. 수집한 카드에 따라 점수가 매겨져 있고, 그 점수를 토대로 유저의 총 점수가 결정되는 형태로 구상했어.
    
    <지시 사항>
    위 정보들을 토대로 내가 더 효과적이고 효율적으로 기능을 개발하고 테스트해볼 수 있도록 나를 도와줄 수 있는 방법들과 질문들에 대한 답을 생성해줬으면 해.
    
    **Q.** 
    Spring Boot에서 JWT를 활용해서 유저의 상태를  state-less하게 관리하려고 해. maven과 mybatis, spring 3 기반의 프로젝트이고, 간단하고 가벼운 프로젝트기 때문에 UserDetails와 JwtAuthFilter를 활용하지 않을 계획이야.
    refresh token을 활용하지 않고 기존의 서비스에서 token의 유효성 검사를 언제 해야할지, 어떻게 해야할지 알려줘. 이미 유효성을 검사하는 메소드는 만들어두었기 때문에 예시 코드는 아주 간단하게만 적어줘도 좋아!
    
    **A.** 
    JWT 토큰 유효성 검사는 크게 두 가지 시점에서 진행하는 것을 추천드립니다:
    
    1. 요청이 들어올 때마다 (Interceptor 활용)
    2. 중요 작업 전 (Service 레벨)
    
    추가적인 조언을 드리자면:
    
    1. **예외 처리**: JWT 관련 예외는 통합적으로 관리하시는 것이 좋습니다. `@ControllerAdvice`를 사용해서 전역적으로 처리하세요.
    2. **인증이 필요 없는 API 구분**: `@WebMvcConfigurer`를 구현하여 특정 경로는 인증을 제외할 수 있습니다.
    3. **토큰 만료 시간**: refresh token을 사용하지 않으시니, access token의 만료 시간을 적절히 설정하는 것이 중요합니다. 보통 30분~2시간 정도가 적당합니다.

결과, interceptor를 통해서 일부 token이 필요 없는 요청을 제외하고 대부분의 요청 시에 검증하는 로직을 넣기로 했다. 확실히 이렇게 하면, servlet에서 controller로 가는 도중에 낚아채기 때문에 controller의 부하, db와의 통신도 모두 시행되지 않을 수도 있기 때문에 서버 부담을 낮출 수 있을 것이다.

그리고, 정말 중요한 service의 경우에는 2중으로 검증하는 방식도 검토해볼 생각이다.

---

Interceptor를 구현하는 동안 새로운 트러블 슈팅 방식을 알아냈다!

`throw new ResponseStatusException(*HttpStatus*.***UNAUTHORIZED***, "유효하지 않은 토큰입니다.");` 이 exception 객체를 통해서 내가 원하는 Http status와 함께 reason을 붙여서 예외를 던질 수 있게 되었다! 이번 게 끝나면 이전 메소드들도 수정해야지!
아래는 구현한 WebConfig와 Interceptor이다.

- WebConfig
    
    ```java
    package com.ssafit.config;
    
    import org.springframework.context.annotation.Configuration;
    import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
    import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
    
    import com.ssafit.interceptor.JwtInterceptor;
    
    @Configuration
    public class WebConfig implements WebMvcConfigurer {
    	private final JwtInterceptor jwtInterceptor;
    	
    	// 생성자로 의존성 주입
    	public WebConfig(JwtInterceptor jwtInterceptor) {
    		super();
    		this.jwtInterceptor = jwtInterceptor;
    	}
    	/////////////////////////////////////////////////////////
    	
    	// interceptor 등록
    	@Override
    	public void addInterceptors(InterceptorRegistry registry) {
    		registry.addInterceptor(jwtInterceptor)
    				.addPathPatterns("/cards/**", "exercise/**" , "/user/**")
    				.excludePathPatterns("/accounts/**"); // accounts는 토큰 갖고 있을 필요 없으니 제외
    
    	}
    }
    
    ```
    
- JwtInterceptor
    
    ```java
    package com.ssafit.interceptor;
    
    import org.springframework.http.HttpStatus;
    import org.springframework.stereotype.Component;
    import org.springframework.web.server.ResponseStatusException;
    import org.springframework.web.servlet.HandlerInterceptor;
    
    import com.ssafit.util.JwtUtil;
    
    import jakarta.servlet.http.HttpServletRequest;
    import jakarta.servlet.http.HttpServletResponse;
    
    @Component
    public class JwtInterceptor implements HandlerInterceptor{
    	private final JwtUtil jwtUtil;
    	
    	// 생성자로 의존성 주입
    	public JwtInterceptor(JwtUtil jwtUtil) {
    		super();
    		this.jwtUtil = jwtUtil;
    	}
    	
    	/**
    	 * prehandle: servlet에서 controller로 가기전 
    	 */
    	@Override
    	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
    			throws Exception {
    		String token = request.getHeader("Authorization");
    		
    		// token이 header에 존재하는 경우
    		// Bearer 접두어를 통해 토큰 기반 인증이라는 것을 명시되어 있을 때
    		if(token != null && token.startsWith("Bearer ")) {
    			String jwt = token.substring(7); // front-end에서 보내주는 양식에 맞춤
    			
    			// 토큰 유효성 검사
    			if(jwtUtil.verifyToken(jwt)) {
    				// controller로 가도 좋다.
    				return true;
    			}
    		}
    		
    		throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "유효하지 않은 토큰입니다.");
    	}
    }
    
    ```
    

위 로직을 통해, 유저가 request를 `/accounts/**` 이외의 api endpoint로 보낼 때, servlet에서 controller로 가기 전 header에 token이 없다면 요청이 거절된다(Unauthorized). 반드시 token이 있는 로그인한 유저여야만 기능을 이용할 수 있다는 의미!

---

### Refactoring && trouble shooting(exception)

코드와 javadoc이 일관적이지 않아서 AI 기능으로 확장하기 전에 한 번 코드를 refactoring하고 trouble shooting 또한 `ResponseStatusException`을 던져서 상황에 맞는 예외를 던지기로 하였다. 위에서부터 순서대로, mvc패턴에 맞게 dao-service-controller는 한 번에 묶어서 진행했다. 생각보다 굉장히 불규칙적으로 코드와 주석을 작성했었다는 것을 알 수 있었고, 처음부터 javadoc을 이용해 param과 return, 그리고 method와 code block에 대한 설명을 적었다면 좀 더 가독성을 높여서 수월하게 디버깅을 할 수 있었을지도 모르겠다는 생각을 했다. 

예외에서 던질 상태는 다음을 참고했다!

https://velog.io/@hseoy/%EC%9E%90%EC%A3%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-10%EA%B0%80%EC%A7%80-HTTP-Status-Code

### RESTful API endpoint 개선

지운이로부터 기존의 endpoint의 가독성이 명확하지 않아 헷갈릴 수도 있다는 의견이 제시되었다. 이에 검토해본 결과, 처음에는 기능별로 구분해놓은 것이기 때문에 충분히 명확성을 확보할 수 있다고 생각했다(오로지 Back-end의 편협한 시각으로만 바라봤던 것이다). 하지만 RESTful API에 대해서 명확하게 개념을 잡고 있지 않기도 했기 때문에, 개선을 위해 Claude Sonnet 3.5에게 질의해 개선 사항을 요구했다.

요약하자면, 기능별 구분 보다는 리소스 간의 관계를 명확하게 하는 것이 더 중요했다. 그렇기 때문에 기존의 `/cards/{userId}`로 사용했던 것을 `/user/{userId}/card`로 user의 하위 uri로 통합해서 사용하는 것을 추천받았다. 이는 지운이가 추천했던 사항이랑 같은 것이라 신뢰도를 상승시켰다. API의 일관성과 리소스 간 관계 명확성, 확장성과 Client의 가독성을 고려했을 때, 개선할 점들이 많다고 판단, 오늘 진행할 Refactoring을 끝내고 마지막 단계에서 API 명세서를 정리함과 동시에 개선하기로 했다.

---

### Path Variable 취약점 개선

코드 refactoring과 trouble shooting 개선 작업을 하던 도중, 프로젝트 보안 로직의 구조상 취약점을 발견했다. 

> token의 유효성만 검사하기 때문에 이 token을 가지고 있는 사람과 요청으로 처리해야하는 데이터의 유저 정보가 일치하지 않는 경우 block할 수 없는 경우
> 

예시를 들어 설명하자면, `userId: 17`인 사람이 본인의 계정으로 로그인해 token을 발급받았다. 이를 Talend API 등을 통해서 Header에 등록하고, 어떤 사유로 알게된 API endpoint를 통해 {userId} path variable에 `12`를 입력해서 request를 보낸다. 기존의 로직상으로는 token이 아직 valid한 상태이기 때문에 통과되고, 정상적으로 비즈니스 로직이 동작해버린다.

이를 막기 위해 token에 있는 userId와 path variable로 들어오는 userId를 검증할 필요가 있다고 판단했고, interceptor를 통해 servlet에서 controller로 들어가기 전에 처리하도록 설계했다. 처음에 어떤 layer에서 해야할 지 판단을 쉽게 내릴 수 없었으나, 고민 후 token을 request의 header에서 직접적으로 가져올 수 있는 interceptor 부분이 적절할 것이라 판단했다. 이에 대해 Claude Sonnet 3.5에게 질의해 판단에 대한 근거를 마련하고자 했다.

- 취약점 보완과 보안 로직 강화 관련 질의
    
    Q.
    
    <조건>
    1. filter를 사용하지 않음
    2. userDetails및 기타 관련 인터페이스를 사용하지 않고 개인화된 DTO를 사용함
    3. MyBatis와 MySQL을 이용한 프로젝트임
    4. **"Spring 3"버전을 사용함**
    <시나리오>
    유저가 본인의 계정으로 로그인을 해서 token을 발급받았다. 그 후, Talend API와 같은 툴을 사용해 path variable로 사용되는 userId를 변경하고 요청을 날려 본인이 아닌 다른 사람의 정보에 접근하게 되었다. 이를 방지하기 위해 token의 id와 path variable의 id를 검증하는 보안 로직을 만들려고 한다. 어떤 layer에서 하면 좋을지(예를 들면 controller인지, service인지) 추천하고, 예시 코드와 함께 주석을 달아 각 코드가 어떤 기능을 하는지 대략적으로 나타내도록 합니다.
    
    프로젝트 구성은 첨부된 사진을 참고해주세요. 다시 한 번 강조하지만, Filter는 사용하지 않습니다.
    
    A.
    
    이런 검증 로직은 AOP(Aspect-Oriented Programming)를 활용한 인터셉터(Interceptor)에서 처리하는 것이 좋습니다. 이유는 다음과 같습니다:
    
    1. 컨트롤러나 서비스 레이어의 비즈니스 로직과 분리되어 관심사 분리가 잘 됩니다.
    2. 모든 요청에 대해 일관된 방식으로 인증을 처리할 수 있습니다.
    3. 코드 중복을 피하고 유지보수가 용이합니다.
    
    이 구현의 주요 특징과 장점은 다음과 같습니다:
    
    1. 모든 요청에 대해 자동으로 검증이 수행됩니다.
    2. Controller나 Service 코드를 수정할 필요가 없습니다.
    3. 경로 패턴을 통해 특정 URL에만 적용할 수 있습니다.
    4. 코드가 한 곳에 집중되어 있어 유지보수가 쉽습니다.

예시로 생성된 코드를 읽어본 결과 타당하다고 여겼고, 실제로 path variable을 가져오는 부분에서는 어떤 방식으로 들어오는 지 확실하게 알기 위해서 System.out.println()을 통해 값을 찍어보면서 코드를 작성했다.

`(Map<String, String>) request.getAttribute(HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE);`

Object로 반환되고, {key=value}의 형태로 반환되는 것을 알 수 있었다. 이를 각각 key와 value로 나누기 위해 Map으로 형 변환을 하는 것이었고, String의 형태로 받아야 하기에 String, String으로 받았다. 물론, userId의 원 타입은 int형이기 때문에, `Integer.valueOf()` 메소드를 활용해서 int형으로 변환한 후 비교해 검증하는 과정을 거쳤다.

그 결과로 작성된 코드는 다음과 같다.

```java
@Component
public class JwtInterceptor implements HandlerInterceptor{
	//-----------------------------------------------------------//
	// 멤버 필드
	//-----------------------------------------------------------//
	private final JwtUtil jwtUtil;
	
	// 생성자로 의존성 주입
	public JwtInterceptor(JwtUtil jwtUtil) {
		super();
		this.jwtUtil = jwtUtil;
	}
	//-----------------------------------------------------------//
	// AOP 로직
	//-----------------------------------------------------------//
	/** prehandle: servlet에서 controller로 가기전
	 */
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		String token = request.getHeader("Authorization");
		
		// token이 header에 존재하는 경우
		// Bearer 접두어를 통해 토큰 기반 인증이라는 것을 명시되어 있을 때
		if(token != null && token.startsWith("Bearer ")) {
			String jwt = token.substring(7); // front-end에서 보내주는 양식에 맞춤
			
			// 토큰 유효성 검사
			if(jwtUtil.verifyToken(jwt)) {
				// path variable 추출
				@SuppressWarnings("unchecked") // Object -> Map cast
				Map<String, String> pathVariables = (Map<String, String>) request.getAttribute(HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE);
				
				// path variable이 있고, userId가 포함되어 있을 때
				if(pathVariables != null && pathVariables.containsKey("userId")) {
					// path variable과 token에 있는 userId 추출
					int pathUserId = Integer.valueOf(pathVariables.get("userId"));
					int tokenUserId = jwtUtil.getUserId(jwt);
					
					// 검증결과 불일치 시
					if(pathUserId != tokenUserId) {
						throw new ResponseStatusException(HttpStatus.FORBIDDEN, "다른 사람의 정보에 접근할 수 없습니다.");
					}
				}		
				// controller로 가도 좋다.
				return true;
				
			}
		}
		
		throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "유효하지 않은 토큰입니다.");
	}
}
```

## Spring AI로 chat GPT API 활용

### OpenAI API  적용

Spring AI는 실험적인 프로젝트 중 하나로, AI API의 적용을 Spring Framework에서 더 쉽게 도와주기 위한 라이브러리이다. 지속적으로 발전하고 갱신되는 라이브러리이다보니, 처음에 적용하기가 생각보다 쉽지 않았다. 

dependency 추가는 처음부터 했었기에 주석을 해제하는 것에 그쳤지만, test를 위해 import 해야할 템플릿을 어떻게 해야할 지 몰라 기존에 정보를 찾던 방법과 마찬가지로 블로그들과 Claude에게 질의했다.

하지만 두 정보 모두 방법이 완전히 달랐기 때문에 굉장히 정보에 혼선을 주었고, 그 때 내가 선택한 방법은 일단 한 번 따라해보자! 였다. 하지만, 중간에 import해온 객체의 메소드가 완전히 바뀌어서 다시 rollback할 수 밖에 없었다. 블로그와 생성형 AI에서 제공한 코드 이후에도 업데이트가 있었기 때문으로 추측된다. 

그렇기에 가장 정확한 방법을 위해 SSAFY에서 정말 간단하게 연결했던 온라인 강의를 다시 돌려보았습니다. 다행히 강의 다시보기에 일목요연하게 정리가 되어있어 빠르게 원하는 강의를 찾을 수 있었고, 그 부분을 통해서 아주 간단하지만 정확한 골자를 파악할 수 있었습니다. 

`OpenAiChatModel` 객체를 활용해 `call()` 메소드로 호출했고, 이를 통해 테스트 답변을 받아오는 데 성공했습니다.

이 과정에서 가장 혼란스러웠던 부분은 수많은 객체들이 남아있었기 때문에 어떤 것을 활용해야 좋을지 몰랐던 부분과 [`application.properties`](http://application.properties) 설정을 할 때에 azure를 통해 제공하는 config도 있었는데, 이 설정 이름이 거의 유사했다는 점입니다. 가장 먼저 Spring AI 공식 홈페이지에서 정보를 찾았다면 혼선이 조금은 덜했지 않았을까 하는 아쉬움도 남습니다. 아무래도 시간에 쫓기다 보니 무의식적으로 기초부터 찾기 보다는 완성된 결과를 통해 골자를 clone하는 것에 중점을 맞추고 정보를 검색했던 것 같습니다. 

<u>앞으로는 더 높은 정확도를 위해 기초를 먼저 간단하게라도 찾아보고, 그 후에 완성된 코드를 보며 이해해 내 프로젝트에 접목할 수 있는 방안을 모색해보는 방향으로 정보를 수집하려 합니다.</u>

### Json String Parsing 문제

Chat GPT API를 통해 답변을 String으로 받기 때문에, String을 Exercise객체로 다시 변환할 필요가 있었습니다. 답변의 형식은 다음과 같습니다.

```
[
	{
	    "part": "손목",
	    "name": "손목 스트레칭",
	    "info": "손바닥를 위로 향하게 하고 반대손으로 손가락을 아래로 당기기",
	    "time": "10"
	},
	{
	    "part": "목",
	    "name": "목 스트레칭",
	    "info": "머리를 전천하 좌우로 기울여 목의 측면을 늘리기",
	    "time": "20"
	},
	{
	    "part": "어깨",
	    "name": "어깨 롤링",
	    "info": "어깨를 천천히 앞뒤로 5회, 위옆으로 5회 돌리기",
	    "time": "20"
	}
]
```

처음에는 }를 기준으로 `split()` 메소드를 쓰면 될 것이라 낙관했지만, }가 사라지는 이슈가 발생했습니다. 그리고 여전히 String으로 저장되어 있기 때문에 또 다시 나누어서 Exercise 객체 안의 멤버 필드와 매핑을 하고 새로이 객체를 생성해야하는 이슈가 있었습니다. 그 때, JwtUtil에서 Map을 통해서 Object를 자동으로 형변환 했던 것처럼, json 또한 자동으로 바꿔줄 수 있는 어떤 내부적인 장치가 있을 것이라 생각했고, 이를 단서삼아 Claude에게 질의하였습니다.

- Array 형태의 Json을 각각 분리하는 방법에 대한 질의
    
    ```java
    @Service
    public class ExerciseCardService {
        private final ObjectMapper objectMapper = new ObjectMapper();
        
        public List<ExerciseCard> parseExerciseCards(String jsonString) {
            try {
                // JSON 배열을 ExerciseCard 객체 리스트로 변환
                return objectMapper.readValue(jsonString, 
                    new TypeReference<List<ExerciseCard>>() {});
            } catch (JsonProcessingException e) {
                // 예외 처리
                log.error("JSON 파싱 중 오류 발생: ", e);
                throw new RuntimeException("카드 데이터 처리 중 오류가 발생했습니다.", e);
            }
        }
    }
    ```
    

먼저, 바인딩할 객체가 이미 있었기 때문에, ExerciseCard로 예시를 들어준 부분을 Exercise 객체로 바꿔주었습니다. ObjectMapper라는 Jackson 라이브러리의 핵심 클래스를 사용해 JSON을 Java의 객체로 바인딩해 변환하고, 이를 List에 담아주었습니다.

빠르고 간단한 해결방법에 굉장히 놀라면서도 Jackson과 같은 라이브러리가 이미 있을 것이라는 추측이 맞아떨어져 문제를 점차 효과적으로 해결해가고 있다는 느낌이 들었습니다.

### gpt로 생성한 답변을 DB에 저장하는 문제에 대한 고민

GPT로 답변을 생성하고 그것을 가공하는 부분까지 마치자, 문득 드는 생각이 있었습니다. 

> 기존에 미리 운동을 저장하는 것과 다르게 그 때 그 때 생성한다면, DB에 저장은 어떻게 하지..?
중복되는 운동이 많아질 것 같은데 DB가 어느 순간부터 비효율적으로 바뀌지 않을까..?
> 

고민을 거듭한 결과, 우선적으로 유저가 선택한 1개의 운동에 대해서만 저장하도록 하는 것을 목표로 추가 설계를 시작했습니다. 벤치마킹한 무디에서도 그 내용 자체를 저장하기도 하고, 비슷한 내용일지라도 세부적으로 디테일이 다를 수 있다는 생각이 들었기 때문입니다. 또한, 현재는 시간상 불가능 하지만, 개인정보를 수집한 것을 토대로 명령 프롬프트를 개인화할 수 있다면, 그 답변 또한 다양해질 것이기 때문에 그에 따라서 중복이 줄어들 것이라는 기대도 있습니다.

### 마무리 작업

1. gpt로 생성한 답변에 예상보다 중복이 많아 프롬프트를 전면 수정할 필요성을 느꼈습니다. 처음에는 <요청> <주의사항> <양식> 3단계로 나누었지만 중복을 없애는 데에는 큰 도움이 되지 않았습니다. 그래서 차라리 생성형 AI에게 프롬프트 엔지니어링에 대해 조언을 받으면 되는 것이 아닐까? 하여 기존의 프롬프트를 원하는 결과를 도출할 수 있도록 수정해달라고 요청했습니다. 그 결과는 다음과 같습니다.
    1. 기존 프롬프트
        
        ```
        
        <요청>
        당신은 운동 및 건강에 관한 정확한 지식을 가지고 있는 전문가입니다.
        하루 종일 컴퓨터 앞에 앉아있는 직장인들을 위해 추천할 수 있는 아주 간단한 스트레칭 및 운동 3개를 추천해주세요.
        "손목, 허리, 어깨, 목, 다리, 전신, 눈, 팔, 허벅지, 등, 종아리, 엉덩이, 복부, 가슴"과 같이 최대한 다양한 부위에서 다양한 운동 및 스트레칭을 추천해주시기 바랍니다.
        부위 및 운동과 스트레칭은 **반드시 랜덤**으로 최대한 겹치지 않게 추천해주세요.
        
        <주의사항>
        각 스트레칭 및 운동에 대한 답변은 다음과 같은 양식에 맞춰 String 형식으로 해야만 합니다.
        json형식을 절대 금지합니다. 단순 String으로 반드시 답변을 보내야합니다.
        양식의 각 부분에 대한 상세 설명은 소괄호를 통해 알려드리겠습니다. 
        양식에 해당하는 답변 이외에는 절대 하지 마시기 바랍니다.
        
        <양식>
        [
        {
            (1번째 운동 데이터 예시)
            "part": "종아리", (운동 부위)
            "name": "까치발 운동", (운동 이름)
            "info": "제자리에서 발뒤꿈치를 들었다 내리는 동작 반복하기", (운동 내용)
            "time": "20" (운동 지속 시간, **반드시 예시와 같은 정수형으로**)
        },        
        {
            (2번째 운동 데이터)
        },
        {
            (3번째 운동 데이터)
        }
        ]        
        ```
        
    2. 수정 결과로 답변 받은 프롬프트
        
        ```
        <요청>
        당신은 운동 및 건강에 관한 정확한 지식을 가지고 있는 전문가입니다.
        하루 종일 컴퓨터 앞에 앉아있는 직장인들을 위한 운동을 추천해주되, 다음 규칙을 반드시 따라주세요:
        
        1. 카테고리별 선택
        - 상체(어깨, 목, 팔, 가슴)에서 1개
        - 코어(허리, 복부, 등)에서 1개
        - 하체(다리, 허벅지, 종아리, 엉덩이)에서 1개
        
        2. 난이도 구분
        - 각 운동은 초급(앉아서 가능), 중급(서서하는 동작), 고급(전신 운동) 중 서로 다른 난이도여야 합니다.
        
        3. 운동 시간
        - 초급: 15-20초
        - 중급: 20-30초
        - 고급: 30-40초
        
        이전에 추천된 운동 조합을 피해주세요: [이전 운동 리스트]
        
        <양식>
        [
        {
            "part": "(운동 부위)",
            "name": "(운동 이름)",
            "info": "(운동 내용)",
            "time": "(난이도에 맞는 정수형 시간)",
            "level": "(초급/중급/고급)"
        },
        ... (3개의 운동)
        ]
        ```
        
        이 중에서 이전 운동 리스트를 가져와 참조하는 것은 장기적으로 보았을 때 굉장히 비효율적이기 때문에(시간이 O(n)이상 걸리므로) 그 부분을 삭제한 후, 최대한 기존의 데이터 구조와 맞춰 수정하였습니다. 최종적으로 완성된 프롬프트는 다음과 같습니다.
        
    3. 최종 프롬프트
        
        ```
        <요청>
        당신은 운동 및 건강에 관한 정확한 지식을 가지고 있는 전문가입니다.
        하루 종일 컴퓨터 앞에 앉아있는 직장인들을 위한 운동을 추천해주되, 다음 규칙을 반드시 따라주세요:
        
        1. 부위 선택
        손목, 허리, 어깨, 목, 다리, 전신, 눈, 팔, 허벅지, 등, 종아리, 엉덩이, 복부, 가슴, 얼굴 등
        가능한 부위 중에서 **중복없이 완전한 임의로** 3개를 선택
        
        2. 난이도 구분
        - 각 운동은 초급(스트레칭), 중급(앉아서 가능한 운동), 고급(서서 가능한 운동) 중 임의의 난이도를 골라야 합니다.
        
        3. 운동 시간
        - 운동 시간은 운동의 난이도에 맞게, 10이상 60이하의 정수를 선택합니다.
        
        4. 운동 내용
        운동 내용 또한 부위에 맞는 운동 중 **최대한 다양한** 운동 내용을 추천합니다. 당신은 전문가이기 때문에 다양한 운동을 추천할 수 있습니다.
        										
        <제약 사항>
        각 스트레칭 및 운동에 대한 답변은 다음과 같은 양식에 맞춰 String 형식으로 해야만 합니다.
        json형식을 절대 금지합니다. 단순 String으로 반드시 답변을 보내야합니다.
        양식의 각 부분에 대한 상세 설명은 소괄호를 통해 알려드리겠습니다. 
        양식에 해당하는 답변 이외에는 절대 하지 마시기 바랍니다.
        
        <양식>
        [
        {
            "part": "(운동 부위)",
            "name": "(운동 이름)",
            "info": "(운동 내용)",
            "time": "(난이도에 맞는 정수형 시간)"				    
        },
        ... (3개의 운동)
        ]
        ```
        
        프롬프트 개선을 통해서 이전보다 확연히 다르게 답변이 다양해졌음을 체감할 수 있었습니다. 이를 한층 더 개선하기 위해서 좀 더 고민해볼 필요가 있을 듯 합니다.
        
    
    <aside>
    💡
    
    중간에 gpt의 api-key의 quota error가 발생하는 이슈가 있었습니다. 이에 따라 plan B로 claude API도 추가하는 과정을 거쳤습니다. 이 때에는 <u>앞서 다짐했던 대로, Spring AI의 공식 홈페이지에서 먼저 정보를 찾았습니다. ChatGPT와 다른 점이 거의 없었기에 쉽게 추가할 수 있었고, 공식 홈페이지의 정보를 기준으로 했기에 별 다른 오류 없이 빠르게 성능을 테스트할 수 있었습니다.</u>
    
    </aside>
    

### 핵심 로직 변경에 따른 비즈니스 로직 flow에 대한 논의

기존에 DB에 저장되어있던 exercise 중에서 랜덤으로 3가지를 뽑아 조회하던 로직에서 Gen AI API를 활용해 완전히 새롭게 3가지를 생성하는 방식으로 변경함에 따라, API 구조와 비즈니스 로직 flow가 완전히 변경되었습니다. 이에 대해서 제가 생각했던 방식이 당연히 공유되고 있을 것이라 착각하였기에, Back-End의 개발이 끝나고 나서야 Front-end에서 문제가 발생했다는 것을 깨달을 수 있었습니다. 이에 대해서 뒤늦게나마 Front-end와 새롭게 바뀐 비즈니스 로직의 flow에 대해 설명하고 공유해 다시 로직을 정상화할 수 있었습니다.

- 기존
    - `getRandomExercise()`를 호출해 `exerciseId`를 포함한 멤버 필드를 조회
    - 그 값으로 `Card` 객체를 생성해 `postCard()`호출
- 변경
    - `getRandomExercise()`를 호출해 아직 `exerciseId`가 0(빈 값)인 운동 생성
    - `postExercise()`를 호출해 운동 DB에 등록
    - 이 때 반환된 `exerciseId` 를 통해 `Card` 객체 생성
    - `postCard()` 호출

### interceptor로 인한 CORS 문제

처음에 Back-end의 interceptor로 인해 preflight에 대해 응답하지 않으면 CORS 오류를 발생시키는 이슈가 있었습니다. 이를 Back-end의 interceptor에 OPTIONS request인지 확인하는 method를 이용해 interceptor를 통과해서 reqeust를 보내는 것으로 해결했었습니다. 근데, `/auth` 와 같은 경우에는 token이 존재하지 않다보니 `excludePathPatterns()` 로 제외시켜놨는데, 이 요청을 보낼 때 다시금 같은 오류가 발생하는 이슈가 발생했습니다. 이를 해결하기 위해 다시 정리한 로직은 다음과 같습니다.

1. Front-end가 Back-end에 응답 가능한 상태인지 preflight 요청을 보냄
2. 이에 대해 응답했을 경우 정상으로 Request 요청

이를 단서로 Claude에게 질의한 결과 다음과 같은 결론을 얻을 수 있었습니다.

> 하지만 @CrossOrigin 어노테이션만 사용할 때의 한계점들이 있습니다:
> 
> 1. **인증/인가가 필요한 경우**:
> - Spring Security를 사용중이라면, Security 필터가 CORS 필터보다 먼저 동작할 수 있어요
> - 이 경우 Security에서 먼저 요청을 차단할 수 있습니다

Spring Security의 filterChain이 먼저 동작해서 CORS filter가 동작하기 전에 요청을 차단하는 이슈였던 것입니다!

이를 해결하기 위해 다음과 같은 config를 추가해주었습니다.

```java
	@Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173", "http://localhost:5174")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
```

추가 후 정상적으로 CORS 오류는 없어졌으나, 새롭게 404 Not Found Exception이 발생했습니다. resource를 아예 찾을 수 없다는 오류였고, controller에도 들어오지 않는 것으로 보아, filter 혹은 interceptor의 문제일 것이라 추측하였습니다. 

첫 시도에서 위에 추가했던 interceptor 뿐만 아니라 jwtInterceptor 또한 주석 처리를 하고 시도해보았으나 같은 오류가 발생했습니다. 그에 따라 filter의 문제일 것이라 생각하고, filter에 해당하는 부분은 Spring-Security가 유력할 것이라 판단해 집에서 다시 디버깅을 진행할 생각입니다. 

→ 정답은… merge하면서 `@RestController` 옵션이 날라갔기 때문이었습니다!!!! 왜인지 바인딩 자체가 안돼서 404 오류더니!!!! 파트너인 지운이가 찾아줘서 빠르게 수정할 수 있었습니다. 이번 일을 통해서 문법적 오류가 아니라 찾기 힘든 부분이 merge를 하면서 날아가면 굉장히 까다로운 이슈가 된다는 것을 알 수 있었습니다. 앞으로 수동으로 merge할 때 head와 다른 commit을 비교하면서 꼭 다시 확인을 해볼 것입니다.