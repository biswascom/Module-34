const loadUsers = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUsers(data))
};

const displayUsers = data => {
    console.log(data.results[0].email);
    const name = document.getElementById('name');
    const gender = document.getElementById('gender');
    const email = document.getElementById('email');

    name.innerText = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
    gender.innerText = data.results[0].gender;
    email.innerText = data.results[0].email;
}

loadUsers();