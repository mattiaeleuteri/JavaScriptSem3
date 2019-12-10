fetch('https://baconipsum.com/api/?type=all-meat&paras=1&format=text')
  .then((res) => res.text())
  .then((res) => {
    console.log(res);
  });
