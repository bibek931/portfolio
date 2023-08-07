var dataJson = [
    {
        "link":"https://www.instagram.com/_bibek_sah/",
        "title":"Instagram",
        "icon":"./res/instagram.svg"
    },
    {
        "link":"https://github.com/bibek931/",
        "title":"GitHub",
        "icon":"./res/github.svg"
    },
    {
        "link":"https://t.me/bibeksah",
        "title":"Telegram",
        "icon":"./res/telegram.svg"
    },
    {
        "link":"https://www.youtube.com/channel/bibek931",
        "title":"YouTube",
        "icon":"./res/youtube.svg"
    },
    {
        "link":"https://api.whatsapp.com/send?phone=918904005840",
        "title":"Whatsapp",
        "icon":"./res/whatsapp.svg"
    }
];

var raw_html = "";
dataJson.forEach(function(item){
    raw_html += `<li>
    <a
      rel="noopener"
      href="${item.link}"
      target="_blank"
      title="${item.title}">
      <img title="${item.title}" src="${item.icon}" class="svg-icon"/>
      </a>
  </li>`;
})

document.getElementById('social-links').innerHTML = `<ul>${raw_html}</ul>`;

