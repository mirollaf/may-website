const teamMembers = [
    {
      name: "Drake",
      Genre: "R&B",
      Strengths: [
        "Versatility in both rap and singing.",
        "Strong lyrical ability, relatable themes.",
        "Charismatic stage presence."
      ],
      age: 37,
      Weaknesses: [
        "Can be repetitive in themes and style.",
        "Criticized for lacking innovation in recent work."
      ],
      Specialty: "Blending rap and R&B with mainstream appeal.",
      imageURL: ""
    },



    {
      name: "SZA",
      Genre: " Neo-Soul",
      Strengths: [
        "Unique vocal tone and emotive delivery.",
        "Strong songwriting skills with personal, introspective lyrics.",
        "Ability to blend genres like R&B, neo-soul, and hip-hop."
      ],
      age: 34,
      Weaknesses: [
        "Sometimes inconsistent live performances.",
        "Limited discography compared to peers."
      ],
      Specialty: "Creating soulful, introspective tracks with a modern twist.",
      imageURL: ""
    },



    {
      name: "Shawn Mendes",
      Genre: "Pop, Pop-Rock",
      Strengths: [
        "Strong vocal ability with a wide range.",
        "Charismatic performer with strong stage presence.",
        "Ability to write and perform catchy pop-rock anthems."
      ],
      age: 25,
      Weaknesses: [
        "Can be perceived as formulaic in his music.",
        "Needs more variety in his musical style."
      ],
      Specialty: "Pop-rock ballads and anthems with broad appeal.",
      imageURL: ""
    },



    {
      name: "The Weeknd",
      Genre: "R&B, Pop",
      Strengths: [
        "Unique voice with a wide vocal range.",
        "Mastery in creating dark, atmospheric R&B and pop tracks.",
        "Strong visual and thematic consistency in his work."
      ],
      age: 34,
      Weaknesses: [
        "Sometimes criticized for repetitive themes and production.",
        "Persona can be polarizing."
      ],
      Specialty: "Moody, synth-heavy R&B with a cinematic quality.",
      imageURL: ""
    },


    {
      name: "Frank Ocean",
      Genre: " Neo-Soul,R&B,",
      Strengths: [
        "Unique voice and emotive delivery.",
        "Highly acclaimed songwriting with deep, introspective lyrics.",
        "Ability to blend R&B, soul, and experimental sounds."
      ],
      age: 36,
      Weaknesses: [
        "Long gaps between releases.",
        "Can be enigmatic and less prolific in public appearances."
      ],
      Specialty: "Deeply personal and experimental R&B tracks.",
      imageURL: ""
    },



    {
      name: "Future",
      Genre: "Hip-Hop/Rap, Trap",
      Strengths: [
        "Pioneering influence in the trap genre.",
        "Distinctive voice and flow.",
        "Prolific output with numerous hits."
      ],
      age: 40,
      Weaknesses: [
        "Sometimes criticized for lyrical content and repetitiveness.",
        "Over-reliance on Auto-Tune."
      ],
      Specialty: "High-energy trap anthems with catchy hooks.",
      imageURL: ""
    },




    {
      name: "Kendrick Lamar",
      Genre: "Hip-Hop/Rap",
      Strengths: [
        "Exceptional lyricism and storytelling.",
        "Ability to tackle complex social and political themes.",
        "Versatile flow and delivery."
      ],
      age: 36,
      Weaknesses: [
        "Some tracks may be too dense for casual listeners.",
        "High expectations with each release can create pressure."
      ],
      Specialty: "Concept albums with deep, thought-provoking content.",
      imageURL: ""
    },



    {
      name: "Brent Faiyaz",
      Genre: "R&B",
      Strengths: [
        "Smooth, distinctive voice with emotional depth.",
        "Strong songwriting abilities.",
        "Ability to convey vulnerability and raw emotion."
      ],
      age: 28,
      Weaknesses: [
        "Less mainstream recognition compared to peers.",
        "Limited discography."
      ],
      Specialty: "Intimate, soulful R&B with introspective lyrics.",
      imageURL: ""
    },



    {
      name: "Olivia Rodrigo",
      Genre: "Pop",
      Strengths: [
        "Exceptional songwriting skills, especially for her age.",
        "Ability to connect with younger audiences.",
        "Authenticity and vulnerability in her music."
      ],
      age: 21,
      Weaknesses: [
        "Relatively new to the industry, limited discography.",
        "Potential pressure to evolve her sound beyond teenage angst."
      ],
      Specialty: "Emotional, relatable pop anthems with a rock edge.",
      imageURL: ""
    },


    {
      name: "Tate McRae",
      Genre: "Pop, R&B",
      Strengths: [
        "Impressive dance skills combined with strong vocals.",
        "Ability to write and perform catchy pop melodies.",
        "Youthful energy and charisma."
      ],
      age: 20,
      Weaknesses: [
        "Limited mainstream exposure compared to peers.",
        "Needs to further define her unique artistic identity."
      ],
      Specialty: "Infectious pop tracks with R&B influences and captivating choreography.",
      imageURL: ""
    }
  ];
  
  function generateTeamCards() {
    const teamCardsContainer = document.getElementById("teamCards");
  
    teamMembers.forEach((member) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4");
  
      let backgroundColor;
  
      switch (member.Genre.split(",")[0].trim().toLowerCase()) {
        case "neo-soul":
          backgroundColor = "teal";
          break;
        case "r&b":
          backgroundColor = "cyan";
          break;
        case "hip-hop/rap":
        case "hip-hop":
        case "rap":
          backgroundColor = "gray";
          break;
        case "pop":
        case "pop-rock":
        case "pop, pop-rock":
        case "pop, alternative":
          backgroundColor = "pink";
          break;
        default:
          backgroundColor = "gray";
      }
  
      card.innerHTML = `
        <div class="card">
          <div class="card-header">
            ${member.name}
          </div>
          <img src="${member.imageURL}" class="image-fluid">
          <div id="cardBody" class="card-body" style="background-color:${backgroundColor};">
            <p><strong>Genre:</strong> ${member.Genre}</p>
            <p><strong>Strengths:</strong> ${member.Strengths.join(", ")}</p>
            <p><strong>Age:</strong> ${member.age}</p>
            <p><strong>Weaknesses:</strong> ${member.Weaknesses.join(", ")}</p>
            <p><strong>Specialty:</strong> ${member.Specialty}</p>
          </div>
        </div>
      `;
  
      teamCardsContainer.appendChild(card);
    });
  }
  
  window.onload = generateTeamCards;
  