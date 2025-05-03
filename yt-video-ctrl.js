document.addEventListener('DOMContentLoaded', function () {
    var videoFrame = document.getElementById('videoFrame');
    var videoContainer = document.getElementById('videoContainer');

    // Check if src is empty
    if (!videoFrame.getAttribute('src')) {
        // Create the warning message elements dynamically
        var warningMessage = document.createElement('center');
        warningMessage.id = 'warningMessage';

        var noEntryIcon = document.createElement('span');
        noEntryIcon.setAttribute('data-uk-icon', 'icon: ban');
        noEntryIcon.style.color = '#ff3547';
        noEntryIcon.style.userSelect = 'none'; // Prevent icon selection
        noEntryIcon.style.width = '48px'; // Set icon width
        noEntryIcon.style.height = '48px'; // Set icon height
        noEntryIcon.style.display = 'inline-block'; // Required for size styling

        var messageText = document.createElement('p');
        messageText.textContent = 'Video Bulunamadı...';
        messageText.style.userSelect = 'none'; // Prevent text selection

        // Append elements to the warning message
        warningMessage.appendChild(noEntryIcon);
        warningMessage.appendChild(messageText);

        // Insert the warning message after the video container
        videoContainer.parentNode.insertBefore(warningMessage, videoContainer.nextSibling);

        // Hide the video container
        videoContainer.style.display = 'none';
    }
});
