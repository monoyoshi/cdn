// age calculator
function ageCalc(inputDOB) {
    var dob = new Date(inputDOB);
    var today = new Date();

    var age = today.getFullYear() - dob.getFullYear();

    if (today.getMonth() < dob.getMonth() || (today.getMonth() == dob.getMonth() && today.getDate() < dob.getDate())) age--;

    return age;
};