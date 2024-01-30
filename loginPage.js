const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");

function submitOn(){
  const userID = loginForm.Id.value.trim(); //trim(): 공백 제거
  const userPW = loginForm.Pw.value.trim();

  if(userID.length<4 || userPW.length<4){
    disableSubmitButton();
  }
  else{
    enableSubmitButton();
  }
}

function enableSubmitButton() {
  loginBtn.disabled = false; //버튼 활성화
  loginBtn.style.opacity = '1';
  loginBtn.style.cursor = 'pointer';
}

function disableSubmitButton() {
  loginBtn.disabled = true; //버튼 비활성화
  loginBtn.style.opacity = '0.5';
  loginBtn.style.cursor = 'default';
}

loginBtn.addEventListener("click", (event) => {
  event.preventDefault(); //submit후 새로고침 막기

  const userID = loginForm.Id.value;
  const userPW = loginForm.Pw.value;

  if(userID.length < 1 || userPW.length < 1){
    alert("아이디와 비밀번호를 모두 입력하세요.");
    return; //리턴 안하면 로그인 실패 문구까지 이어서 뜸
  }

  if(userID==="rim08" && userPW==="1234"){
    alert("[로그인 성공] "+userID+"님 환영합니다.");
    location.href="index.html";
  }
  else{
    alert("[로그인 실패] 아이디 또는 비밀번호가 틀렸습니다.");
  }
})

//입력 칸의 값에 변화가 있을 때마다 호출
loginForm.Id.addEventListener("input", submitOn);
loginForm.Pw.addEventListener("input", submitOn);