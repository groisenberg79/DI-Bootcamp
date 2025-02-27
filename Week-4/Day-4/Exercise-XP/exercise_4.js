const form = document.querySelector('form');
form.addEventListener('submit', calculateVolume);

function calculateVolume(e){
    e.preventDefault();
    const radius = document.getElementById('radius').value;
    if (radius.length > 0 && !isNaN(parseFloat(radius))){
        let vol = (4/3)*Math.PI*Number(radius)**3;
        let volumeField = document.getElementById('volume');
        volumeField.value = vol;
    }
}