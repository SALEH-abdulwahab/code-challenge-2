document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
const form =
document.getElementById("guest-form");

const input =
document.getElementById("guest-name");

const guestList =
document.getElementById("guest-list");

form.addEventListener("submit",
    function(event) {
     event.preventDefault();

      const guestName = input.value.trim();
      if (guestName === "") {
        alert("please entre a name.");
        return;
      }
      console.log(guestName);
      guestList.children.length
      if (guestList.children.length >= 10)
      {alert("the guest list is full")
        return;
      }
    

      const li = 
    document.createElement("li");
    li.classList.add("guest-item");

    const nameSpan = 
    document.createElement("span");
    nameSpan.textContent = guestName;
    nameSpan.classList.add("guest-list")

    const rsvpButton = 
    document.createElement("button")
    rsvpButton.textContent = "Attending";
    rsvpButton.classList.add("rsvp-btn")

    const removeButton =
    document.createElement("button");
    removeButton.textContent = "remove";
    removeButton.classList.add("remove-btn")

  li.append(nameSpan, rsvpButton, removeButton)
  guestList.append(li)

    removeButton.addEventListener("click",
     function() { event.preventDefault()
      li.remove();
    })

    rsvpButton.addEventListener("click",
      function(event) {
        event.preventDefault();

        if (rsvpButton.textContent ===
          "Attending") {
            rsvpButton.textContent =
            "Not Attending";
          } else {
            rsvpButton.textContent = "Attending";
          }
      }
    )
    input.value = ""
    const now = new Date();

    const time = 
    now.toLocaleTimeString();

    const timeSpan = 
    document.createElement("small");
    timeSpan.textContent = `added at ${time}`;
    li. append(timeSpan); 
    }
    )
  