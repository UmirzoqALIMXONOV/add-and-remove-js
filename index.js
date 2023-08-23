var ARR = []

function addUser() {
    var FISH = document.querySelector("#fish").value
    var MATCH = document.querySelector("#match").value
    var PAY = document.querySelector("#pay").value
    var QATOR = document.querySelector("#qator").value
    var vaqt = new Date()
    var SANA = vaqt.getDate() + "." + (vaqt.getMonth() + 1) + "." + vaqt.getFullYear()



    var obj = {
        ism: FISH,
        uchrashuv: MATCH,
        tolov: PAY,
        qator: QATOR,
        sana: SANA
    }
    if (FISH !== '' && PAY !== '') {
        ARR.push(obj)
        chizish()

    } else {
        alert("inputlarni toldiring")
    }
}


function chizish() {
    var result = ''
    n = 1

    ARR.forEach((item, index) => {
        result = result + "<tr>" +
            "<td>" + n++ + "</td>" +
            "<td>" + item.ism + "</td>" +
            "<td>" + item.uchrashuv + "</td>" +
            "<td>" + item.tolov + "</td>" +
            "<td>" + item.qator + "</td>" +
            "<td>" + item.sana + "</td>" +
            "<td>" + `<button class='btn btn-danger' onclick='deleteUser(${index})'> del</button>` + "</td>" +

            "</tr>"
    });

    document.querySelector("#display").innerHTML = result
    document.querySelector("#fish").value = ""
    document.querySelector("#pay").value = ""
}

function deleteUser(index) {
    ARR.splice(index, 1)
    chizish()
}


