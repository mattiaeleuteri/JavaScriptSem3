fetch('https://baconipsum.com/api/?type=all-meat&paras=1&format=json')
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });
