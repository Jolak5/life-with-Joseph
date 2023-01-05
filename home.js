const speakerArr = [
  {
    image1:
      "https://cdn-icons-png.flaticon.com/512/648/648936.png?w=900&t=st=1672740086~exp=1672740686~hmac=f475395e980f9e531a69efb065a9b2030ad3b14f660f6ec6c9c2d148a244bc93",
    image2:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    speakerName: "Kayode Olatunji",
    speakerBio: "A professional website with over 5 years of experience",
    speakerAct:
      "Kayode designs with the customer in mind and ensures the website owners what they paid for",
  },

  {
    image1:
      "https://cdn-icons-png.flaticon.com/512/648/648936.png?w=900&t=st=1672740086~exp=1672740686~hmac=f475395e980f9e531a69efb065a9b2030ad3b14f660f6ec6c9c2d148a244bc93",
    image2:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    speakerName: "Christianah Oke",
    speakerBio: "A professional website with over 5 years of experience",
    speakerAct:
      "Kayode designs with the customer in mind and ensures the website owners what they paid for",
  },
  {
    image1:
      "https://cdn-icons-png.flaticon.com/512/648/648936.png?w=900&t=st=1672740086~exp=1672740686~hmac=f475395e980f9e531a69efb065a9b2030ad3b14f660f6ec6c9c2d148a244bc93",
    image2:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    speakerName: "Christianah Oke",
    speakerBio: "A professional website with over 5 years of experience",
    speakerAct:
      "Kayode designs with the customer in mind and ensures the website owners what they paid for",
  },
  {
    image1:
      "https://cdn-icons-png.flaticon.com/512/648/648936.png?w=900&t=st=1672740086~exp=1672740686~hmac=f475395e980f9e531a69efb065a9b2030ad3b14f660f6ec6c9c2d148a244bc93",
    image2:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    speakerName: "Christianah Oke",
    speakerBio: "A professional website with over 5 years of experience",
    speakerAct:
      "Kayode designs with the customer in mind and ensures the website owners what they paid for",
  },
  {
    image1:
      "https://cdn-icons-png.flaticon.com/512/648/648936.png?w=900&t=st=1672740086~exp=1672740686~hmac=f475395e980f9e531a69efb065a9b2030ad3b14f660f6ec6c9c2d148a244bc93",
    image2:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    speakerName: "Christianah Oke",
    speakerBio: "A professional website with over 5 years of experience",
    speakerAct:
      "Kayode designs with the customer in mind and ensures the website owners what they paid for",
  },
  {
    image1:
      "https://cdn-icons-png.flaticon.com/512/648/648936.png?w=900&t=st=1672740086~exp=1672740686~hmac=f475395e980f9e531a69efb065a9b2030ad3b14f660f6ec6c9c2d148a244bc93",
    image2:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    speakerName: "Christianah Oke",
    speakerBio: "A professional website with over 5 years of experience",
    speakerAct:
      "Kayode designs with the customer in mind and ensures the website owners what they paid for",
  },
];

const speakerSection = document.querySelector(".speaker-section1");
function createSpeaker() {
  speakerSection.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="speaker-container">
          <article id="" class="speakers">
            <div class="images">
              <img
                class="bg-1"
                src=""
                alt=""
              />
              <img
                class="bg-2"
                src=""
                alt=""
              />
            </div>
            <div class="speaker-details">
              <h4 class="speaker-name"></h4>
              <h5 class="speaker-bio">
               
              </h5>
              <hr />
              <p class="speaker-act">
                
              </p>
            </div>
          </article>
        </div>`
  );
}

// eslint-disable-next-line no-plusplus

for (let i = 5; i >= 0; i--) {
  createSpeaker();

  const name = document.querySelector(".speaker-name");
  const bio = document.querySelector(".speaker-bio");
  const act = document.querySelector(".speaker-act");
  const img1 = document.querySelector(".bg-1");
  const img2 = document.querySelector(".bg-2");

  name.textContent = speakerArr[i].speakerName;
  bio.textContent = speakerArr[i].speakerBio;
  act.textContent = speakerArr[i].speakerAct;
  img1.setAttribute("src", speakerArr[1].image1);
  img2.setAttribute("src", speakerArr[1].image2);
}
