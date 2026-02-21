// Maneja el envío del formulario (simulado)
document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', (e)=>{
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    if(!name || !email || !message){
      e.preventDefault();
      status.textContent = 'Por favor completa todos los campos.';
      status.style.color = 'crimson';
      return;
    }

    // Mostrar estado y permitir envío al servidor (submit.php)
    status.textContent = 'Enviando mensaje...';
    status.style.color = '';
  });

  // Previsualizar PDF localmente si el usuario sube uno
  const pdfInput = document.getElementById('pdfUpload');
  const pdfFrame = document.getElementById('pdfFrame');
  const pdfDownload = document.getElementById('pdfDownload');

  pdfInput.addEventListener('change', (e)=>{
    const file = e.target.files[0];
    if(!file) return;
    if(file.type !== 'application/pdf'){
      alert('Por favor selecciona un archivo PDF.');
      return;
    }
    const url = URL.createObjectURL(file);
    pdfFrame.src = url;
    pdfDownload.href = url;
    pdfDownload.removeAttribute('download');
  });
});
