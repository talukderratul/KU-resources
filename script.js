const resources = [
{
    subject:"Calculus",
    semester:"1st Year",
    link:"pdfs/calculus.pdf"
},
{
    subject:"Physics",
    semester:"1st Year",
    link:"pdfs/physics_note.pdf"
},
{
    subject:"Discrete Mathematics",
    semester:"1st Year",
    link:"pdfs/discrete_mathematics_note.pdf"
},
{
    subject:"English",
    semester:"1st Year",
    link:"pdfs/english_note.pdf"
},
{
    subject:"Structured Programming",
    semester:"1st Year",
    link:"pdfs/structured_note.pdf"
},
{
    subject:"Computer Fundamentals",
    semester:"1st Year",
    link:"pdfs/computer_fundamentals_note.pdf"
}
];

const container =
document.getElementById("resourceContainer");

function displayResources(data){

    container.innerHTML = "";

    data.forEach(item => {

        container.innerHTML += `
        <div class="card">
            <h3>${item.subject}</h3>
            <p>${item.semester}</p>
            <a href="${item.link}">
                View Resources
            </a>
        </div>
        `;
    });
}

displayResources(resources);

document
.getElementById("searchBox")
.addEventListener("keyup", function(){

    const value =
    this.value.toLowerCase();

    const filtered =
    resources.filter(item =>
        item.subject
        .toLowerCase()
        .includes(value)
    );

    displayResources(filtered);
});
