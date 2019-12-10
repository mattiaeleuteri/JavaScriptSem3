const no = 1 + Math.round(Math.random() * 9);

// Partie 1
const user = fetch(`https://jsonplaceholder.typicode.com/users/${no}`).then(
  (res) => res.json(),
);

// Partie 2
const paragraphe = fetch(
  'https://baconipsum.com/api/?type=all-meat&paras=1&format=json',
).then((res) => res.json());

// Partie 3
Promise.all([user, paragraphe]).then((res) => {
  const post = {
    title: res[0].name,
    body: res[1],
    userId: no,
  };
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    header: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
    });
});
