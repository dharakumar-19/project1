document.querySelector('form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email')?.value;
  const password = document.getElementById('password')?.value;
  const role = document.getElementById('role')?.value;

  if (!email || !password || !role) {
    alert("Please fill in all fields");
    return;
  }

  console.log("Login attempt:", { email, password, role });

  if (role === 'teacher') {
    window.location.href = 'teacher-dashboard.html';
  } else if (role === 'student') {
    window.location.href = 'student-dashboard.html';
  } else {
    alert('Please select a valid role');
  }
});
