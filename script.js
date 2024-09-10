function checkResult() {
    const birthdayInput = document.getElementById("birthday");
    const birthday = birthdayInput.value;

    const now = new Date().getFullYear(); //bernilai tahun saat ini secara otomatis
    const age = now - birthday;

    const resultVew = document.getElementById("resultVew");
    resultVew.innerHTML = "Usia Anda Saat ini Adalah " + age
}