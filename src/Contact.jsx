import React, { useRef, useState, useEffect } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contacts, setContacts] = useState([]);
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const tableRef = useRef();

  useEffect(() => {
    // Obtener los datos almacenados en el localStorage
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener los valores del formulario
    const newName = nameInputRef.current.value;
    const newAge = ageInputRef.current.value;

    // Crear un nuevo contacto
    const newContact = {
      id: Date.now(),
      name: newName,
      age: newAge,
    };

    // Agregar el nuevo contacto a la lista de contactos
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);

    // Almacenar los datos en el localStorage
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));

    // Limpiar los campos del formulario
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const handleEdit = (id) => {
    // Encontrar el contacto a editar por su ID
    const contactToEdit = contacts.find((contact) => contact.id === id);
    if (contactToEdit) {
      // Establecer los valores del contacto en los campos de edición
      setName(contactToEdit.name);
      setAge(contactToEdit.age);
    }
  };

  const handleUpdate = (id) => {
    // Encontrar el contacto a actualizar por su ID
    const updatedContacts = contacts.map((contact) => {
      if (contact.id === id) {
        return {
          ...contact,
          name,
          age,
        };
      }
      return contact;
    });
    setContacts(updatedContacts);

    // Almacenar los datos actualizados en el localStorage
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));

    // Limpiar los campos de edición
    setName('');
    setAge('');
  };

  const handleDelete = (id) => {
    // Filtrar los contactos y eliminar el contacto con el ID proporcionado
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);

    // Almacenar los datos actualizados en el localStorage
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <section className="contact" id="contact">
      <div className="content">
        <div className="title">
          <span>Contactame</span>
        </div>
        <div className="text">
          <div className="topic">¿Quieres Unirte?</div>
          <p>
            Si eres un amante de la velocidad, la emoción y la libertad sobre dos ruedas, te invitamos a formar parte de
            nuestra vibrante comunidad de entusiastas de las motocicletas deportivas Yamaha. Como miembro de nuestro club,
            tendrás la oportunidad de conectarte con personas apasionadas que comparten tus mismas inquietudes y pasiones.
            Podrás participar en emocionantes eventos, salidas grupales y encuentros donde podrás intercambiar experiencias,
            conocimientos y anécdotas con otros entusiastas como tú.
          </p>
          <br />
          <br />
          Simple solo tienes que enviarnos tu nombre y correo para contactarnos contigo
          <br />
          <br />
          <h2></h2>
          <h1>Dejanos tu nombre y correo</h1>
        </div>

        <form id="myForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" ref={nameInputRef} value={name} onChange={(e) => setName(e.target.value)} required />
          <label htmlFor="age">Correo:</label>
          <input type="text" id="age" name="age" ref={ageInputRef} value={age} onChange={(e) => setAge(e.target.value)} required />
          <input type="submit" value="Enviar" />
        </form>

        <table ref={tableRef}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.age}</td>
                <td>
                  <button onClick={() => handleEdit(contact.id)}>Editar</button>
                  <button onClick={() => handleDelete(contact.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Contact;





