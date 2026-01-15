// const form = document.getElementById("applyForm");
// const modalOverlay = document.getElementById("modalOverlay");
// const closeModal = document.getElementById("closeModal");
// const errorMessage = document.getElementById("errorMessage");
// const submitBtn = document.getElementById("submitBtn");


// // 擬似API（成功 or 失敗をランダムで返す）
// function fakeApiRequest() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const isSuccess = Math.random() > 0.3; // 70%成功
//             if (isSuccess) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, 1000); // 通信っぽく1秒待つ
//     });
// }

// // フォーム送信
// form.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     errorMessage.textContent = "";

//     try {
//         await fakeApiRequest(); // ← API成功想定

//         // 成功時のみモーダル表示
//         modalOverlay.classList.add("is-active");

//     } catch {
//         // 失敗時
//         errorMessage.textContent =
//             "申し込みに失敗しました。時間をおいて再度お試しください。";
//     }
// });

// // ×で閉じる
// closeModal.addEventListener("click", () => {
//     modalOverlay.classList.remove("is-active");
// });

// // 背景クリックで閉じる
// modalOverlay.addEventListener("click", (e) => {
//     if (e.target === modalOverlay) {
//         modalOverlay.classList.remove("is-active");
//     }
// });


const form = document.getElementById("applyForm");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");
const errorMessage = document.getElementById("errorMessage");
const submitBtn = document.getElementById("submitBtn");

function fakeApiRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3 ? resolve() : reject();
    }, 1000);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorMessage.textContent = "";

  submitBtn.disabled = true;
  submitBtn.value = "送信中…";

  try {
    await fakeApiRequest();
    modalOverlay.classList.add("is-active");
    form.reset();
  } catch {
    errorMessage.textContent =
      "申し込みに失敗しました。時間をおいて再度お試しください。";
  } finally {
    submitBtn.disabled = false;
    submitBtn.value = "無料体験予約申し込み";
  }
});

closeModal.addEventListener("click", () => {
  modalOverlay.classList.remove("is-active");
});
