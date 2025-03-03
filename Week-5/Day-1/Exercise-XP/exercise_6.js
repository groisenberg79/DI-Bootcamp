(function(number_of_children, partner_name, location, job_title){
    const p = document.createElement('p');
    const textNode = document.createTextNode(`You will be ${job_title} in ${location}, and married to ${partner_name} with ${number_of_children} kids.`)
    p.appendChild(textNode);
    const body = document.querySelector('body');
    body.appendChild(p);
})(3, 'Maria', 'Tijuana', 'carpenter');