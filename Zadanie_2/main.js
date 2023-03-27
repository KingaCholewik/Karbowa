const getData = () => {
  const url = `https:jsonplaceholder.typicode.com/posts`;

  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        throw Error('To nie jest odpowiedź 200');
      } else {
        return response.json();
      }
    })
    .then((json) => showData(json))
    .catch((err) => console.log(err));
};

const generateRandomString = () => {
  const length = Math.floor(Math.random() * 3) + 3;
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const showData = (posts) => {
  const resultArea = document.querySelector('.posts-list');
  const allPosts = [...posts];

  const arr = allPosts.map((allPosts) => ({
    internalId: allPosts.id,
    externalId: generateRandomString(),
    title: allPosts.title,
    body: allPosts.body,
  }));
  console.log(arr);

  arr.forEach((post) => {
    if (post.internalId % 6 === 0) {
      const item = document.createElement('div');
      item.className = 'post';
      item.innerHTML = `
    <div class="post_id">${post.externalId}</div>
    <div class="post_title">${post.title}</div>`;
      resultArea.appendChild(item);
    }
  });
};

getData();
