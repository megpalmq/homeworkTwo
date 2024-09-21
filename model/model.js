const homePage = 
`<div class="home">
            <div class="hero">
                <h1>Home</h1>
            </div>
            <div class="center">
            <div class="super">
                <h3>You're my superstar✨</h3>
            
            <div class="fred"></div>
        </div>
        <div class="text">
            
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, quis id! Labore perferendis illo fugit nostrum consectetur cupiditate aut expedita vel error, suscipit iure. Repudiandae, sunt. Obcaecati quasi delectus quaerat!</p>
            <p>Dolore ratione, in sit provident molestiae deserunt veritatis molestias praesentium nisi tempora distinctio quia sed ab? Debitis molestias odio sapiente velit maxime eligendi dolores voluptatum eum! Nihil quod recusandae officiis?</p>
            <p>Illo odio iste autem iure dolores enim est libero id quia incidunt officiis sunt nam, nemo vel in fugit veritatis repellat quae placeat! Architecto eligendi id nulla, consequuntur fugit nihil.</p>
            <p>Maiores numquam quas dolor amet quisquam ea ab. Magni corrupti consequuntur ea! Itaque eaque debitis quidem, aspernatur, quas distinctio officia exercitationem molestias aut ullam ex modi, adipisci nulla numquam? Enim.</p>
        </div>
        </div>
        </div>`
const aboutPage = 
`<div class="hero2">
                <h1>About</h1>
            </div>
<div class="about-section1">
            <h2>What is Five Nights at Freddy's?</h2>
            <img src="assests/images/logo.jpg" alt="Five Nights at Freddy's Logo" class="responsive-image">
            <p>Five Nights at Freddy's (FNAF) is a survival horror video game series created by Scott Cawthon. The player takes on the role of a nighttime security guard at Freddy Fazbear's Pizza, a family-friendly restaurant featuring animatronic characters that become terrifying at night.</p>
        </div>
    <div class="about-section2">
            <h2>Game Mechanics</h2>
            <img src="assests/images/ab2.jpg" alt="FNAF Gameplay" class="responsive-image">
            <p>Players must monitor security cameras, manage limited power resources, and defend themselves against animatronics that come to life after hours. The series is known for its jump scares and intricate lore, which has captivated a large fanbase.</p>
        </div>
    <div class="about-section3">
            <h2>Impact and Community</h2>
            <img src="assests/images/gt.jpg" alt="FNAF Fan Art" class="responsive-image">
            <p>Since its release in 2014, FNAF has spawned multiple sequels, spin-offs, and a dedicated community of fans who create fan art, theories, and more. The franchise has expanded into books, merchandise, and an upcoming film adaptation.</p>
        </div>`
const gamesPage = 
`<div class="hero3">
            <h1>Games</h1>
        </div>
        
        
        <div class="game-section">
            <h2>Five Nights at Freddy's</h2>
            <img src="assests/images/fnaf1.jpg" alt="Five Nights at Freddy's" class="responsive-image">
            <p>The original game that started it all, where you must survive the night at Freddy Fazbear's Pizza.</p>
        </div>
        
        <div class="game-section">
            <h2>Five Nights at Freddy's 2</h2>
            <img src="assests/images/fnaf2.jpg" alt="Five Nights at Freddy's 2" class="responsive-image">
            <p>A prequel to the first game, introducing new animatronics and gameplay mechanics.</p>
        </div>
        
        <div class="game-section">
            <h2>Five Nights at Freddy's 3</h2>
            <img src="assests/images/fnaf3.jpg" alt="Five Nights at Freddy's 3" class="responsive-image">
            <p>Set in a horror attraction based on the events of the first two games, with a new enemy to face.</p>
        </div>
        
        <div class="game-section">
            <h2>Five Nights at Freddy's 4</h2>
            <img src="assests/images/fnaf4.jpg" alt="Five Nights at Freddy's 4" class="responsive-image">
            <p>A terrifying entry that takes place in a child's bedroom, where fear manifests into nightmarish animatronics.</p>
        </div>
        
        <div class="game-section">
            <h2>Five Nights at Freddy's: Sister Location</h2>
            <img src="assests/images/fnaf5.jpg" alt="Sister Location" class="responsive-image">
            <p>A new experience in the FNAF universe that introduces new characters and a more story-driven approach.</p>
        </div>
        
        <div class="game-section">
            <h2>Freddy Fazbear's Pizzeria Simulator</h2>
            <img src="assests/images/fnaf6.jpg" alt="Pizzeria Simulator" class="responsive-image">
            <p>A unique blend of management simulation and survival horror, where you manage your own pizzeria while facing animatronics.</p>
        </div>
        
        <div class="game-section">
            <h2>Five Nights at Freddy's: Help Wanted</h2>
            <img src="assests/images/help.jpg" alt="Help Wanted" class="responsive-image">
            <p>A VR experience that revisits classic locations and introduces new mini-games.</p>
        </div>
        
        <div class="game-section">
            <h2>Five Nights at Freddy's: Security Breach</h2>
            <img src="assests/images/security.jpg" alt="Security Breach" class="responsive-image">
            <p>The latest installment featuring an open-world environment and new gameplay mechanics in a vast mall setting.</p>
        </div>`
const contactPage= 
`<div class="hero4">
            <h1>Contact</h1>
        </div>
    <div class="contact-section">
            <h2>Get in Touch</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam similique laborum accusamus.</p>
        
            <form action="#" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
        
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
        
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
        
                <button type="submit">Send Message</button>
            </form>
        </div>`


    export function changePage(pageName){
        let pageVarName= pageName + "Page";
        $("#app").html(eval(pageVarName));
    }