function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => section.classList.remove('active-section'));
    document.getElementById(sectionId).classList.add('active-section');
  }
  
  // Club Registration Handling
  const clubApprovals = [];
  document.getElementById('club-registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const clubName = document.getElementById('clubName').value;
    const presidentName = document.getElementById('presidentName').value;
    const description = document.getElementById('description').value;
  
    clubApprovals.push({ clubName, presidentName, description });
    alert('Club submitted for approval!');
    this.reset();
    updateAdminDashboard();
  });
  
  // Admin Approval Handling
  function updateAdminDashboard() {
    const approvalList = document.getElementById('club-approvals');
    approvalList.innerHTML = '';
    clubApprovals.forEach((club, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${club.clubName} - ${club.presidentName}`;
      const approveButton = document.createElement('button');
      approveButton.textContent = 'Approve';
      approveButton.onclick = () => {
        clubApprovals.splice(index, 1);
        updateAdminDashboard();
        alert(`${club.clubName} approved!`);
      };
      listItem.appendChild(approveButton);
      approvalList.appendChild(listItem);
    });
  }
  
  // Club Workspace Task Management
  function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    if (taskInput.value) {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskInput.value;
      taskList.appendChild(taskItem);
      taskInput.value = '';
    }
  }
  
  // Feedback Handling
  document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const eventName = document.getElementById('eventName').value;
    const feedbackText = document.getElementById('feedbackText').value;
    alert(`Feedback for ${eventName} submitted!`);
    this.reset();
  });
  