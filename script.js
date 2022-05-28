function checkStudentId(val) {
    document.getElementById('studentId').value = val.replace(/\D/g, '');
}

function checkStudentName(val) {
    document.getElementById('studentName').value = val.replace(/[A-z\d]/g, '');
}



function updateMotto(val) {
    if (val !== "") {
        document.getElementById('motto').textContent = `"${val}"`
    }
    else {
        document.getElementById('motto').textContent = '"คำขวัญแสดงที่นี่"'
    }

}