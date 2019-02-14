 const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

    const USER_LS = "currentUser",
          SHOWING_CN = "showing";
 
    function saveName(text){
        localStorage.setItem(USER_LS, text);
    }


    function handleSubmit(event){
        event.preventDefault();
        const currentValue =input.value;
        paintGreeting(currentValue);
        saveName(currentValue);
    }

    function askForName(){
        form.classList.add(SHOWING_CN);
        form.addEventListener("submit", handleSubmit);
    }

    function paintGreeting(text) {
        form.classList.remove(SHOWING_CN);
        greeting.classList.add(SHOWING_CN);
        greeting.innerText = `Hello ${text}`;
    }

    function loadName() {
        const currentUser = localStorage.getItem(USER_LS); //USER_LS 정보를 currentUser에 주고 다시 USER_LS에 줌
        if (currentUser === null) {//User정보를 돌려서 받았어!! if에 용건은 User가 일을떄 없을때 어떤 표정을??
            askForName();//User가 없는 경우
        } else {
            paintGreeting(currentUser);//User가 있는 경우
        }
    }



    function init() {
        loadName();
    }

    init();