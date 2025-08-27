console.log("script injected");
// hearcounter----

// heart-btn-1
let count = 0;
let clickNumber = 0;
document.getElementById("heart-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const getHeartCounter = document.getElementById("heart-count");
  for (let i = 0; i <= clickNumber; i++) {
    count += 1;
  }
  getHeartCounter.innerText = count;
});

// heart-btn-2

document.getElementById("heart-btn-1").addEventListener("click", function (e) {
  e.preventDefault();
  const getHeartCounter = document.getElementById("heart-count");
  for (let i = 0; i <= clickNumber; i++) {
    count += 1;
  }
  getHeartCounter.innerText = count;
});

// heart-btn-3
document.getElementById("heart-btn-2").addEventListener("click", function (e) {
  e.preventDefault();
  const getHeartCounter = document.getElementById("heart-count");
  for (let i = 0; i <= clickNumber; i++) {
    count += 1;
  }
  getHeartCounter.innerText = count;
});
// heart-btn-4
document.getElementById("heart-btn-3").addEventListener("click", function (e) {
  e.preventDefault();
  const getHeartCounter = document.getElementById("heart-count");
  for (let i = 0; i <= clickNumber; i++) {
    count += 1;
  }
  getHeartCounter.innerText = count;
});

// heart-btn-5
document.getElementById("heart-btn-4").addEventListener("click", function (e) {
  e.preventDefault();
  const getHeartCounter = document.getElementById("heart-count");
  for (let i = 0; i <= clickNumber; i++) {
    count += 1;
  }
  getHeartCounter.innerText = count;
});

// heart-btn-6
document.getElementById("heart-btn-5").addEventListener("click", function (e) {
  e.preventDefault();
  const getHeartCounter = document.getElementById("heart-count");
  for (let i = 0; i <= clickNumber; i++) {
    count += 1;
  }
  getHeartCounter.innerText = count;
});
// heart-btn-7
document.getElementById("heart-btn-6").addEventListener("click", function (e) {
  e.preventDefault();
  const getHeartCounter = document.getElementById("heart-count");
  for (let i = 0; i <= clickNumber; i++) {
    count += 1;
  }
  getHeartCounter.innerText = count;
});

// heart-btn-8

document.getElementById("heart-btn-7").addEventListener("click", function (e) {
  e.preventDefault();
  const getHeartCounter = document.getElementById("heart-count");
  for (let i = 0; i <= clickNumber; i++) {
    count += 1;
  }
  getHeartCounter.innerText = count;
});

// heart-btn-9
document.getElementById("heart-btn-8").addEventListener("click", function (e) {
  e.preventDefault();
  const getHeartCounter = document.getElementById("heart-count");
  for (let i = 0; i <= clickNumber; i++) {
    count += 1;
  }
  getHeartCounter.innerText = count;
});
// getbtn call-----1
let coinsNumber = 100;
document.getElementById("btn-call").addEventListener("click", function (e) {
  e.preventDefault();
  const getCoinCounter = document.getElementById("coin-counter");

  if (coinsNumber >= 20) {
    window.alert("calling National Emergency Service 999...");
    coinsNumber -= 20;
  } else if (coinsNumber < 20) {
    window.alert("You need at least 20 coins to call");
  }
  getCoinCounter.textContent = coinsNumber;

  //   --------------history -------function
  const getTime = new Date().toLocaleTimeString();
  const getMainContainers = document.getElementById("history-containers");
  const getChildContainers = document.createElement("div");
  getMainContainers.appendChild(getChildContainers);
  getChildContainers.style.display = "flex";
  getChildContainers.style.marginTop = "15px";
  getChildContainers.style.backgroundColor = "#FAFAFA";
  getChildContainers.style.padding = "20px";
  getChildContainers.style.borderRadius = "20px";
  const CreatechildContainers1 = document.createElement("div");
  const CreatechildContainers2 = document.createElement("div");
  CreatechildContainers1.innerHTML = `<h1>National Emergency Number</h1><p style="color: gray">999</p>`;
  CreatechildContainers2.innerText = getTime;
  getChildContainers.appendChild(CreatechildContainers1);
  getChildContainers.appendChild(CreatechildContainers2);
});

