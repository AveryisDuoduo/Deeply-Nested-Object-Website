document.addEventListener('DOMContentLoaded', () => {
    fetch('class.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
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
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
});
