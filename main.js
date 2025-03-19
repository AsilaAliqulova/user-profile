const rootEl = document.querySelector(".root");

// rendering
function allUserShow(users) {
  users.forEach((user) => {
    rootEl.innerHTML += `
                    <div class="card">
                        <img  class="uimage"  src="${user.image}" alt="User photos">
                        <div class="uinfo" >
                        <h3 class="uname">${user.firstName} ${user.lastName}</h3>
                        <p class="address">${user.address.city}, ${user.address.state}</p>
                        <div class="tag-container" >
                        <span class="tag">${user.company.department}</span>
                        <span class="tag">${user.role}</span>
                        
                        </div>
                        </div>
                    </div>
                `;
  });
}

// fetching
fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((result) => allUserShow(result.users));
