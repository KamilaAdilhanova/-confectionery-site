document.getElementById('translateButton').addEventListener('click', function() {
    const issuedText = document.getElementById('issued');
    const surnameText = document.getElementById('surname');
    const nameText = document.getElementById('name');
    const patronymicText = document.getElementById('father');
    const genderText = document.getElementById('gender');
    const birthplaceText = document.getElementById('birthplace');
    const dateofissue = document.getElementById('dateofissue');

    if (issuedText.innerText === 'МВД по республике Дагестан') {
        issuedText.innerText = 'Ministry of Internal Affairs for the Republic of Dagestan';
        surnameText.innerText = 'Adilkhanova';
        nameText.innerText = 'Camila';
        patronymicText.innerText = 'Magomednabievna';
        genderText.innerText = 'Female';
        birthplaceText.innerText = 'Makhachkala';
        dateofissueText.innerText = '19.08.2024';
    } else {
        issuedText.innerText = 'МВД по республике Дагестан ';
        surnameText.innerText = 'Адильханова';
        nameText.innerText = 'Камила';
        patronymicText.innerText = 'Магомеднабиевна';
        genderText.innerText = 'Жен';
        birthplaceText.innerText = 'Махачкала';
        dateofissueText.innerText = '19.08.2024';
    }
});



function openPage() {
    window.location.href = 'dom.html';
}
