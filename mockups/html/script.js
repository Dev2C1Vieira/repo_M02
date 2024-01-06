window.addEventListener("DOMContentLoaded", (event) => {
  let today = new Date();

  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  console.log(today);

  document.getElementById("bdate").value = today;
});

function checkPending(option) {
  const selectedValue = document.getElementById("requestStatus").value;
  const refuseReasonField = document.querySelector(".reason");

  console.log(option)
  console.log(selectedValue)

  if (parseInt(selectedValue) === option) {
    refuseReasonField.style.display = "block";
    
  } else {
    refuseReasonField.style.display = "none";
  }
}


function zoomImage(icon) {
  var image = $(icon).siblings(".preview-image");

  var modalContent = $('<div class="modal-content"></div>').append($('<img class="zoomed-image" src="' + $(icon).attr("src") + '">'));

  var modal = $('<div class="modal"></div>').append(modalContent);
  $("body").append(modal);

  modal.click(function () {
    $(this).remove();
  });
}


function UpdateImages(icon) {
  var image = $(icon).siblings(".preview-image");

  var modalContent = $('<div class="modal-content"></div>').append(
    $('<img class="zoomed-image" src="' + $(icon).attr("src") + '">'),
    $('<div class="buttons-container"></div>').append(
      $('<button class="update-button">Atualizar</button>').click(function() {
        console.log("Update image logic goes here");
      }),
      $('<button class="delete-button delete">Eliminar</button>').click(function() {
        console.log("Delete image logic goes here");
      })
    )
  );

  var modal = $('<div class="modal"></div>').append(modalContent);
  $("body").append(modal);

  modal.click(function() {
    $(this).remove();
  });
}
