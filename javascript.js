document.addEventListener('DOMContentLoaded', function() {
    const btnPesan = document.querySelectorAll('.btn-pesan');
    const nomorWA = '628123456789'; // Ganti dengan nomor Anda (tanpa +)

    btnPesan.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Ambil tipe karangan bunga dari data-tipe
            const tipeBunga = this.getAttribute('data-tipe');
            
            // Buat teks pesan WhatsApp
            const pesan = `Halo, saya tertarik untuk memesan *${tipeBunga}*. Bisakah saya mendapatkan informasi lebih lanjut mengenai harga dan desain? Terima kasih.`;
            
            // Encode pesan untuk URL
            const pesanEncoded = encodeURIComponent(pesan);
            
            // Buat URL WhatsApp
            const urlWA = `https://wa.me/${nomorWA}?text=${pesanEncoded}`;
            
            // Buka tab baru
            window.open(urlWA, '_blank');
        });
    });
});