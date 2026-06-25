const resources = [
{
    subject:"Calculus",
    semester:"1st Year",
    link:"#"
},
{
    subject:"Physics",
    semester:"1st Year",
    link:"#"
},
{
    subject:"Discrete Mathematics",
    semester:"1st Year",
    link:"#"
},
{
    subject:"English",
    semester:"1st Year",
    link:"#"
},
{
    subject:"Structured Programming",
    semester:"1st Year",
    link:"#"
},
{
    subject:"Computer Fundamentals",
    semester:"1st Year",
    link:"#"
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
