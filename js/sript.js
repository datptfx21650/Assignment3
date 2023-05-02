// Chức năng ẩn thông tin cá nhân
function handleSubmit() {
  const emailValue = document.getElementById(`email`).value.toLocaleLowerCase();
  const errorEmail = document.getElementById(`error-email`);
  //hàm checkmail
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const checkMail = emailValue.match(regex);
  const sectionContent = document.querySelector(".containerr");
  const submitControl = document.querySelector(`.submit-email`);

  //If checkmail == true
  if (checkMail) {
    sectionContent.style.display = `block`;

    // If checkmail == false
  } else {
    errorEmail.innerHTML = `Hãy nhập lại email để xác thực `;
  }
}

// Chức năng ẩn thông tin nghề nghiệp
function handleOnMouseOver(element) {
  const viewmore = element.querySelector(`.view-more`);
  viewmore.style.display = `inline-block`;
}
function handleOnMouseOut(element) {
  const viewmore = element.querySelector(`.view-more`);
  viewmore.style.display = `none`;
}
function handleViewMore(element) {
  const parentElement = element.closest(`.parent`);
  const viewmore = parentElement.querySelector(`.view-more`);
  const sectionContent = parentElement.querySelectorAll(`.job-content`);
  if (viewmore.classList.value.includes(`.view-more`)) {
    sectionContent.forEach((element) => {
      element.style.display = `block`;
    });
    viewmore.classList.remove(`.view-more`);
    viewmore.innerHTML = `View Less`;
  } else {
    sectionContent.forEach((element) => {
      element.style.display = `none`;
    });
    viewmore.classList.add(`.view-more`);
    viewmore.innerHTML = `View More`;
  }
}