// getcall button -2

document.getElementById("btn-call-1").addEventListener("click", function () {
  const getCoinCounter = document.getElementById("coin-counter");

  if (coinsNumber >= 20) {
    window.alert("calling Police Helpline Service 12145...");
    coinsNumber -= 20;
  } else if (coinsNumber < 20) {
    window.alert("You need at least 20 coins to call");
  }
  getCoinCounter.innerText = coinsNumber;
  //   ------------------------------------------
  //   --------------history -------function
  const getTime = new Date().toLocaleTimeString();
  const getMainContainers = document.getElementById("history-containers");
  const getChildContainers = document.createElement("div");
  getMainContainers.appendChild(getChildContainers);
  getChildContainers.style.display = "flex";
  getChildContainers.style.marginTop = "10px";
  getChildContainers.style.backgroundColor = "#FAFAFA";
  getMainContainers.style.marginTop = "10px";
  getChildContainers.style.padding = "20px";
  getChildContainers.style.borderRadius = "20px";
  getChildContainers.style.gap = "20px";
  const CreatechildContainers1 = document.createElement("div");
  const CreatechildContainers2 = document.createElement("div");
  CreatechildContainers1.innerHTML = `<h1>Police Helpline Number</h1><p style="color: gray">12145</p>`;
  CreatechildContainers2.innerText = getTime;
  getChildContainers.appendChild(CreatechildContainers1);
  getChildContainers.appendChild(CreatechildContainers2);
});

// getcall btn -3
document.getElementById("btn-call-2").addEventListener("click", function () {
  const getCoinCounter = document.getElementById("coin-counter");

  if (coinsNumber >= 20) {
    window.alert("calling Fire Service Number 999...");
    coinsNumber -= 20;
  } else if (coinsNumber < 20) {
    window.alert("You need at least 20 coins to call");
  }
  getCoinCounter.innerText = coinsNumber;
  //   --------------------------------------------------------
  //   --------------history -------function
  const getTime = new Date().toLocaleTimeString();
  const getMainContainers = document.getElementById("history-containers");
  const getChildContainers = document.createElement("div");
  getMainContainers.appendChild(getChildContainers);
  getChildContainers.style.display = "flex";
  getChildContainers.style.marginTop = "10px";
  getChildContainers.style.backgroundColor = "#FAFAFA";
  getMainContainers.style.marginTop = "10px";
  getChildContainers.style.padding = "20px";
  getChildContainers.style.borderRadius = "20px";
  getChildContainers.style.gap = "20px";
  const CreatechildContainers1 = document.createElement("div");
  const CreatechildContainers2 = document.createElement("div");
  CreatechildContainers1.innerHTML = `<h1>Fire Service Number</h1><p style="color: gray">999</p>`;
  CreatechildContainers2.innerText = getTime;
  getChildContainers.appendChild(CreatechildContainers1);
  getChildContainers.appendChild(CreatechildContainers2);
});

//getcall btn -4
document.getElementById("btn-call-10").addEventListener("click", function () {
  const getCoinCounter = document.getElementById("coin-counter");

  if (coinsNumber >= 20) {
    window.alert("calling Ambulance Service 456382...");
    coinsNumber -= 20;
  } else if (coinsNumber < 20) {
    window.alert("You need at least 20 coins to call");
  }
  getCoinCounter.innerText = coinsNumber;
  //   --------------------------------------------------------
  //   --------------history -------function
  const getTime = new Date().toLocaleTimeString();
  const getMainContainers = document.getElementById("history-containers");
  const getChildContainers = document.createElement("div");
  getMainContainers.appendChild(getChildContainers);
  getChildContainers.style.display = "flex";
  getChildContainers.style.marginTop = "10px";
  getChildContainers.style.backgroundColor = "#FAFAFA";
  getMainContainers.style.marginTop = "10px";
  getChildContainers.style.padding = "20px";
  getChildContainers.style.borderRadius = "20px";
  getChildContainers.style.gap = "20px";
  const CreatechildContainers1 = document.createElement("div");
  const CreatechildContainers2 = document.createElement("div");
  CreatechildContainers1.innerHTML = `<h1>Ambulance Service
</h1><p style="color: gray">456382
</p>`;
  CreatechildContainers2.innerText = getTime;
  getChildContainers.appendChild(CreatechildContainers1);
  getChildContainers.appendChild(CreatechildContainers2);
});

