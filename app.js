const inputs = document.querySelectorAll('.controls input');
let sizing = document.querySelector('.sizing');
function handleupdate(){
    const suffix = this.dataset.sizing || ' ';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}
inputs.forEach(input => input.addEventListener('change', handleupdate));
inputs.forEach(input => input.addEventListener('mousemove', handleupdate));
