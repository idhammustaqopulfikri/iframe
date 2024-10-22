// Ambil tombol dan iframe
const galaxyButton = document.getElementById('galaxyButton');
const a = document.getElementById('myIframe');

// Tambahkan event listener untuk klik tombol
galaxyButton.addEventListener('click', () => {
  // Tampilkan iframe saat tombol diklik
  a.style.display = 'block';

  // Tambahkan kelas flash untuk efek klik
  galaxyButton.classList.add('flash');
});