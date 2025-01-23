document.addEventListener('DOMContentLoaded', function() {
    const btnPresentation = document.getElementById('btnPresentation');
    const btnLangues = document.getElementById('btnLangues');
    const btnSoftSkills = document.getElementById('btnSoftSkills');
    const btnHobbies = document.getElementById('btnHobbies');

    const txtContent = document.querySelector('.presentationTxt');
    const imgContent = document.querySelector('.idPicture');

    const content = {
        presentation: {
            text: "Étudiant en Bachelor RPI (Responsable de Projet Informatique) à l'école Isitech : je travaille actuellement chez Kodo Tech en tant que développeur full-stack junior. Cette formation alterne entre 3 semaines en entreprise et 1 semaine à l'école, et dure 3 ans.",
            image: "img/idPicture.jpg"
        },
        langues: {
            text: "J'ai obtenu une certification en langue anglaise de niveau B2 et en espagnol de niveau A2.",
            image: "img/langues.png"
        },
        softSkills: {
            text: "Mes principales compétences générales sont la rigueur, la capacité d'apprendre et le travail en équipe.",
            image: "img/softSkillsPicture.jpg"
        },
        hobbies: {
            text: "En hiver, je pratique le speedriding : c'est un mélange de vol rapide et de ski. Pendant le reste de l'année, je suis pilote de speedflying : c'est comme du parapente, mais avec des ailes 2 fois plus petites et donc 2 fois plus rapides.",
            image: "img/speedriding.jpg"
        }
    };

    function changeContent(section) {
        txtContent.textContent = content[section].text;
        imgContent.src = content[section].image;
        imgContent.alt = content[section].text;
    }

    btnPresentation.addEventListener('click', function() {
        changeContent('presentation');
    });

    btnLangues.addEventListener('click', function() {
        changeContent('langues');
    });

    btnSoftSkills.addEventListener('click', function() {
        changeContent('softSkills');
    });

    btnHobbies.addEventListener('click', function() {
        changeContent('hobbies');
    });
});