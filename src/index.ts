import SWProxy from "@yrobot/sw-proxy/client";

const imageBase64 =
  "data:image/png;base64,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";

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>sw-proxy</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <img src="/images/yrobot.png" />
    <div class="title">
      Hi, This is <span class="red">sw-proxy</span>
    </div>
  </body>
</html>`;

const css = `
body {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}
.title {
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-top: 32px;
}
.red {
  color: red;
}`;

const js = `
console.log('iframe','Hello World');
`;

// convert base64 to blob in service worker
const base64ToBlob = async (base64: string): Promise<Blob> => {
  return fetch(base64).then((res) => res.blob());
};

const swProxy = new SWProxy({
  key: "/sw-proxy.js",
});

(async () => {
  await swProxy.resister();
  await swProxy.set([
    {
      url: "/hi",
      response: async () => ({
        body: "hello world" + (parseInt(`${Date.now() / 1000}`, 10) % 1000),
      }),
    },
    {
      url: "/post",
      method: "POST",
      response: async () => ({
        body: JSON.stringify({
          time: new Date().toLocaleString(),
          name: "sw-proxy",
        }),
        options: {
          headers: {
            "content-type": "application/json",
          },
        },
      }),
    },
    {
      url: "/images/yrobot.png",
      response: {
        body: await base64ToBlob(imageBase64),
      },
    },
    {
      url: "/iframe/index.html",
      response: {
        body: html,
        options: {
          headers: {
            "content-type": "text/html",
          },
        },
      },
    },
    {
      url: "/iframe/style.css",
      response: {
        body: css,
        options: {
          headers: {
            "content-type": "text/css",
          },
        },
      },
    },
    {
      url: "/iframe/index.js",
      response: {
        body: js,
        options: {
          headers: {
            "content-type": "application/javascript",
          },
        },
      },
    },
  ]);

  const iframe = document.createElement("iframe");
  iframe.className = "w-full h-full";
  iframe.src = "/iframe/index.html";
  document.getElementById("window-content")?.appendChild(iframe);
})();

const buttons = [
  {
    children: "GET",
    onClick: () => {
      fetch("/hi");
    },
  },
  {
    children: "POST",
    onClick: () => {
      fetch("/post", { method: "POST" });
    },
  },
  {
    children: "IMAGE",
    onClick: () => {
      fetch("/images/yrobot.png");
    },
  },
  {
    children: "HTML",
    onClick: () => {
      fetch("/iframe/index.html");
    },
  },
  {
    children: "JS",
    onClick: () => {
      fetch("/iframe/index.js");
    },
  },
  {
    children: "CSS",
    onClick: () => {
      fetch("/iframe/style.css");
    },
  },
];

const buttonsContainer = document.getElementById("buttons-container");

buttons.forEach(({ children, onClick }) => {
  const button = document.createElement("button");
  button.className = "btn";
  button.innerHTML = children;
  button.onclick = onClick;
  buttonsContainer?.appendChild(button);
});