// getcall btn -5

document.getElementById("btn-call-4").addEventListener("click", function () {
  const getCoinCounter = document.getElementById("coin-counter");

  if (coinsNumber >= 20) {
    window.alert("calling Women & Child Helpline  10987...");
    coinsNumber -= 20;
  } else if (coinsNumber < 20) {
    window.alert("You need at least 20 coins to call");
  }
  getCoinCounter.innerText = coinsNumber;
  const getTime = new Date().toLocaleTimeString();
  const getMainContainers = document.getElementById("history-containers");
  const getChildContainers = document.createElement("div");
  getMainContainers.appendChild(getChildContainers);
  getChildContainers.style.display = "flex";
  getChildContainers.style.marginTop = "10px";
  getChildContainers.style.backgroundColor = "#FAFAFA";
  getMainContainers.style.marginTop = "10px";
  getChildContainers.style.padding = "20px";
  getChildContainers.style.borderRadius = "20px";
  getChildContainers.style.gap = "20px";
  const CreatechildContainers1 = document.createElement("div");
  const CreatechildContainers2 = document.createElement("div");
  CreatechildContainers1.innerHTML = `<h1>Women & Child Helpline

</h1><p style="color: gray">10987
</p>`;
  CreatechildContainers2.innerText = getTime;
  getChildContainers.appendChild(CreatechildContainers1);
  getChildContainers.appendChild(CreatechildContainers2);
});

// btn-call-6

document.getElementById("btn-call-5").addEventListener("click", function () {
  const getCoinCounter = document.getElementById("coin-counter");

  if (coinsNumber >= 20) {
    window.alert("calling Anti-corruption Helpline 456382...");
    coinsNumber -= 20;
  } else if (coinsNumber < 20) {
    window.alert("You need at least 20 coins to call");
  }
  getCoinCounter.innerText = coinsNumber;
  //   --------------history -------function
  const getTime = new Date().toLocaleTimeString();
  const getMainContainers = document.getElementById("history-containers");
  const getChildContainers = document.createElement("div");
  getMainContainers.appendChild(getChildContainers);
  getChildContainers.style.display = "flex";
  getChildContainers.style.marginTop = "10px";
  getChildContainers.style.backgroundColor = "#FAFAFA";
  getMainContainers.style.marginTop = "10px";
  getChildContainers.style.padding = "20px";
  getChildContainers.style.borderRadius = "20px";
  getChildContainers.style.gap = "20px";
  const CreatechildContainers1 = document.createElement("div");
  const CreatechildContainers2 = document.createElement("div");
  CreatechildContainers1.innerHTML = `<h1>Anti-Corruption Helpline

</h1><p style="color: gray">43567

</p>`;
  CreatechildContainers2.innerText = getTime;
  getChildContainers.appendChild(CreatechildContainers1);
  getChildContainers.appendChild(CreatechildContainers2);
});

// btn-call--7

