const ratings = document.querySelector(".rating-numbers");
const submit = document.querySelector(".btn");
const start = document.querySelector(".state-start");
const end = document.querySelector(".state-end");
const result = document.querySelector(".result");
const allRating = document.querySelectorAll(".radio-input");

ratings.addEventListener("click", (e) => {
  //----menghilangkan class "actived" pada seluruh tag "div.radio-input"
  allRating.forEach((item) => {
    item.classList.remove("actived");
  });

  //----jika user mengklik salah satu rating , maka rating tersebut ditambahkan class "actived"
  //----class "actived" memberikan warna background "light-grey"
  if (e.target.classList.contains("radio-input")) {
    e.target.classList.add("actived");

    const answer = e.target.innerText;
    checkin(answer);
  }
});

submit.addEventListener("click", () => {
  if (result.innerText !== "") {
    start.classList.remove("show");
    end.classList.add("show");
  }
});

function checkin(answer) {
  result.innerText = `You selected ${answer} out 5`;
}
