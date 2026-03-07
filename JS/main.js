
const checkShow1 = document.getElementById('checkShow1');
const show1 = document.getElementById('show1');

checkShow1.addEventListener('change', function() {
    if (this.checked) {
        show1.classList.remove('d-none');
        show1.classList.add('d-block');
    } else {
        show1.classList.add('d-none');
        show1.classList.remove('d-block');
    }
});

const checkShow2 = document.getElementById('checkShow2');
const show2 = document.getElementById('show2');

checkShow2.addEventListener('change', function() {
    if (this.checked) {
        show2.classList.remove('d-none');
        show2.classList.add('d-block');
    } else {
        show2.classList.add('d-none');
        show2.classList.remove('d-block');
    }
});