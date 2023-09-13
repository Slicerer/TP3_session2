const formValidation = () => {
    const nom = document.getElementById("nom");
    const prenom = document.getElementById("prenom");
    const age = document.getElementById("age");
    const sexe = document.getElementById("sexe");
    const ville = document.getElementById("ville");
    const email = document.getElementById("email");
    const motivation = document.getElementById("motivation");

    const nomValue = nom.value.trim();
    const prenomValue = prenom.value.trim();
    const ageValue = age.value.trim();
    const sexeValue = sexe.value;
    const villeValue = ville.value.trim();
    const emailValue = email.value.trim();
    const motivationValue = motivation.value.trim();

    let noError = true;

    if (nomValue === "") {
        setError(nom, "Vous devez entrer votre nom !");
        noError = false;
    } else if (/^\d+$/.test(nomValue)) {
        setError(nom, "Votre nom doit être composé de lettres de l'alphabet svp !");
        noError = false;
    } else {
        setSuccess(nom);
    }

    if (prenomValue === "") {
        setError(prenom, "Vous devez entrer votre prénom !");
        noError = false;
    } else if (/^\d+$/.test(prenomValue)) {
        setError(prenom, "Votre prénom doit être composé de lettres de l'alphabet svp !");
        noError = false;
    } else {
        setSuccess(prenom);
    }

    if (ageValue === "") {
        setError(age, "Vous devez entrer votre âge !");
        noError = false;
    } else if (isNaN(ageValue) || parseInt(ageValue) < 0) {
        setError(age, "L'âge doit être un nombre positif !");
        noError = false;
    } else {
        setSuccess(age);
    }

    if (sexeValue === "") {
        setError(sexe, "Vous devez sélectionner votre sexe !");
        noError = false;
    } else {
        setSuccess(sexe);
    }

    if (villeValue === "") {
        setError(ville, "Vous devez entrer votre ville !");
        noError = false;
    } else {
        setSuccess(ville);
    }

    if (emailValue === "") {
        setError(email, "Vous devez entrer votre adresse e-mail !");
        noError = false;
    } else if (!validateEmail(emailValue)) {
        setError(email, "Entrez une adresse e-mail valide !");
        noError = false;
    } else {
        setSuccess(email);
    }

    if (motivationValue === "") {
        setError(motivation, "Écrivez votre lettre de motivation !");
        noError = false;
    } else {
        setSuccess(motivation);
    }

    console.log(noError);
    return noError;
};

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorMessage = inputControl.querySelector(".errorMessage");

    errorMessage.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorMessage = inputControl.querySelector(".errorMessage");

    errorMessage.innerText = "";
    inputControl.classList.remove("error");
    inputControl.classList.add("success");
};




