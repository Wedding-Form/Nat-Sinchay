document.addEventListener("DOMContentLoaded", function () {
  // ចាប់យក Element ទាំងអស់ដែលត្រូវប្រើ
  const openInvitationBtn =
    document.getElementById("openInvitationBtn") ||
    document.getElementById("openBtn");
  const coverPage = document.getElementById("coverPage");
  const mainContent = document.getElementById("mainContent");
  const weddingAudio = document.getElementById("weddingMusic");

  // ផ្ទៀងផ្ទាត់ថាប៊ូតុងមានពិតមែន ទើបដាក់ Event Listener
  if (openInvitationBtn) {
    openInvitationBtn.addEventListener("click", function () {
      // ១. ចាក់បទភ្លេងការ
      if (weddingAudio && weddingAudio.paused) {
        weddingAudio
          .play()
          .catch((error) => console.log("Audio play error:", error));
      }

      // ២. បន្ថែម Class ធ្វើឱ្យ Cover Page បាត់ទៅវិញបែបស្រទន់
      if (coverPage) {
        coverPage.classList.add("fade-soft");
      }

      // ៣. រង់ចាំ 1 វិនាទី (1000ms) ឱ្យ Transition ស្រទន់ដើរចប់
      setTimeout(() => {
        if (coverPage) coverPage.style.display = "none";

        if (mainContent) {
          mainContent.style.display = "block";

          // បន្ថែម Effect Fade-In ស្រទន់សម្រាប់ Main Content
          setTimeout(() => {
            mainContent.classList.add("fade-in-soft");

            // Refresh AOS animation ប្រសិនបើមានប្រើ AOS Library
            if (typeof AOS !== "undefined") {
              AOS.refresh();
            }
          }, 50);
        }

        // Scroll ទៅលើគេបង្អស់វិញដោយរលូន
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 1000);
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const openInvitationBtn =
    document.getElementById("openInvitationBtn") ||
    document.getElementById("openBtn");
  const coverPage = document.getElementById("coverPage");
  const mainContent = document.getElementById("mainContent");
  const weddingAudio = document.getElementById("weddingMusic");

  if (openInvitationBtn) {
    openInvitationBtn.addEventListener("click", function () {
      // ចាក់បទភ្លេងការភ្លាមៗពេល User ចុចប៊ូតុង
      if (weddingAudio) {
        weddingAudio.currentTime = 0; // ចាប់ផ្តើមពីដើមបទ
        weddingAudio
          .play()
          .then(() => {
            console.log("Audio playing successfully");
          })
          .catch((error) => {
            console.log("Audio play error:", error);
          });
      }

      // លាក់ Cover Page និងបង្ហាញ Main Content
      if (coverPage) coverPage.classList.add("fade-soft");

      setTimeout(() => {
        if (coverPage) coverPage.style.display = "none";
        if (mainContent) {
          mainContent.style.display = "block";
          setTimeout(() => {
            mainContent.classList.add("fade-in-soft");
            if (typeof AOS !== "undefined") AOS.refresh();
          }, 50);
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 1000);
    });
  }
});