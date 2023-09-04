const dropZone = document.getElementById('dropZone');

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');

    const files = e.dataTransfer.files;
    handleFiles(files);
});

function handleFiles(files) {
    for (const file of files) {
        // Here, you can do something with each file, like uploading or processing it.
        console.log(`File Name: ${file.name}, File Size: ${file.size} bytes`);
    }
}
