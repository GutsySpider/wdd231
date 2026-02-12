function showOtherInput() {
    const reasonSelect = document.getElementById('reason');
    const otherDescriptionContainer = document.getElementById('other-description-container');

    if (reasonSelect.value === 'other') {
        otherDescriptionContainer.style.display = 'block';
    } else {
        otherDescriptionContainer.style.display = 'none';
        document.getElementById('other-description').value = '';
    }
}