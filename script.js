function generateInput() {
    // Mendapatkan elemen select dan output
    const outputDiv = document.getElementById('outputPemain');
    const outPemain = document.getElementById('outPemain')
    const checkboxes1 = document.querySelectorAll('input[type="checkbox"][class="masuk"]:checked');
    const checkboxes0 = document.querySelectorAll('input[type="checkbox"][class="masuk0"]:checked');
    const yangDilik1 = Array.from(checkboxes1).map(checkbox => checkbox.value);
    const yangDilik0 = Array.from(checkboxes0).map(checkbox => checkbox.value);
    const jumPeran = yangDilik0.length;
    

    // Menghapus div yang ada di outputDiv
    outputDiv.innerHTML = '';
    outPemain.innerHTML = '<input type="checkbox>"';


    // Mendapatkan semua pilihan yang dipilih
    const nPemain = yangDilik1.length;

    //tempat naruh no index yang sudah digunakan
    const bilAcakbaru = [];

    //tempat naruh data peran dan pemain baru
    let pemainBertahan = [];
    console.log(pemainBertahan);
    
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
    for (const value of yangDilik1) {
      // const valueLength = value.length;
      if (nPemain != jumPeran) {
        console.log("error bro");
        alert("harus sesuai bro");
      } else {
        // Membuat div baru
      const newDiv = document.createElement('div');
      const newDiv2 = document.createElement('input');
      
      newDiv.id = `pemain-${playerCount}`;
      // Membuat elemen checkbox dan menambahkan ke div
    
      const bilanganAcak = getRandomInt(jumPeran); // Menghasilkan bilangan bulat acak antara 5 (inklusif) dan 10 (eksklusif)

      // Menambahkan teks ke div baru
      newDiv2.setAttribute('type','checkbox');
      newDiv2.setAttribute('class','cekheh');
      newDiv2.setAttribute('checked','0');
      newDiv.textContent = `${value} as ${yangDilik0[bilanganAcak]}`;


      const pemBertahan = newDiv.textContent;
      pemainBertahan.push(pemBertahan);
  
      // Menambahkan div baru ke outputDiv
      outPemain.appendChild(newDiv2);
      outputDiv.appendChild(newDiv);
      console.log(outputDiv.appendChild(newDiv)); 
      playerCount++;   
      }
      
    }
    document.getElementById('mulai').addEventListener('click', () => {
        startTimer(nPemain);
      });
    document.getElementById('upPemain').addEventListener('click', () => {
      updatePemain(pemainBertahan);
    })
    
}

// Update pemain
function updatePemain(pemainBertahan){
    const outputDiv = document.getElementById('outputUpdatePemain');

    // Menghapus div yang ada di outputDiv
    outputDiv.innerHTML = '';

    const nPemain = pemainBertahan.length;
    console.log(nPemain)

    for (const value of pemainBertahan) {
      
      // Membuat div baru
      const newDiv = document.createElement('div');
      // Membuat elemen checkbox dan menambahkan ke div

      // Menambahkan teks ke div baru
      newDiv.textContent = `${value}`;
  
      // Menambahkan div baru ke outputDiv
      outputDiv.appendChild(newDiv);
      console.log(outputDiv.appendChild(newDiv)); 
    }

    document.getElementById('mulai').addEventListener('click', () => {
        startTimer(nPemain);
    });
}

// Timer
let intervalid;

function startTimer(nPemain) {
    clearInterval(intervalid);
    const duration = 45;
    // // const duration = nPemain * 45; 
    // console.log(duration);
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

//audio pagi malam
const audioPagi = document.getElementById("audioPagi");
const audioMalam = document.getElementById("audioMalam");
const pagi = document.getElementById("pagi");
const malam = document.getElementById("malam"); // Added malam button reference
const pauseButton = document.getElementById("pause");

// Event listeners for both buttons
pagi.addEventListener("click", function() {
  audioPagi.play();
  audioMalam.pause(); // Pause malam audio if playing
});

malam.addEventListener("click", function() {
  audioMalam.play();
  audioPagi.pause(); // Pause pagi audio if playing
});

pauseButton.addEventListener("click", () => {
  audioPagi.pause();
  audioMalam.pause();
});




// Daftar nama Kehidupan Pemain
const nama = ["Andri", "Ovin", "Asnan", "Sani", "Zulfan","Zikri","Andi","Eja","Elong","Jian","Adit","Gilang","Eca","Holis"];

//Penambahan nama
const namaInput = document.getElementById("inputNama");
const buttonNama = document.getElementById("buttonNama");
buttonNama.addEventListener("click", () => {
  const nilaiNama = namaInput.value;
  nama.push(nilaiNama);

  // Panggil fungsi createCheckbox untuk membuat checkbox baru
  const newCheckbox = createCheckbox(nilaiNama);
  container.appendChild(newCheckbox);

  console.log(nilaiNama);
});


// Elemen div untuk menampung checkbox
const container = document.querySelector('.inputan');

// Fungsi untuk membuat elemen checkbox dan label
function createCheckbox(nama) {
  const checkbox = document.createElement('input');
  checkbox.classList.add('masuk');
  checkbox.type = 'checkbox';
  checkbox.id = nama;
  checkbox.value = nama;

  const label = document.createElement('label');
  label.classList.add('custom-checkbox');
  label.htmlFor = nama;
  label.textContent = nama;

  const div = document.createElement('div');
  div.classList.add('hm');
  div.appendChild(checkbox);
  div.appendChild(label);
  return div;
}

// Loop untuk membuat checkbox untuk setiap nama
nama.forEach(nama => {
  const checkboxDiv = createCheckbox(nama);
  container.appendChild(checkboxDiv);
});

// Daftar Nama Lore
const peran = ["Seer", "Sorcerer", "Villager", "Bodyguard", "Prince", "Werewolf","Lone Wolf","Tough Guy","Mayor","Hunter","Cursed","Ghost","Minion","Tanner","Lycan","Drunk","Fruit Brute","Diseased"];

//Penambahan lore
const loreInput = document.getElementById("inputLore");
const buttonLore = document.getElementById("buttonLore");
buttonLore.addEventListener("click", () => {
  const nilaiLore = loreInput.value;
  peran.push(nilaiLore);

  // Panggil fungsi createCheckbox untuk membuat checkbox baru
  const newCheckbox0 = createCheckbox0(nilaiLore);
  containerP.appendChild(newCheckbox0);

});

const containerP = document.querySelector('.lore');

function createCheckbox0(peran) {
  const checkbox = document.createElement('input');
  checkbox.classList.add('masuk0');
  checkbox.type = 'checkbox';
  checkbox.id = peran;
  checkbox.value = peran;

  const label = document.createElement('label');
  label.classList.add('custom-checkbox0');
  label.htmlFor = peran;
  label.textContent = peran;

  const div = document.createElement('div');
  div.classList.add('hm');
  div.appendChild(checkbox);
  div.appendChild(label);
  return div;
}

// Loop untuk membuat checkbox untuk setiap nama
peran.forEach(peran => {
  const checkboxDiv = createCheckbox0(peran);
  containerP.appendChild(checkboxDiv);
});

