function addRecommendation() {
    const newRec = document.getElementById('new-recommendation').value;
    if (newRec) {
        const recommendationList = document.querySelector('.recommendations-list');
        const newDiv = document.createElement('div');
        newDiv.classList.add('recommendation');
        newDiv.innerHTML = `<p>${newRec}</p>`;
        recommendationList.appendChild(newDiv);
        document.getElementById('new-recommendation').value = '';
        
        // Mostrar el pop-up
        document.getElementById('confirmation-popup').style.display = 'block';
        setTimeout(() => {
            document.getElementById('confirmation-popup').style.display = 'none';
        }, 2000);
    }
}
