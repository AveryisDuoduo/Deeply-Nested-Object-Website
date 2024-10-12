const data = {
    "title": "Avery as Systems",
    "artist": "Avery (Duoduo Liu)",
    "yearCreated": 2024,
    "class": "Core Studio System",
    "medium": "HTML, CSS, JavaScript",
    "dimensions": {
        "width": 1920,
        "height": 1080,
        "unit": "pixels"
    },
    "themes": ["Language", "Glitch-Art", "Errors", "Concrete-Poetry"],
    "inspiration": "Error codes and connection between generating codes and translation.",
    "location": "New York City, ShenZhen",
    "description": "Explore the world of codes and language translation.",
    "image": "screenshot.png", 

    "intro": {
        "name": "Start",
        "text": "This work expresses the process of transmission errors by visualizing language translation errors or missing meaning data. Through the process of integrating data transmission/language translation, I record the changes in my thoughts when switching between two languages every day.",
        "shape": "PicShape",
        "size": "Big",
        "area": "top",
        "image": "intro.png",
        medium: {
            isDigital: true,
            isFinal: false,
            isWorking: false
        },
    },
    "inspirationDetails": {
        "name": "Data thing",
        "text": "For this project, I downloaded my school email data. This data contains so much content that the process of opening the file often crashes my computer. Then while browsing the data, I discovered that the data contained many lengthy error codes. I was thinking, why is this? Possible reasons:The way Google Mail sends data is incompatible with the way I open the data, causing code errors.The email data is too large, causing transmission errors.",
        "shape": "Rectangular",
        medium: {
            isDigital: true,
            isFinal: false,
            isWorking: false
        },
        "size": "Medium",
        "area": "center",
        "story": "Inspired by glitch art and translation errors",
        "chapterImage": "sketch.png"
    },
    "codeAndLanguage": {
        "name": "Code and Translation",
        "text": "Language is a huge system, and so is data. I live in these two systems every day, and I interact with the language system and the data system. When I analyze data systems, my life experience reminds me of language systems: two languages ​​translate into each other, and occasionally there are translation errors or missing meanings. This is similar to the Gmail codes I've collected: they have some lengthy error codes, possibly due to errors encountered during transmission. So I want to relate to them.",
        "shape": "PicShape",
        "size": "Medium",
        "area": "center",
        "concept": {
            "idea": "Coding as a form of translation",
            "examples": ["HTML", "CSS", "JavaScript"]
        }
    },
    "WorkingProgress": {
        "name": "Introduce how it works",
        "text": "I used my own audio imagery as the shape of the final piece. I then filled the audio pattern shapes with text and split them into five keys. Whenever the mouse is moved over a button, the background image changes, with the image from left to right showing the change in translation.",
        "shape": "PicShape",
        "size": "Small",
        "area": "bottom",
        medium: {
            isDigital: true,
            isFinal: false,
            isWorking: true
        },
        "images": [ 
            "1.png",
            "2.png",
            "3.png",
            "4.png"
        ],
        "completed": true
    },
    "final": {
        "name": "Final Presentation",
        "text": "This is the background change I mentioned in Working Progress. An email containing mutual translations into Chinese and English. In the middle process, I visualized my personal understanding of error code generation when studying the email error codes I collected. Eventually the translation was completed and the content of the email could be roughly understood, but it was wrong.",
        "shape": "Oval",
        "size": "Large",
        "area": "left",
        "images": [ 
            "11.png",
            "22.png",
            "33.png",
            "44.png",
            "55.png"
        ],
        "completed": true,
        "medium": {
            "isDigital": true,
            "isFinal": true,
            "isWorking": true
        }
    },
    "reflection": {
        "name": "Conclusion",
        "text": "By making this project, I not only learned the production of glitch art and concrete poetry, but more importantly, I learned how to dissect (analyze) myself from this project. For example, think about how I exist in a data system/language system, and how I and the system shape each other. In the future I will continue to study these and learn more about how to tell stories through visual language.",
        "shape": "Oval",
        "size": "Large",
        "area": "right",
        "image": "img/work.png",
        medium: {
            isDigital: true,
            isFinal: true,
            isWorking: true
        },
        "keyTakeaways": [
            "Embrace glitches as part of the creative process",
            "Errors can lead to innovation",
            "Coding and language are closely intertwined"
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('title').innerText = data.title;
    document.getElementById('image').src = data.image;

    const details = document.createElement('div');
    details.innerHTML = `
      <p><strong>Artist:</strong> ${data.artist}</p>
      <p><strong>Year Created:</strong> ${data.yearCreated}</p>
      <p><strong>Class:</strong> ${data.class}</p>
      <p><strong>Medium:</strong> ${data.medium}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Themes:</strong> ${data.themes.join(', ')}</p>
      <p><strong>Description:</strong> ${data.description}</p>
    `;
    document.getElementById('details').appendChild(details);

    document.getElementById('introText').innerText = data.intro.text;
    document.getElementById('introImage').src = data.intro.image;

    document.getElementById('inspirationText').innerText = data.inspirationDetails.text;
    document.getElementById('inspirationImage').src = data.inspirationDetails.chapterImage;

    document.getElementById('codeLanguageText').innerText = data.codeAndLanguage.text;

    const workingProgressText = document.getElementById('workingProgressText');
    workingProgressText.innerText = data.WorkingProgress.text;

    const workingImagesContainer = document.getElementById('workingImages');
    data.WorkingProgress.images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = "Working Progress Image";
        img.width = 300; 
        workingImagesContainer.appendChild(img);
    });

    const finalImagesContainer = document.getElementById('finalWorkImages'); 
    data.final.images.forEach(image => {
        const img = document.createElement('img');
        img.src = image; 
        img.alt = "Final Work Image"; 
        img.width = 300; 
        finalImagesContainer.appendChild(img);
    });

    document.getElementById('finalWorkText').innerText = data.final.text;
    document.getElementById('reflectionText').innerText = data.reflection.text;

    const keyTakeawaysContainer = document.getElementById('keyTakeaways'); 
    data.reflection.keyTakeaways.forEach(takeaway => {
        const takeawayElement = document.createElement('p');
        takeawayElement.innerText = takeaway;
        keyTakeawaysContainer.appendChild(takeawayElement);
    });
});