// Obtener elementos
const modal = document.getElementById('bookModal');
const closeModalButton = document.getElementById('closeModal');

// Función para abrir el modal con el resumen del libro
function openModal(title, summary) {
    document.getElementById('bookTitle').textContent = title;
    document.getElementById('bookSummary').textContent = summary;
    modal.style.display = 'block';
}

// Función para cerrar el modal
closeModalButton.onclick = function() {
    modal.style.display = 'none';
};

// Cerrar el modal si se hace clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
