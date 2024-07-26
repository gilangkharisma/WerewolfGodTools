function generateInput() {
    // Mendapatkan elemen select dan output
    const outputDiv = document.getElementById('outputPemain');
    const peran = ["Seer", "Sorserer", "Villager", "Bodyguard", "Prince", "Werewolf"]
    const jumPeran = peran.length;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const yangDilik = Array.from(checkboxes).map(checkbox => checkbox.value);
    

    // Menghapus div yang ada di outputDiv
    outputDiv.innerHTML = '';

    // Mendapatkan semua pilihan yang dipilih
    // playerSelect.selectedOptions;
    const nPemain = yangDilik.length;

    //tempat naruh no index yang sudah digunakan
    const bilAcakbaru = [];
    
    //membuat pengacakan
    function getRandomInt(banyak) {
        let bil;
            do {
                let gil = Math.floor(Math.random() * (banyak));
                bil = gil;
            } while (bilAcakbaru.includes(bil));
            bilAcakbaru.push(bil);
        return bil;
    }

    let playerCount = 1;
    // Melooping melalui setiap pilihan yang dipilih
    for (const value of yangDilik) {
      
      // Membuat div baru
      const newDiv = document.createElement('div');
      newDiv.id = `pemain-${playerCount}`;
      // Membuat elemen checkbox dan menambahkan ke div
    
      const bilanganAcak = getRandomInt(jumPeran); // Menghasilkan bilangan bulat acak antara 5 (inklusif) dan 10 (eksklusif)

      // Menambahkan teks ke div baru
      newDiv.textContent = `${value} as ${peran[bilanganAcak]}`;
  
      // Menambahkan div baru ke outputDiv
      outputDiv.appendChild(newDiv);
      console.log(outputDiv.appendChild(newDiv)); 
      playerCount++;   
    }
    document.getElementById('mulai').addEventListener('click', () => {
        startTimer(nPemain);
      });
    
}

function updatePemain(){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const yangDilik = Array.from(checkboxes).map(checkbox => checkbox.value);
    const nPemain = yangDilik.length;
    console.log(nPemain)

    document.getElementById('mulai').addEventListener('click', () => {
        startTimer(nPemain);
    });
}

let intervalid;
//timer
function startTimer(nPemain) {
    clearInterval(intervalid);
    const duration = nPemain * 45; 
    console.log(duration);
    let timer = duration;
    const display = document.getElementById('timer');
  
    intervalid = setInterval(() => {
      const audio = document.getElementById("myAudio");
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
      display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  
      if (--timer < 0) {
        clearInterval(intervalid);
        audio.play();
      }
    }, 1000);
}


