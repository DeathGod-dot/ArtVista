// Sample artwork data
const artworks = [
    {
        id: 1,
        title: "The Starry Night",
        artist: "Vincent van Gogh",
        category: "paintings",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        description: "Created in June 1889, this post-impressionist painting depicts the view from the east-facing window of Van Gogh's asylum room at Saint-Rémy-de-Provence, with the addition of an idealized village. It is regarded as among Van Gogh's finest works and is one of the most recognized paintings in Western culture."
    },
    {
        id: 2,
        title: "The Persistence of Memory",
        artist: "Salvador Dalí",
        category: "paintings",
        image: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
        description: "Painted in 1931, this surrealist masterpiece features soft, melting pocket watches draped over a barren landscape. The painting explores concepts of time, decay, and the relativity of space and time."
    },
    {
        id: 3,
        title: "The Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        category: "paintings",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
        description: "Created around 1665, this painting is one of Vermeer's most famous works. The girl's exotic dress, oriental turban, and large pearl earring have led many to wonder about her identity and the story behind the painting."
    },
    {
        id: 4,
        title: "The Thinker",
        artist: "Auguste Rodin",
        category: "sculptures",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/The_Thinker%2C_Rodin.jpg/800px-The_Thinker%2C_Rodin.jpg",
        description: "Originally conceived as part of Rodin's larger work The Gates of Hell, The Thinker has become one of the most recognized sculptures in the world. It depicts a nude male figure in deep contemplation."
    },
    {
        id: 5,
        title: "Migrant Mother",
        artist: "Dorothea Lange",
        category: "photography",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Lange-MigrantMother02.jpg/800px-Lange-MigrantMother02.jpg",
        description: "Taken in 1936, this photograph became the defining image of the Great Depression. It depicts Florence Owens Thompson, a struggling mother of seven children, and captures the hardship and uncertainty of the era."
    },
    {
        id: 6,
        title: "The Birth of Venus",
        artist: "Sandro Botticelli",
        category: "paintings",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/2560px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
        description: "Painted in the mid-1480s, this iconic Renaissance masterpiece depicts the goddess Venus arriving at shore after her birth. It represents one of the most famous paintings of the Italian Renaissance, combining Christian and Neo-platonic elements."
    },
    {
        id: 8,
        title: "One Piece",
        artist: "Eiichiro Oda",
        category: "paintings",
        image: "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
        description: "From the world's best-selling manga series, this artwork shows Oda's distinctive style that has captured readers' imaginations for over two decades. Known for its vibrant characters and dynamic action scenes."
    },
    {
        id: 8,
        title: "The Great Wave off Kanagawa",
        artist: "Katsushika Hokusai",
        category: "paintings",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/2560px-Tsunami_by_hokusai_19th_century.jpg",
        description: "Created between 1829-1833, this woodblock print is one of the most recognized works of Japanese art. The wave towers over Mount Fuji in the background, showing the power of nature against man's endeavors."
    },
    {
        id: 9,
        title: "The Kiss",
        artist: "Gustav Klimt",
        category: "paintings",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/800px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
        description: "Painted between 1907-1908, this iconic work of the Art Nouveau period depicts a couple embracing, their bodies entwined in elaborate golden robes. It represents the height of Klimt's 'Golden Period.'"
    },
    {
        id: 10,
        title: "Venus de Milo",
        artist: "Alexandros of Antioch",
        category: "sculptures",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Venus_de_Milo_Louvre_Ma399_n4.jpg/1200px-Venus_de_Milo_Louvre_Ma399_n4.jpg",
        description: "Created sometime between 130 and 100 BCE, the Venus de Milo is one of the most famous examples of ancient Greek sculpture. The statue is believed to depict Aphrodite, the Greek goddess of love and beauty."
    },
    {
        id: 11,
        title: "Afghan Girl",
        artist: "Steve McCurry",
        category: "photography",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Sharbat_Gula.jpg/1200px-Sharbat_Gula.jpg",
        description: "Taken in 1984 and published in National Geographic magazine, this photograph has become one of the most recognized photographs in the world. It depicts Sharbat Gula, an Afghan girl with striking green eyes in a refugee camp."
    },
    {
        id: 12,
        title: "The Scream",
        artist: "Edvard Munch",
        category: "paintings",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
        description: "Created in 1893, this expressionist painting depicts an agonized figure against a landscape with a tumultuous orange sky. It symbolizes the existential anxiety of the modern world."
    }
];

// Function to create artwork cards
function createArtworkCard(artwork) {
    const card = document.createElement('div');
    card.className = 'artwork-card';
    card.dataset.category = artwork.category;
    
    card.innerHTML = `
        <img src="${artwork.image}" alt="${artwork.title}" class="artwork-image">
        <div class="artwork-info">
            <h3>${artwork.title}</h3>
            <p>${artwork.artist}</p>
        </div>
    `;

    card.addEventListener('click', () => showModal(artwork));
    return card;
}

// Function to display artworks
function displayArtworks(category = 'all') {
    const gallery = document.querySelector('.gallery-container');
    gallery.innerHTML = '';
    
    const filteredArtworks = category === 'all' 
        ? artworks 
        : artworks.filter(art => art.category === category);
    
    filteredArtworks.forEach(artwork => {
        gallery.appendChild(createArtworkCard(artwork));
    });
}

// Modal functionality
function showModal(artwork) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalArtist = document.getElementById('modal-artist');
    const modalDescription = document.getElementById('modal-description');

    modalImage.src = artwork.image;
    modalTitle.textContent = artwork.title;
    modalArtist.textContent = `Artist: ${artwork.artist}`;
    modalDescription.textContent = artwork.description;

    modal.style.display = 'block';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    displayArtworks();

    // Navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            displayArtworks(e.target.dataset.category);
        });
    });

    // Close modal
    const closeBtn = document.querySelector('.close-btn');
    const modal = document.getElementById('modal');

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Mobile Menu Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Active Navigation Highlight
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight/3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(li => {
            li.classList.remove('active');
            if (li.querySelector('a').getAttribute('href') === `#${current}`) {
                li.classList.add('active');
            }
        });
    });
}); 