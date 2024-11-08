const contactForm = document.getElementById('contactForm');
const contactList = document.querySelector('#contactList ul');
const searchField = document.getElementById('searchField');
const searchQuery = document.getElementById('searchQuery');
const searchBtn = document.getElementById('searchBtn');
const viewAllBtn = document.getElementById('viewAllBtn');
const deleteBtn = document.getElementById('deleteBtn'); 

function addContact(contact) {
    const li = document.createElement('li');
    li.textContent = `${contact.nombre} ${contact.apellido}`;
    contactList.appendChild(li);
}

// Función para buscar contactos
function searchContacts() {
    const searchTerm = searchQuery.value.toLowerCase();
    const field = searchField.value;

    contactList.innerHTML = ''; // Limpiar la lista existente
    deleteBtn.addEventListener('click', deleteSelectedContact); // Attach event listener after clearing list

    contacts.forEach(contact => {
        const contactData = contact[field].toLowerCase();
        if (contactData.includes(searchTerm)) {
            addContact(contact);
        }
    });
}

function deleteSelectedContact() {
    const selectedContact = contactList.querySelector('.selected');
    if (selectedContact) {
        const index = contacts.findIndex(contact => contact.nombre === selectedContact.textContent);
        if (index !== -1) {
            contacts.splice(index, 1);
            selectedContact.remove();
        }
    }
}

function viewAllContacts() {
    contactList.innerHTML = ''; // Limpiar la lista existente
    contacts.forEach(addContact);
}

contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;

    const newContact = {
        nombre,
        apellido,
    };

    contacts.push(newContact);
    addContact(newContact);

    contactForm.reset();
});

searchBtn.addEventListener('click', searchContacts);
viewAllBtn.addEventListener('click', viewAllContacts);

const contacts = [
    { nombre: "", apellido: "", email: "" },

];