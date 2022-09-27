const args = process.argv.slice(2);

if (!args[0]) {
  return;
}

for (let ele of args) {
  ele = Number(ele);
  if (isNaN(ele)) {
    return;
  }
  if (ele >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, ele * 1000);
  }
}