document.getElementById("btn-call-6").addEventListener("click", function () {
  const getCoinCounter = document.getElementById("coin-counter");

  if (coinsNumber >= 20) {
    window.alert("calling Electricity Helpline 145678...");
    coinsNumber -= 20;
  } else if (coinsNumber < 20) {
    window.alert("You need at least 20 coins to call");
  }
  getCoinCounter.innerText = coinsNumber;
  //   --------------history -------function
  const getTime = new Date().toLocaleTimeString();
  const getMainContainers = document.getElementById("history-containers");
  const getChildContainers = document.createElement("div");
  getMainContainers.appendChild(getChildContainers);
  getChildContainers.style.display = "flex";
  getChildContainers.style.marginTop = "10px";
  getChildContainers.style.backgroundColor = "#FAFAFA";
  getMainContainers.style.marginTop = "10px";
  getChildContainers.style.padding = "20px";
  getChildContainers.style.borderRadius = "20px";
  getChildContainers.style.gap = "20px";
  const CreatechildContainers1 = document.createElement("div");
  const CreatechildContainers2 = document.createElement("div");
  CreatechildContainers1.innerHTML = `<h1>Electricity Helpline
</h1><p style="color: gray">145678
</p>`;
  CreatechildContainers2.innerText = getTime;
  getChildContainers.appendChild(CreatechildContainers1);
  getChildContainers.appendChild(CreatechildContainers2);
});

// btn-call--8

document.getElementById("btn-call-7").addEventListener("click", function () {
  const getCoinCounter = document.getElementById("coin-counter");

  if (coinsNumber >= 20) {
    window.alert("calling Brac Helpline 123456...");
    coinsNumber -= 20;
  } else if (coinsNumber < 20) {
    window.alert("You need at least 20 coins to call");
  }
  getCoinCounter.innerText = coinsNumber;
  //   --------------history -------function
  const getTime = new Date().toLocaleTimeString();
  const getMainContainers = document.getElementById("history-containers");
  const getChildContainers = document.createElement("div");
  getMainContainers.appendChild(getChildContainers);
  getChildContainers.style.display = "flex";
  getChildContainers.style.marginTop = "10px";
  getChildContainers.style.backgroundColor = "#FAFAFA";
  getMainContainers.style.marginTop = "10px";
  getChildContainers.style.padding = "20px";
  getChildContainers.style.borderRadius = "20px";
  getChildContainers.style.gap = "20px";
  const CreatechildContainers1 = document.createElement("div");
  const CreatechildContainers2 = document.createElement("div");
  CreatechildContainers1.innerHTML = `<h1>Brac Helpline

</h1><p style="color: gray">123456

</p>`;
  CreatechildContainers2.innerText = getTime;
  getChildContainers.appendChild(CreatechildContainers1);
  getChildContainers.appendChild(CreatechildContainers2);
});

// btn-call-9

document.getElementById("btn-call-8").addEventListener("click", function () {
  const getCoinCounter = document.getElementById("coin-counter");

  if (coinsNumber >= 20) {
    window.alert("calling Bangladesh Railway Helpline 163...");
    coinsNumber -= 20;
  } else if (coinsNumber < 20) {
    window.alert("You need at least 20 coins to call");
  }
  getCoinCounter.innerText = coinsNumber;
  //   --------------history -------function
  const getTime = new Date().toLocaleTimeString();
  const getMainContainers = document.getElementById("history-containers");
  const getChildContainers = document.createElement("div");
  getMainContainers.appendChild(getChildContainers);
  getChildContainers.style.display = "flex";
  getChildContainers.style.marginTop = "10px";
  getChildContainers.style.backgroundColor = "#FAFAFA";
  getMainContainers.style.marginTop = "10px";
  getChildContainers.style.padding = "20px";
  getChildContainers.style.borderRadius = "20px";
  getChildContainers.style.gap = "20px";
  const CreatechildContainers1 = document.createElement("div");
  const CreatechildContainers2 = document.createElement("div");
  CreatechildContainers1.innerHTML = `<h1>Bangladesh Railway Helpline

</h1><p style="color: gray">163

</p>`;
  CreatechildContainers2.innerText = getTime;
  getChildContainers.appendChild(CreatechildContainers1);
  getChildContainers.appendChild(CreatechildContainers2);
});

// --------------clear button-------------

