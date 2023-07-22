function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("member-skills");
    var memberSkillsButton = document.getElementById("member-skills-button");
    if (memberSkills.style.display === "none") {
        memberSkills.style.display = "block";
        memberSkillsButton.innerHTML = "Hide";
    } else {
        memberSkills.style.display = "none";
        memberSkillsButton.innerHTML = "Show";
    }
}