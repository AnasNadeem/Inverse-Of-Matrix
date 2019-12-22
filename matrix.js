let getInverse = document.getElementById('getInverse');
getInverse.addEventListener('click', getInverseHandler);

function getInverseHandler() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let d = document.getElementById('d').value;
    let aMatrix = document.getElementById('aMatrix');
    let bMatrix = document.getElementById('bMatrix');
    let cMatrix = document.getElementById('cMatrix');
    let dMatrix = document.getElementById('dMatrix');
    let errMessage = document.getElementById('errMessage');
    let succMsg = document.getElementById('succMsg');
    if (a && b && c && d != null) {
        if (a * d != b * c) {
            if (a < 0 || b < 0 || c < 0 || d < 0) {
                if (a * d > b * c) {
                    aMatrix.innerText = d + '/' + ((a * d) - (c * b));
                    bMatrix.innerText = -b + '/' + ((a * d) - (c * b));
                    cMatrix.innerText = -c + '/' + ((a * d) - (c * b));
                    dMatrix.innerText = a + '/' + ((a * d) - (c * b));
                } else if (a * d < b * c) {
                    aMatrix.innerText = -d + '/' + ((a * d) - (c * b));
                    bMatrix.innerText = b + '/' + ((a * d) - (c * b));
                    cMatrix.innerText = c + '/' + ((a * d) - (c * b));
                    dMatrix.innerText = -a + '/' + ((a * d) - (c * b));
                }
               
            } else {
                if (a * d > b * c) {
                    aMatrix.innerText = d;
                    bMatrix.innerText = -b;
                    cMatrix.innerText = -c;
                    dMatrix.innerText = a;
                } else if (a * d < b * c) {
                    aMatrix.innerText = -d;
                    bMatrix.innerText = b;
                    cMatrix.innerText = c;
                    dMatrix.innerText = -a;
                }
            }
            succMsg.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success:</strong> Your inverse is given below:
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
            </button>
        </div>`;
        } else {
            errMessage.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Oops:</strong> Your inverse didn't exist
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
            </button>
        </div>`;
        }
    } else {
        errMessage.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error:</strong> You must write something
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
    </div>`;
    }
}