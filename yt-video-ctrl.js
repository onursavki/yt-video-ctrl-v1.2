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
        noEntryIcon.style.userSelect = 'none';

        var messageText = document.createElement('p');
        messageText.textContent = 'Video Bulunamadı...';
        messageText.style.userSelect = 'none';

        // Append elements to the warning message
        warningMessage.appendChild(noEntryIcon);
        warningMessage.appendChild(messageText);

        // Insert the warning message after the video container
        videoContainer.parentNode.insertBefore(warningMessage, videoContainer.nextSibling);

        // Hide the video container
        videoContainer.style.display = 'none';

        // Delay to ensure UIkit inserts the SVG before styling
        setTimeout(function () {
            var svgIcon = noEntryIcon.querySelector('svg');
            if (svgIcon) {
                svgIcon.style.width = '40px';
                svgIcon.style.height = '40px';
                svgIcon.style.color = '#ff3547';
            }
        }, 100); // UIkit needs a short delay to inject the SVG
    }
});
