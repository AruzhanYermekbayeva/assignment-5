const tabs = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

// Add click event listener to each tab
tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    // Remove active class from all tabs and panes
    tabs.forEach(tab => tab.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));

    // Add active class to the clicked tab and corresponding pane
    this.classList.add('active');
    document.getElementById(this.getAttribute('data-tab')).classList.add('active');
  });
});

