
    var data = {
        A: ['Aadya Life Sciences',
            'Aaranyaa',
            'Absolute New York',
            'ACM',
            'Acnelak',
            'Acnes',
            'Acure',
            'Adidas',
            'Adore',
            'Adroit Biomed',
            'AE Naturals',
            'Aegte',
            'Affinage',
            'Ahava',
            'Alembic',
            'Algorace',
            'Alkem',
            'Allens',
            ' Allin Exporters',
            'Almay',
            ' Aloe Veda',
            'Alpecin',
            'Amaira',
            ' Amara Organics',
            'AmbiPur',
            'AMOREPACIFIC',
            'Amrutanjan',
            'Amway',
            'Anastasia Beverly Hills',
            ' Ancient Living'],
        B: ['B Glow',
            'Babyganics',
            'BAEBROW',
            'Baidyanath',
            'Bajaj',
            'Bakson',
            'Banana Boat',
            'Banila Co.',
            'Banjara-s',
            'Bareminerals',
            'Barever',
            'Barva',
            'Batiste',
            'Bblunt',
            'Be The Skin',
            'Beardhood',
            'Beardo',
            'Beautiful Textures',
            'Becca Cosmetics',
            'Bella Vita Organic',
            'Bella Voste',
            'Bellissa',
            'Belo',
            'Benefit',
            'Berina',
            'BeYu',
            'Bharat & Dorris',
            'Bigen',
            'Biluma',
            'Bingyu',
            'Bio Oil',
            'Bioaqua',
            'Biobloom',
            'Bioderma',
            'Biopelle',
            'Biore',
            'Biossance',
            'Biotique',
            'Bipha Ayurveda',
            'Black Rose',
            'Bliss',
            'Bliss of Earth',
            'Blue Heaven',
            'Bobbi Brown',
            'Body Cupid',
            'Body Merry',
            'Boots',
            'Boroline',
            'Botanica',
            'Botanics',
            'Boucheron',
            'Bourjois',
            'Bragg',
            'Brillare Science',
            'Brinton',
            'Brocato',
            'Bryan & Candy New York',
            'BSY',
            'Burberry',
            'Burt-s Bees'],
        C: ['Caboki',
            'Cadila',
            'Calvin Klein',
            'Camille Rose',
            'Cantharidine',
            'Carmex',
            'Carolina Herrera',
            'Cartier',
            'Casmara',
            'Caudalie',
            'Cauvery',
            'CavinKare',
            'Cenizas',
            'Cerave',
            'Cetaphil',
            'Cezanne',
            'Chambor',
            'Chandini',
            'Chandrika',
            'Chanel',
            'Charles Worthington',
            'Charlotte Tilbury',
            'Charm And Glow',
            'Charmis',
            'Cheryl-s',
            'Chicnutrix',
            'Chik',
            'China Glaze',
            'Chloe',
            'Ciate',
            'Cipla',
            'Citra',
            'Clairol',
            'Clamy',
            'Clarins',
            'Classic White',
            'Cle de Peau Beaute',
            'Clean & Clear',
            'Clean & Dry',
            'Clear',
            'Clearasil',
            'Clinic Plus',
            'Clinique',
            'Clorox',
            'Coach',
            'Colgate',
            'Color Mate',
            'Color Wow',
            'Colorbar',
            'Coloressence',
            'ColourPop',
            'Commodity Rain',
            'CONTEXT',
            'Corioliss',
            'Cosrx',
            'Cover FX',
            'Covergirl',
            'Crazy Color',
            'Crème 21',
            'Curatio',
            'Cure'],
        D: ['D-Free',
            'Dabur',
            'Dafni',
            'Dalan',
            'Davidoff',
            'De Fabulous',
            'Debelle',
            'Deborah Lippmann',
            'Deborah Milano',
            'Deemark',
            'Delon',
            'Denver',
            'Derma E',
            'Derma Essentia',
            'Dermablend',
            'Dermacol',
            'Dermafique',
            'Dermalogica',
            'Dermi Cool',
            'Desert Essence',
            'Dettol',
            'Dexe',
            'Dhathri',
            'DHC',
            'Diana Of London',
            'Differin',
            'Dior',
            'Dolce & Gabbana',
            'Dose of Colors',
            'Dot & Key',
            'Dove',
            'Dr Batra-s',
            'Dr. Dennis Gross',
            'Dr. Jain’s',
            'Dr. Jart+',
            'Dr. Ortho',
            'Dr. Reddy-s',
            'Dr. Sheth-s',
            'Dr.G',
            'Drunk Elephant']
    }

    let container = document.getElementById("container")
    let x = document.querySelectorAll("button");
    x.forEach(function (x) {
        x.addEventListener("click", (e) => {
            e.preventDefault()
            container.innerHTML = null;
            let k = x.id
            let y = data[k];
            y.forEach(function (e) {
                let div = document.createElement("div");
                let p = document.createElement("p");
                p.style.lineHeight="21.7px";
                p.innerText = e;
                div.append(p)
                container.append(div)
            })
        })
    })
   let y = document.getElementById("viewall");
y.addEventListener("click",()=> {
    window.location.href="./viewall.html"
})