const getClearButton = document
  .getElementById("btn-clear")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("you clicked clear button");
    const getHistoryContainers = document.getElementById("history-containers");
    getHistoryContainers.style.display = "none";
  });

//   copy function----------------copy1
let countCopy = 0;
const getCopyButton = document
  .getElementById("btn-copy")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const getCopyCounter = document.getElementById("copy-counter");
    countCopy++;
    getCopyCounter.textContent = countCopy;
    const createCopiedTex = document.createElement("p");
    createCopiedTex.innerText = "999";
    navigator.clipboard.writeText(createCopiedTex.innerText);
    window.alert("Number copied: 999");
  });

//   --------------------------2
const getCopyButton1 = document
  .getElementById("btn-copy-1")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const getCopyCounter = document.getElementById("copy-counter");
    countCopy++;
    getCopyCounter.textContent = countCopy;
    const createCopiedTex = document.createElement("p");
    createCopiedTex.innerText = "12145";
    navigator.clipboard.writeText(createCopiedTex.innerText);
    window.alert("Number copied: 12145");
  });

//   ----------------------------------3

const getCopyButton2 = document
  .getElementById("btn-copy-2")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const getCopyCounter = document.getElementById("copy-counter");
    countCopy++;
    getCopyCounter.textContent = countCopy;
    const createCopiedTex = document.createElement("p");
    createCopiedTex.innerText = "999";
    navigator.clipboard.writeText(createCopiedTex.innerText);
    window.alert("Number copied: 999");
  });

//----------------------------4
const getCopyButton4 = document
  .getElementById("btn-copy-3")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const getCopyCounter = document.getElementById("copy-counter");
    countCopy++;
    getCopyCounter.textContent = countCopy;
    const createCopiedTex = document.createElement("p");
    createCopiedTex.innerText = "456382";
    navigator.clipboard.writeText(createCopiedTex.innerText);
    window.alert("Number copied: 456382");
  });
//------------------------5

const getCopyButton5 = document
  .getElementById("btn-copy-4")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const getCopyCounter = document.getElementById("copy-counter");
    countCopy++;
    getCopyCounter.textContent = countCopy;
    const createCopiedTex = document.createElement("p");
    createCopiedTex.innerText = "10987";
    navigator.clipboard.writeText(createCopiedTex.innerText);
    window.alert("Number copied: 10987");
  });

//   -----------------------6

const getCopyButton6 = document
  .getElementById("btn-copy-5")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const getCopyCounter = document.getElementById("copy-counter");
    countCopy++;
    getCopyCounter.textContent = countCopy;
    const createCopiedTex = document.createElement("p");
    createCopiedTex.innerText = "43567";
    navigator.clipboard.writeText(createCopiedTex.innerText);
    window.alert("Number copied: 43567");
  });

//   ----------------7

const getCopyButton7 = document
  .getElementById("btn-copy-6")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const getCopyCounter = document.getElementById("copy-counter");
    countCopy++;
    getCopyCounter.textContent = countCopy;
    const createCopiedTex = document.createElement("p");
    createCopiedTex.innerText = "145678";
    navigator.clipboard.writeText(createCopiedTex.innerText);
    window.alert("Number copied: 145678");
  });

//   -----------------------8
const getCopyButton8 = document
  .getElementById("btn-copy-7")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const getCopyCounter = document.getElementById("copy-counter");
    countCopy++;
    getCopyCounter.textContent = countCopy;
    const createCopiedTex = document.createElement("p");
    createCopiedTex.innerText = "123456";
    navigator.clipboard.writeText(createCopiedTex.innerText);
    window.alert("Number copied: 123456");
  });

//   -----------------------9

const getCopyButton9 = document
  .getElementById("btn-copy-8")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const getCopyCounter = document.getElementById("copy-counter");
    countCopy++;
    getCopyCounter.textContent = countCopy;
    const createCopiedTex = document.createElement("p");
    createCopiedTex.innerText = "163";
    navigator.clipboard.writeText(createCopiedTex.innerText);
    window.alert("Number copied: 163");
  });
