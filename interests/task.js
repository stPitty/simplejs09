const interest = document.querySelectorAll('.interest__check')

function checkParent(checkBox) {
  let findParent = checkBox.closest('.interest');
  while (findParent) {
    const parentCheckBox = findParent.querySelector('.interest__check')
    if (parentCheckBox !== checkBox) {
      parentCheckBox.checked = checkBox.checked;
      parentCheckBox.indeterminate = !checkChild(parentCheckBox, true);
    }
    findParent = findParent.closest('.interests').closest('.interest');
  }
}

function checkChild(checkBox, checkOnly=false) {
  let result = true
  const findChildren = checkBox.closest('.interest').querySelectorAll('.interest__check');
  for (let child of findChildren) {
    if (child !== checkBox && !checkOnly) {
      child.checked = checkBox.checked;
    } else if (checkOnly && !child.checked) {
      result = false
    }
  }
  return result
}

for (let checkBox of interest) {
  checkBox.addEventListener('click', () => {
    checkParent(checkBox);
    checkChild(checkBox);
  })
}