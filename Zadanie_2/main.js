const charSet1 = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  '1',
  '2',
  '3',
  '4',
  '5',
];
const charSet2 = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  '1',
  '2',
  '3',
  '4',
  '5',
  '',
  '',
];

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

const generateCharSet = () => {
  const externalId = `${charSet2[Math.floor(Math.random() * charSet2.length)]}${
    charSet2[Math.floor(Math.random() * charSet2.length)]
  }${charSet1[Math.floor(Math.random() * charSet1.length)]}${
    charSet1[Math.floor(Math.random() * charSet1.length)]
  }${charSet1[Math.floor(Math.random() * charSet1.length)]}`;
  return externalId;
};

const showData = (posts) => {
  const resultArea = document.querySelector('.posts-list');
  const allPosts = [...posts];

  const arr = allPosts.map((allPosts) => ({
    internalId: allPosts.id,
    externalId: generateCharSet(),
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
