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

const showData = (posts) => {
  const resultArea = document.querySelector('.posts-list');

  posts.forEach((post) => {
    if (post.id % 2 === 0 || post.id % 3 === 0) {
      console.log(post);

      const item = document.createElement('div');
      item.className = 'post';
      item.innerHTML = `
    <div class="post_id">${post.id}</div>
    <div class="post_title">${post.title}</div>`;
      resultArea.appendChild(item);
    }
  });
};

getData();
