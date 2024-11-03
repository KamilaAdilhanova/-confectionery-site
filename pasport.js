document.getElementById('translateButton').addEventListener('click', function() {
    const issuedText = document.getElementById('issued');
    const surnameText = document.getElementById('surname');
    const nameText = document.getElementById('name');
    const patronymicText = document.getElementById('father');
    const genderText = document.getElementById('gender');
    const birthplaceText = document.getElementById('birthplace');

    if (issuedText.innerText === 'МВД по республике Дагестан') {
        issuedText.innerText = 'Ministry of Internal Affairs for the Republic of Dagestan';
        surnameText.innerText = 'Adilkhanova';
        nameText.innerText = 'Camila';
        patronymicText.innerText = 'Magomednabievna';
        genderText.innerText = 'Female';
        birthplaceText.innerText = 'Makhachkala';
    } else {
        issuedText.innerText = 'МВД по республике Дагестан ';
        surnameText.innerText = 'Адильханова';
        nameText.innerText = 'Камила';
        patronymicText.innerText = 'Магомеднабиевна';
        genderText.innerText = 'Жен';
        birthplaceText.innerText = 'Махачкала';
    }
});



function openPage() {
    window.location.href = 'dom.html';
}
